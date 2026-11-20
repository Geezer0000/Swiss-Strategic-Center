# Swiss Strategic Center – richtet die automatische Aktualisierung in der Windows-Aufgabenplanung ein.
# Läuft unabhängig von der Claude-App: alle 2 Stunden und bei der Anmeldung (verpasste Läufe werden nachgeholt).
# Schonend: startet nur, wenn der PC 5 Minuten unbenutzt ist, stoppt bei Benutzeraktivität (setzt später fort),
# läuft mit niedriger Priorität; der Updater entlädt das KI-Modell danach sofort aus dem Grafikspeicher.
# Aufruf:  powershell -ExecutionPolicy Bypass -File install-task.ps1          (einrichten/aktualisieren)
#          powershell -ExecutionPolicy Bypass -File install-task.ps1 -Remove  (entfernen)
param([switch]$Remove, [int]$EveryHours = 2, [int]$IdleMinutes = 5)

$TaskName = 'Swiss Strategic Center - Lage-Update'
if ($Remove) {
    Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false -ErrorAction SilentlyContinue
    Write-Output "Aufgabe '$TaskName' entfernt."
    return
}

$Here = Split-Path -Parent $MyInvocation.MyCommand.Path
$Pythonw = Join-Path $env:LOCALAPPDATA 'Microsoft\WindowsApps\pythonw.exe'
if (-not (Test-Path $Pythonw)) { $Pythonw = (Get-Command pythonw.exe -ErrorAction Stop).Source }

$Action = New-ScheduledTaskAction -Execute $Pythonw -Argument "`"$Here\ssc_updater.py`"" -WorkingDirectory $Here
$Repeat = New-ScheduledTaskTrigger -Once -At (Get-Date).Date.AddMinutes(5) -RepetitionInterval (New-TimeSpan -Hours $EveryHours)
$Logon  = New-ScheduledTaskTrigger -AtLogOn -User "$env:USERDOMAIN\$env:USERNAME"
$Settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries `
    -ExecutionTimeLimit (New-TimeSpan -Hours 2) -MultipleInstances IgnoreNew -Priority 7 `
    -RunOnlyIfIdle -IdleDuration (New-TimeSpan -Minutes $IdleMinutes) -IdleWaitTimeout (New-TimeSpan -Hours $EveryHours) -RestartOnIdle
$Principal = New-ScheduledTaskPrincipal -UserId "$env:USERDOMAIN\$env:USERNAME" -LogonType Interactive -RunLevel Limited

Register-ScheduledTask -TaskName $TaskName -Action $Action -Trigger @($Repeat, $Logon) -Settings $Settings `
    -Principal $Principal -Description 'Aktualisiert data/update.js des Swiss Strategic Center (Wikipedia, SRF, NZZ + lokale KI via Ollama).' -Force | Out-Null
Write-Output "Aufgabe '$TaskName' eingerichtet: alle $EveryHours Stunden und bei Anmeldung, nur nach $IdleMinutes Min. Leerlauf, niedrige Priorität."

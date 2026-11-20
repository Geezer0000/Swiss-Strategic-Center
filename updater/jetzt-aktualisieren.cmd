@echo off
rem Swiss Strategic Center – Lage-Update sofort ausführen (mit sichtbarem Protokoll)
cd /d "%~dp0"
python ssc_updater.py
echo.
pause

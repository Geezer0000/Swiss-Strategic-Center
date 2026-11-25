# Swiss Strategic Center – automatische Aktualisierung

Der Updater läuft ohne Claude-App direkt auf diesem PC.

**Zeitplan:** Windows-Aufgabenplanung, Aufgabe «Swiss Strategic Center - Lage-Update». Sie läuft alle 2 Stunden und bei jeder Anmeldung; verpasste Läufe holt sie nach. Der PC muss eingeschaltet sein und du musst angemeldet sein.

**Schonender Betrieb:**
- Ein Lauf startet nur, wenn der PC 5 Minuten unbenutzt ist.
- Wirst du wieder aktiv, hält Windows den Lauf an und setzt ihn bei der nächsten Leerlaufphase fort. Bereits übersetzte Meldungen bleiben gespeichert.
- Der Updater und die KI laufen mit niedriger Priorität.
- Nach jedem Lauf wird das Modell sofort aus dem Grafikspeicher entladen.

**Was ein Lauf macht:**
1. **Quellen holen:** die Wikipedia-Tagesportale «Current events» der letzten 3 Tage sowie Schweizer Meldungen aus den RSS-Feeds von SRF und NZZ.
2. **Einordnen:** neue Meldungen werden Konflikt, Ereignistyp und Land zugeordnet. Die Orte kommen aus den Wikipedia-Koordinaten (Ersatz: OpenStreetMap). Ein Punkt, der nicht im Konfliktgebiet liegt, wird verworfen.
3. **Übersetzen:** Die lokale KI (Ollama mit `qwen2.5:7b`) übersetzt ins Deutsche mit Schweizer Rechtschreibung, schreibt Kurztitel und Opferangaben.
4. **Schreiben:** Das Ergebnis geht nach `../data/update.js`. Die geöffnete Webseite lädt die Datei alle 10 Minuten automatisch nach.
5. **Exportieren:** Die Handy-/PC-Version `../Swiss-Strategic-Center-Mobil.html` wird mit dem neuen Stand neu erzeugt. Sie ist eine einzige Datei mit allen Daten darin (Quellcode im Ordner `../export/`).
6. **GitHub-Sync:** Wenn `"git_auto_push": true` in `config.json` aktiv ist, committet und pusht der Updater nur die aktualisierten Daten (`data/update.js`, `Swiss-Strategic-Center-Mobil.html`, `updater/state.json`) automatisch auf GitHub (`origin/main`). Andere lokale Änderungen bleiben unberührt. Mit `python ssc_updater.py --no-push` lässt sich der Push für einen einzelnen Lauf überspringen.

| Datei | Zweck |
|---|---|
| `ssc_updater.py` | Updater |
| `config.json` | Modell, Zeitraum, Feeds (z. B. `"model": "qwen2.5:3b"` für schnellere Läufe) |
| `jetzt-aktualisieren.cmd` | Sofort aktualisieren (Doppelklick, mit Protokoll) |
| `install-task.ps1` | Aufgabe einrichten (`-EveryHours 4` ändert das Intervall, `-IdleMinutes 10` die Leerlaufzeit, `-Remove` entfernt sie) |
| `updater.log` | Protokoll aller Läufe |
| `state.json` | Zwischenspeicher (bereits übersetzte Meldungen, Koordinaten) |

**Grenzen:** Die lokale KI ist weniger genau als grosse Modelle. Neue Krisenherde erscheinen als Punkte und Meldungen, aber ohne eigene Provinzflächen. Die kuratierten Länderdossiers werden nur im Abschnitt «Aktuell» ergänzt.

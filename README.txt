HTM Arbeitszeiterfassung – Version 20
=====================================

Dieser Ordner ist komplett für GitHub Pages vorbereitet.

Enthalten:
- index.html                 Haupt-App
- manifest.json              PWA/App-Einstellungen
- sw.js                      Service Worker / Update- und Offline-Funktion
- .nojekyll                  GitHub-Pages-Hilfsdatei
- icons/icon-192.png         App-Symbol
- icons/icon-512.png         App-Symbol gross
- qr/stempeln.png            Ein QR-Code für Kommen/Pause/Gehen
- INSTALLATION.txt           Kurzanleitung

WICHTIG:
Beim Hochladen auf GitHub die Ordner "icons" und "qr" mit hochladen und die Ordnerstruktur nicht verändern.
Die vorhandenen Zeitdaten liegen im Browser unter dem gleichbleibenden HTM-Datenspeicher und werden bei normalen Versionsupdates nicht absichtlich gelöscht oder umbenannt. Vor grösseren Änderungen empfiehlt sich zusätzlich die JSON-Datensicherung in der App.

HTM v20 enthält u. a.:
- Live-Uhr oben auf der Startseite
- Admin nur im Dropdown
- Kalender und Abwesenheiten zusammengeführt
- Bärndütsch
- Solothurner Feiertagslogik
- Notfalldienst Wochenende x2
- Überstundenabbau
- getrennte Mitarbeiterprofile
- Datensicherung
- optionaler Standort nur bei KOMMEN und GEHEN
- Standortkoordinaten später anklickbar; erst dann öffnet sich Google Maps
- alte Monate tageweise nachtragen: Monat -> Tag -> Von/Bis -> optionale Pause
- bestehende alte Monats-Gesamtnachträge aus v19 bleiben erhalten, bis sie bewusst gelöscht/umgestellt werden

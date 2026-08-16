HTM – Arbeitszeiterfassung
Beta 0.029 – Blue Design

Diese Version basiert auf der vollständigen bisherigen HTM-Web-App-Struktur.

Enthalten:
- Stempeln: Kommen, Pause starten/beenden, Gehen
- Wochenend-Notdienst ×2
- Kalender & Abwesenheiten
- Monats- und Tagesübersichten
- Historische Arbeitszeiten tageweise nachtragen
- Feiertage Kanton Solothurn / Bucheggberg
- Mitarbeiterprofile
- Adminbereich und Korrekturprotokoll
- Standort beim Kommen/Gehen optional
- QR-Code-Stempeln
- CSV- und PDF-Ausgabe
- JSON-Datensicherung
- PWA/Web-App mit Manifest und Service Worker

Design:
- blaues HTM-Design
- Aptos als bevorzugte Schriftart mit System-Fallback
- responsive Kopfzeile mit Mitarbeiter, Live-Uhr und HTM
- kompaktere Stempelbuttons

Hinweis:
Aptos wird verwendet, wenn die Schrift auf dem Gerät vorhanden ist. Andernfalls verwendet die App automatisch eine kompatible Systemschrift.

Sicherheit Beta 0.029:
- Admin-Schutz für historische Nachträge
- Vergangene Stunden können erst nach PIN-Freigabe im Adminbereich geändert werden

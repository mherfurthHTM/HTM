HTM – Arbeitszeiterfassung

Neu in Beta 0.032:
- PDF-Arbeitszeitauszug vollständig neu gestaltet
- professionelles A4-Hochformat mit HTM-Kopfzeile
- Mitarbeiter, Zeitraum und Erstellungsdatum klar zusammengefasst
- vier Kennzahlen für Arbeitszeit, Zeitgutschrift, Sollzeit und Saldo
- dezente Legende für Arbeit, Ferien, Krankheit und Überstundenabbau
- sachliche Tages-Tabelle mit Kommen, Gehen, Pause, Arbeitszeit, Soll und Saldo
- Gesamtübersicht, Dokumentfuss und Seitenzahlen
- PDF-Vorschau in der App entspricht dem neuen Design

Bisher in Beta 0.030:
- Individuelles Arbeitsmodell pro Mitarbeiter
- Arbeitstage Montag bis Freitag frei auswählbar
- Sollzeit je Wochentag einstellbar
- Arbeitsmodelle mit Gültig-ab-Datum
- Sollzeit-Berechnung rückwirkend ab 01.01.2026 möglich
- Monats-Sollzeit wird automatisch aus dem hinterlegten Arbeitsmodell berechnet
- Stempelbuttons bleiben im 2×2-Raster

Beta 0.032 – Blue Design

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

Sicherheit (bestehend):
- Admin-Schutz für historische Nachträge
- Vergangene Stunden können erst nach PIN-Freigabe im Adminbereich geändert werden

Nachtrag (bestehend):
- „Speichern & nächster Tag“ springt zuverlässig auf den nächsten Kalendertag.
- Von-, Bis- und Pausenzeit werden bei einem leeren Folgetag automatisch übernommen.
- Bereits gespeicherte Folgetage zeigen weiterhin ihre eigenen gespeicherten Zeiten.

Korrektur (bestehend):
- Manuell nachgetragene normale Arbeitstage werden in Übersicht, Kalender, PDF und CSV als „Arbeit“ angezeigt.
- „Zusatzarbeit / Notdienst ×2“ erscheint nur, wenn beim Nachtrag Notfalldienst ausdrücklich aktiviert wurde.

Korrektur (bestehend):
- Die Monats-Sollzeit in Übersicht und Kalender wird jetzt aus dem eingestellten Arbeitsmodell berechnet.
- Berücksichtigt werden ausgewählte Arbeitstage, Sollzeit je Arbeitstag und die hinterlegten Feiertage.
- Die Sollzeit wird auch bei alten, tageweise nachgetragenen Monaten vollständig angezeigt.

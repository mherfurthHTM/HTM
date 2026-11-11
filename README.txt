HTM – Arbeitszeiterfassung

Neu in Beta 0.035:
- Wochenweise abweichende Arbeitstage und Sollstunden einstellen (auch Halbtage, z. B. 4.25 Stunden)
- Wochen-Ausnahmen gelten nur von Montag bis Sonntag; das normale Arbeitsmodell bleibt unverändert
- Bereits gespeicherte Wochen-Ausnahmen nachträglich bearbeiten oder entfernen
- Die Berechnung von Monats-Sollstunden, Tagesdifferenzen, Gesamtsaldo und PDF nutzt die gespeicherten Wochen-Ausnahmen
- Bestehende Stempelzeiten bleiben unverändert, Daten weiterhin unter "htm_app_data_v1"

Neu in Beta 0.034:
- Krankheit und Kind krank mit Teilzeitoptionen und optionalem Arztzeugnis als PDF

Neu in Beta 0.033:
- Im Kalender unter „Auswahl bearbeiten“ ist „Kind krank“ als eigene Abwesenheitsart verfügbar
- „Kind krank“ wird im Kalender rot gekennzeichnet, aber als eigener Status gespeichert
- In der PDF wird „Kind krank“ getrennt von den eigenen Krankheitstagen ausgewiesen
- Bestehende Daten und Einstellungen aus Beta 0.033 bleiben erhalten

Bisher in Beta 0.033:
- Uhrzeiten beim manuellen Nachtragen direkt eintippen statt über das Zeitrad scrollen
- Eingaben wie 700 oder 07:00 werden als 07:00 erkannt
- Pause wird jetzt mit „Pause von“ und „Pause bis“ erfasst
- Pausendauer wird automatisch berechnet
- „Speichern & nächster Tag“ öffnet zuverlässig den folgenden Kalendertag
- Bei einem leeren Folgetag werden Kommen, Gehen sowie Pause von/bis übernommen
- Bereits gespeicherte Folgetage behalten ihre eigenen Werte
- Auch bei der nachträglichen Arbeitstags-Korrektur im Kalender ist die direkte Uhrzeiteingabe verfügbar
- PDF-Auszug enthält eine deutlich sichtbare Tagesübersicht mit Ferientagen und Krankheitstagen
- Bestehende Daten aus Beta 0.032 bleiben kompatibel; alte Einträge mit nur gespeicherter Pausendauer werden weiter korrekt berechnet

Bisher in Beta 0.032:
- professioneller PDF-Arbeitszeitauszug im A4-Hochformat
- Mitarbeiter, Zeitraum und Erstellungsdatum klar zusammengefasst
- Kennzahlen für Arbeitszeit, Zeitgutschrift, Sollzeit und Saldo
- Tages-Tabelle mit Kommen, Gehen, Pause, Arbeitszeit, Soll und Saldo
- Mitarbeiterdaten unter Einstellungen sichtbar und nachträglich bearbeitbar
- PWA-Update-System für GitHub Pages / iPhone verbessert

Bisher in Beta 0.030/0.031:
- Individuelles Arbeitsmodell pro Mitarbeiter
- Arbeitstage Montag bis Freitag frei auswählbar
- Sollzeit je Wochentag einstellbar
- Arbeitsmodelle mit Gültig-ab-Datum
- Sollzeit-Berechnung rückwirkend ab 01.01.2026 möglich
- Arbeitstage direkt im Kalender bearbeiten und löschen
- Abwesenheiten direkt im Kalender bearbeiten und löschen

Beta 0.033 – Blue Design

Enthalten:
- Stempeln: Kommen, Pause starten/beenden, Gehen
- Wochenend-Notdienst ×2
- Kalender & Abwesenheiten
- Monats- und Tagesübersichten
- Historische Arbeitszeiten tageweise nachtragen
- Feiertage Kanton Solothurn / Bucheggberg
- Mitarbeiterprofile mit bearbeitbaren Stammdaten
- Adminbereich und Korrekturprotokoll
- Standort beim Kommen/Gehen optional
- QR-Code-Stempeln
- CSV- und PDF-Ausgabe
- JSON-Datensicherung
- PWA/Web-App mit Manifest und Service Worker

DATENERHALT
Die App verwendet weiterhin denselben lokalen Speicherschlüssel „htm_app_data_v1“. Bei einem Update unter derselben GitHub-Pages-Adresse bleiben vorhandene Profile, Zeiten und Einstellungen erhalten.

# My Notes – Premium Landingpage (Leder & Papier)

Eine responsive, statische Landingpage für **My Notes / Meine Notizen & Listen v2.1** im warmen Leder-Papier-Stil – einschließlich Datenschutzerklärung, Impressum, englischer Fassungen, Bildgalerie und Theme-Demo.

## Dateien

- `index.html` – Startseite auf Deutsch
- `en.html` – Startseite auf Englisch
- `datenschutz.html` – Datenschutzerklärung (DE)
- `privacy.html` – Privacy Policy (EN)
- `impressum.html` – Impressum (DE)
- `imprint.html` – Legal Notice (EN)
- `style.css` – Styles (responsive, ohne Framework)
- `script.js` – Mobile Navigation, Galerie/Lightbox, Hell-/Abend-Vorschau
- `assets/` – optimierte lokale WebP-Bilder und PNG-Favicon

Alle Assets werden lokal ausgeliefert. **Keine** externen Schriften, Analytics-Skripte oder CSS-/JS-CDNs erforderlich.

## Auf GitHub Pages veröffentlichen

1. Bestehendes Repository `my-notes-landing-page` öffnen.
2. Dateien aus diesem Ordner in das GitHub-Pages-Veröffentlichungsverzeichnis kopieren (üblicherweise Repository-Root; die Ordnerstruktur beibehalten).
3. Änderungen committen und pushen.
4. Unter **Settings → Pages** prüfen, dass `main` / `(root)` oder der verwendete Veröffentlichungsordner ausgewählt ist.
5. Die Seite unter `https://marcel-2025.github.io/My-Notes-Premium/` prüfen.
6. In der Google Play Console die Datenschutz-URL bei Bedarf auf `https://marcel-2025.github.io/My-Notes-Premium/datenschutz.html` aktualisieren.

## Wichtige Prüfungen vor Veröffentlichung

- **Google Play Data Safety:** Der öffentlich sichtbare Google-Play-Eintrag wurde bei der Recherche noch mit älteren Angaben indiziert. Gleiche die aktuelle Erklärung mit den echten Datenübertragungen von AdMob, Billing, UMP und eventuellen weiteren SDKs ab. Die Website kann die Play-Console-Angaben nicht ersetzen.
- **App-Status:** Die Landingpage verwendet die vom Entwickler gelieferten Patch Notes für Version 2.1 (versionCode 4). Die Funktionen und beworbenen UI-Mockups vor Veröffentlichung auf einem Gerät mit dem tatsächlichen Release prüfen.
- **Impressum:** Die öffentlich im Google-Play-Eintrag aufgeführten Kontaktdaten wurden übernommen. Aktualität und Vollständigkeit überprüfen.
- **Datenschutz:** Die Datenschutzerklärung ist eine redaktionelle Vorlage nach dem beschriebenen Projektstand und keine technische Audit-Bestätigung oder anwaltliche Rechtsberatung.
- **Preis:** Premium wird nur als einmaliger Werbefrei-Kauf ohne Abo beworben; keine erfundenen Preise.

## Externe Links

- Store: https://play.google.com/store/apps/details?id=dev.flondy.mynotes
- Google AdMob SDK-Datentransparenz: https://developers.google.com/admob/android/privacy/play-data-disclosure
- Google Play Data Safety: https://support.google.com/googleplay/android-developer/answer/10787469?hl=de

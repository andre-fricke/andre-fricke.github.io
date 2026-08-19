# Freelancer-Profil · André Fricke

Zweisprachige, responsive Referenzwebsite für André Fricke – Senior DevOps Engineer & Developer.

## Lokal starten

Die Website hat keine Build-Abhängigkeiten. Im Projektordner einen lokalen Webserver starten:

```bash
python3 -m http.server 8080
```

Danach `http://localhost:8080` im Browser öffnen. Alternativ funktioniert die Hauptseite auch direkt über `index.html`; ein lokaler Webserver ist für PDF-Vorschauen zuverlässiger.

## Vor der Veröffentlichung ergänzen

- Die Profil-Links für LinkedIn, Xing, GULP und freelance.de sind in `script.js` unter `PROFILE_LINKS` zentral gepflegt.
- Empfehlungsschreiben nach `assets/recommendations/` kopieren und unter `RECOMMENDATIONS` in `script.js` eintragen. Eine genaue Kurzanleitung liegt im PDF-Ordner.
- Nach Auswahl des Hostings den Anbieter und die tatsächliche Server-Protokollierung in `datenschutz.html` ergänzen.
- Prüfen, ob Umsatzsteuer-/Wirtschafts-Identifikationsnummer, Registereintrag oder andere besondere Pflichtangaben im Impressum ergänzt werden müssen.
- Vor Livegang eine individuelle rechtliche Prüfung der Rechtstexte und der Markennutzung vornehmen lassen.

## Kontaktformular

Die lokale Version erzeugt aus den Formulardaten eine vorausgefüllte E-Mail an `fricke.andre@gmail.com` und öffnet das Mailprogramm des Besuchers. Die Website selbst speichert oder überträgt die Eingaben nicht.

Ein unsichtbarer Direktversand benötigt nach Auswahl des Hostings einen serverseitigen Endpunkt oder einen Formulardienst. Dabei müssen Spam-Schutz und Datenschutzhinweise angepasst werden.

## Kundenlogos

Die Logos liegen lokal unter `assets/logos/` und dienen ausschließlich zur Kennzeichnung der im Profil genannten Projektstationen. Markenrechte verbleiben bei den jeweiligen Inhabern; die Darstellung behauptet keine aktuelle Partnerschaft oder Empfehlung.

Asset-Quellen:

- [Deutsche Bahn – offizielles Markenportal](https://marketingportal.extranet.deutschebahn.com/marketingportal/Marke-und-Design/Basiselemente/Logo)
- [BMW Group – Logoquelle](https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/logo/svg/Logo_BMW_GROUP.svg)
- [TUI – Brand Guidelines](https://brand.tui.fr/telechargement.html)
- [HDI – Wikimedia-Dateibeschreibung](https://commons.wikimedia.org/wiki/File:HDI_Versicherung-logo.svg)
- [Volkswagen Financial Services – Wikimedia-Dateibeschreibung](https://commons.wikimedia.org/wiki/File:Volkswagen_Financial_Services_logo.svg)

## Projektstruktur

```text
index.html             Hauptseite und Inhalte
styles.css             Gestaltung und responsive Layouts
script.js              Übersetzungen, Formulare und PDF-Konfiguration
impressum.html         Zweisprachiges Impressum
datenschutz.html       Zweisprachige Datenschutzhinweise
legal.js               Sprachumschaltung der Rechtstexte
assets/                Profilfoto, Logos und Empfehlungsschreiben
```

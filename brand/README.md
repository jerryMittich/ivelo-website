# iVelo – Logo und Markenzeichen

Das Logo ist ein gefaltetes V wie aus Papier; der goldene Punkt ist das i.
Alle SVG-Dateien kommen ohne Schriftart aus (der Schriftzug ist in Pfade umgewandelt).

## Dateien

| Datei | Wofür |
|---|---|
| `ivelo-logo.svg`, `ivelo-logo-1024.png`, `-512.png`, `-180.png`, `-32.png` | App-Icon mit abgerundeten Ecken: Website, Favicon, Präsentationen |
| `ivelo-logo-quadratisch.svg`, `ivelo-logo-quadratisch-1024.png` | Ohne Rundung – für Stellen, die selbst abrunden oder zuschneiden (App Store, GitHub, Profilbilder) |
| `ivelo-zeichen.svg`, `ivelo-zeichen-1024.png` | Nur das Zeichen, transparenter Hintergrund, für helle und dunkle Flächen |
| `ivelo-zeichen-schwarz.svg`, `ivelo-zeichen-weiss.svg` | Einfarbig, z. B. für Stempel, Gravur oder Fotos |
| `ivelo-schriftzug.svg` / `.png` | Logo mit „iVelo Apps“ auf hellem Hintergrund |
| `ivelo-schriftzug-hell.svg` / `.png` | Dasselbe für dunkle Hintergründe |

Die PNG-Schriftzüge haben doppelte Auflösung und einen transparenten Hintergrund.

## Farben

| Name | Wert | Verwendung |
|---|---|---|
| Nachtindigo | `#1B1D4A` | Kachel |
| Indigo | `#4F54F0` | rechter Arm des V |
| Lavendel | `#A5A8FF` | linker Arm des V |
| Faltung | `#2E31A8` | Schatten in der Faltung |
| Gold | `#FFD25A` | i-Punkt |
| Akzent Website | `#3B3FD8` (hell), `#A5A8FF` (dunkel) | Links und Icons auf ivelo.app |

Schrift: Manrope ExtraBold („iVelo“) und SemiBold („Apps“), siehe `assets/fonts/`.

## Regeln

- Rund um das Logo mindestens so viel Platz lassen, wie der i-Punkt breit ist.
- Nicht verzerren, nicht drehen, die Farben des Zeichens nicht einzeln ändern – für Sonderfälle die einfarbigen Versionen nehmen.
- Kleinste Größe: 16 px (Favicon).

## Flyer (`flyer/`)

| Datei | Wofür |
|---|---|
| `ivelo-flyer-A5-beschnitt.pdf` | Druckdatei A5 (148 × 210 mm) mit 3 mm Beschnitt rundum (154 × 216 mm), RGB |
| `ivelo-flyer-A5-vorschau.png` | Vorschau im Endformat, zum Ansehen und Verschicken |
| `ivelo-flyer-A4-beschnitt.pdf` | Druckdatei A4 (210 × 297 mm) mit 3 mm Beschnitt rundum (216 × 303 mm), RGB – dieselbe Gestaltung, als Vektor vergrößert |
| `ivelo-flyer-A4-vorschau.png` | Vorschau A4 im Endformat |
| `qr-ivelo-app.svg` | QR-Code auf https://ivelo.app (Vektor, Fehlerkorrektur H) |
| `flyer.html`, `flyer-A4.html` | Quellen (A5 und A4); im Browser öffnen oder mit Playwright als PDF speichern. Inhalt in `flyer.html` ändern und in `flyer-A4.html` übernehmen – dort ist nur die Seitengröße anders |

Texte mit mindestens 8 mm Abstand zum Beschnittrand. Bei Änderungen an den Apps (z. B. Nestaro im Store) die Karten in `flyer.html` anpassen und das PDF neu erzeugen:

```
node -e "const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.goto('file://'+process.cwd()+'/brand/flyer/flyer.html');await p.waitForTimeout(800);await p.pdf({path:'brand/flyer/ivelo-flyer-A5-beschnitt.pdf',width:'154mm',height:'216mm',printBackground:true,preferCSSPageSize:true});await b.close()})()"
```

Für A4 denselben Befehl mit `flyer-A4.html`, `ivelo-flyer-A4-beschnitt.pdf`, `width:'216mm'` und `height:'303mm'`.

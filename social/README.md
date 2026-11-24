# Instagram-Beiträge für @iveloapps

Hier liegen Vorlage, Themenplan und Werkzeug für die täglichen Beiträge.
Eine geplante Aufgabe erstellt damit jeden Morgen einen fertigen Beitrag (Bilder + Text), den Jerome dann selbst auf Instagram hochlädt.

| Datei | Inhalt |
|---|---|
| `themen.md` | 28 Themen im Wechsel; welches Thema heute dran ist, steht dort |
| `vorlage.html` | Design für Folien 1080 × 1350 (4:5) mit Beispielen für alle Bausteine und Farbwelten |
| `render.js` | macht aus jeder `<section class="s">` ein PNG: `node social/render.js <datei.html> <ordner>` |

## Ablauf für einen Beitrag

1. **Thema bestimmen:** Nummer = (Tage seit 2026-11-25, Datum in Europe/Rome) mod 28 + 1, Zeile in `themen.md`.
2. **Fakten prüfen:** Nur verwenden, was auf den Seiten im Repo steht (`index.html`, `tresorio/`, `timaro/`, `nestaro/`, jeweils auch `it/…`). Vor allem den **Store-Status**:
   - Tresorio: App Store und Google Play
   - Timaro: App Store (nur iPhone)
   - Nestaro: steht auf der Seite noch „Bald bei Google Play und im App Store“, dann als Vorschau formulieren („bald verfügbar“), nicht „jetzt laden“.
   Keine Preise, Zahlen oder Funktionen erfinden.
3. **Folien bauen:** `vorlage.html` nach `social/beitrag.html` kopieren (gleicher Ordner, damit die Pfade `../assets/…` und `../brand/…` stimmen), die Beispiel-Folien durch die eigenen ersetzen. 1 bis 3 Folien, ein Karussell mit 3 Folien ist ideal. Screenshots liegen in `assets/shots/<app>/` (`de-*.webp` für deutsche Folien), Icons in `assets/*-icon.png`, das iVelo-Logo in `brand/`.
   - Farbwelt passend zur App: `tr` Tresorio, `tm` Timaro, `ns` Nestaro, `iv` / `ivd` iVelo.
   - Kurze, starke Überschrift (max. ~6 Wörter), Folientext auf Deutsch.
   - Letzte Folie mit Aufruf („Link in Bio“) und `.foot`.
4. **Rendern:** `node social/render.js social/beitrag.html <ausgabeordner>` und jedes Bild ansehen: nichts abgeschnitten, nichts überlappt, Text gut lesbar.
5. **Bildtext:** Deutsch, dann ein kurzer italienischer Absatz (🇮🇹), Aufruf „👉 Link in Bio“, 8–12 Hashtags (immer #iVelo, #Südtirol, #AltoAdige, dazu App und Thema). Locker, freundlich, du-Form, wenige Emojis.
6. **Nicht** ins Repository committen – die Beiträge gehen nur an Jerome.

## Stil

Gleiches Erscheinungsbild wie ivelo.app: Schrift Manrope, große Überschriften, Geräte mit echten Screenshots, Farben der jeweiligen App.
Die Beispiel-Folien in `vorlage.html` zeigen die vier Grundtypen: Titel mit drei Telefonen, Aussage mit einem Telefon, Liste mit Symbolen, iVelo-Aussage ohne Screenshot.

# iVelo Apps – Website

Statische Seite für [ivelo.app](https://ivelo.app) (GitHub Pages): Übersicht der Apps, Downloads und rechtliche Seiten.

Keine Cookies, kein Tracking, keine externen Dateien. Schrift: Manrope (SIL Open Font License, siehe `assets/fonts/OFL.txt`).

Screenshots (`assets/shots/`, WebP, 600 px breit): Timaro aus dem Branch `screenshots` von `time-clock` (App-Store-Workflow), Tresorio aus `store/app-store` in `tresorio-app`. Die Animationen beim Scrollen stecken in `assets/site.js`; bei „Bewegung reduzieren“ und ohne JavaScript bleibt alles statisch sichtbar.

Nach jeder Änderung an `assets/style.css` oder `assets/site.js` die Versionsnummer `?v=…` in allen Seiten erneuern, sonst zeigen Browser bis zu 10 Minuten lang das alte Design zur neuen Seite:
`V=$(cat assets/style.css assets/site.js | sha1sum | cut -c1-8); grep -rl 'assets/s' --include=*.html . | xargs sed -i -E "s#(/assets/(style\.css|site\.js))(\?v=[0-9a-f]+)?\"#\1?v=$V\"#g"`

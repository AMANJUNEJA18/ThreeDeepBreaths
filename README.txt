Three Deep Breaths. — deployment-ready build

Files:
- index.html — app, breathing timing, sound, volume control, PWA metadata and social sharing metadata
- manifest.json — installable PWA metadata
- sw.js — offline cache with versioned cache replacement
- CNAME — app.threedeepbreaths.in custom domain
- icon-192.png / icon-512.png — app icons
- og-image.jpg — social sharing thumbnail

Experience:
- 3 breaths total
- 4-second inhale / 6-second exhale
- visible countdown synchronized to the actual phase duration
- continuous circle expansion/contraction across the complete phase
- gentle Web Audio breath tone
- gentle completion bowl/chime
- live volume slider
- standard speaker icon; muted speaker at zero
- Safari/iOS-compatible user-gesture audio start
- no login, tracking, analytics or external audio dependencies

Deployment:
Upload all files to the ROOT of the ThreeDeepBreaths repository and commit to main.
Do not omit CNAME; it keeps GitHub Pages attached to app.threedeepbreaths.in.

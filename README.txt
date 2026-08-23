Three Deep Breaths — Final Deployable v20

This build is based on the last known-good Be v18 architecture, with the v19 interaction changes rolled back where they caused the existing Be spaces to disappear or stop responding.

Established functionality preserved:
- Breathe: 3 → 7 → 12 → 21
- Night: 108 breaths with Heart / Hara / Anywhere
- lock/background synchronization
- volume control
- softer mmmm-inspired breath audio
- Welcome Back → Home
- main Breathe / Night / Be navigation

Be. philosophy:
A quiet space without advice, emotional labels, interpretation, or conversational dependency. The product does not explain or promise an awareness outcome.

Be spaces:
- Feed: familiar vertical scrolling through blank pages. Initially shows the subtle line “A little space to be.” Once the user starts scrolling, that line fades away and does not return during that visit.
- Reels: the same blank-card visual language as Dating Cards, but arranged vertically. One blank card fills the Be viewport at a time. Swipe up or down to move endlessly through blank cards. No cross or tick controls.
- Cards: familiar dating-card browsing. When the card is not opened, left/right swipe and ×/✓ both move to the next blank card. Every new card enters from the right. Tapping a card opens it full-screen; inside the opened card, vertical scrolling is allowed, left/right swipe is disabled, and ×/✓ are the only ways to move to the next card. The next card also enters from the right.
- Inner Observatory: “What’s showing up inside?” with “thought · feeling · sensation · or nothing”. After an observation is submitted, Be acknowledges softly with “Here.” rather than interpreting or advising. Closing the Observatory returns to the Be space the user came from.

The deeper design philosophy is to hold space, observe before interpreting, preserve before explaining, and gradually return the person to their own awareness/life without explicitly teaching or promising that outcome.

Deployment:
Deploy all files to the app.threedeepbreaths.in site root.

Cache version:
v20 — bump ensures the new index and behaviour replace prior service-worker cached versions.

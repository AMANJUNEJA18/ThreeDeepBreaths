Three Deep Breaths — v23

BE INTERACTION BUILD

Existing functionality preserved:
- Breathe: 3 → 7 → 12 → 21
- Night: 108 breaths with Heart / Hara / Anywhere
- Night dark mode
- lock/background synchronization
- volume control
- Welcome Back → Home
- softer mmmm-inspired breath audio

Be philosophy:
- quiet pocket companion
- no advice, emotional labels, conversational dependency, promises, or gamification

Be home / Feed:
- Initially shows: “A little space to be.”
- First vertical scroll hides that text permanently for the current Be visit.
- Blank pages continue in an endless circular feed.

Dating Cards:
- Same blank card component used by Reels.
- On entry: one visible card; only left/right swipe advances.
- No cross/tick until the card is tapped.
- Tap opens the card full-screen.
- Full-screen card supports vertical scrolling.
- Horizontal swipe is disabled while open.
- Cross and tick are fixed at the bottom of the viewport and remain visible while scrolling.
- Cross/tick advance to the next card.
- Every next card enters from the right, regardless of direction or button used.

Reels:
- Uses the same blank card component/visual language as Dating Cards.
- No cross/tick.
- No horizontal gesture.
- Swipe up → next blank card.
- Swipe down → previous blank card.
- Uses a dedicated vertical transform track, not native scrolling, so Safari has one gesture system only.
- Circular/endless sequence.

Inner Observatory:
- “What’s showing up inside?”
- “thought · feeling · sensation · or nothing”
- Done gives a soft “Here.” acknowledgement.
- Closing returns to the Be space from which it was opened.

DEPLOY
Deploy all files in this package to the app.threedeepbreaths.in site root as a complete replacement.
Service-worker cache version: v23.

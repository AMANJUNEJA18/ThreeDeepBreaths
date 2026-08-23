# Three Deep Breaths — v25

## Be interaction model

### Be Feed
- Full-screen vertical feed.
- Starts with the quiet line: “A little space to be.”
- The line disappears after the user begins scrolling.
- The feed remains an open, empty space.

### Dating Cards
- Blank rectangular cards use the same visual language as the Be/Reels cards.
- Before opening a card: swipe left/right to move to the next card.
- No cross/tick buttons are shown in browse mode.
- Tap a card to open it full-screen.
- Full-screen card supports vertical internal scrolling.
- Horizontal swiping is disabled while open.
- Cross and tick are fixed at the bottom of the screen and are the only controls for moving onward.
- Every next card enters from the right.

### Reels
- Uses the same rectangular blank-card visual as Dating Cards.
- No cross/tick controls.
- No horizontal movement.
- Swipe up/down to move through the blank cards endlessly.

### Inner Observatory
- Separate from Feed, Reels and Dating Cards.
- Prompt: “What’s showing up inside?”
- Definition: “thought · feeling · sensation · or nothing”
- Submission is acknowledged softly with “Here.”
- Closing the Observatory returns to the Be home/feed.

## Existing functionality preserved
- Breathe: 3 → 7 → 12 → 21
- Night: 108 breaths, Heart / Hara / Anywhere
- Night dark mode
- elapsed-time synchronization
- background/lock synchronization hooks
- volume control
- mmmm breathing audio asset
- welcome-back flow

## Deployment
Deploy the complete site-root package together. Do not mix files from earlier versions. The service-worker registration query is versioned for this build.

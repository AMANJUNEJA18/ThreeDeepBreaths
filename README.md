# Three Deep Breaths — v27

## Be interaction model

- Be home: vertical feed; initial text “A little space to be.” disappears after the first scroll.
- Dating Cards: rectangular blank cards. Before opening, only left/right swipe advances. Tap opens the current card full-screen. In fullscreen, vertical scrolling is enabled, horizontal swipe is disabled, and fixed bottom ×/✓ advance to the next card. New cards enter from the right.
- Reels: same rectangular blank-card visual as Dating Cards, with no ×/✓. Swipe up/down advances vertically through the blank cards.
- Inner Observatory: separate panel; Close returns to Be home/feed.

## Existing functionality preserved

- Breathe 3 → 7 → 12 → 21.
- Night 108 with Heart / Hara / Anywhere.
- Elapsed-time breathing synchronization, background/lock synchronization, volume control, welcome flow, mmmm breathing audio, gong.

## Deployment

Replace the site-root files together, including `sw.js`, so the v27 service-worker cache is installed cleanly.


## Verification notes

- JavaScript syntax checked with Node.js.
- Be Feed uses a native vertical scrolling surface.
- Dating Cards use a single horizontal browse gesture layer; opening a card switches to vertical internal scrolling and fixed bottom actions.
- Reels use the same rectangular blank-card visual as Dating Cards and a dedicated vertical swipe layer.
- Inner Observatory Close explicitly returns to Be Feed.
- Breathe/Night timing and audio synchronization code was not redesigned in this pass.
- Physical iPhone/Safari touch testing still needs to be performed on-device.

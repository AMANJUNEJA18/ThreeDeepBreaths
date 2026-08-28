# Three Deep Breaths — v30

## Be interaction layer

- Feed: vertical scrolling. “A little space to be.” disappears after scrolling.
- Dating Cards: one rectangular card; swipe left/right to advance while browsing. Tap to open a separate full-screen overlay. In the overlay, vertical scrolling is enabled, horizontal browsing is disabled, and fixed × / ✓ buttons advance to the next card.
- Reels: same rectangular blank-card visual as Dating Cards; swipe up/down only. No × / ✓.
- Inner Observatory: closes back to Be home/feed.

## Existing functionality
Breathe and Night timing/synchronization and audio are preserved.

## Deployment
Upload the contents of this folder to the site root. Do not nest the `v28pkg` directory itself under the web root.

## v29 visual alignment

Only the Be Dating Cards and Reels card geometry was adjusted in v29. Both use the same centered rectangular card geometry, with the card positioned below/within the Be header area while preserving their existing interaction behavior. No Breathe, Night, Observatory, or Be interaction logic was intentionally changed.


## v30 reels visual detail

Only the Be Reels cards received a visual-only social rail: heart, comment, share, and more (⋯), with zero-count labels. These elements are non-interactive and do not alter any existing navigation, swipe, card, Observatory, Breathe, Night, audio, or synchronization behavior.

Three Deep Breaths — FINAL BACKGROUND AUDIO RESUME

Built directly from the latest deployed BACKGROUND-AUDIO package.

Retained:
- Green launch button disappears when the 3-breath session starts.
- Existing 3-breath count.
- Retreat counts for 7 / 12 / 21.
- Stay / if you feel → A little more → A while longer → Welcome back.
- 4s inhale / 6s exhale.
- Circle and timers.
- Volume control and mute icon.
- Native breath audio and completion gong.
- Network-first HTML cache strategy.

New in this release:
- Service worker version bumped to v5.
- When the page becomes active again after a lock/background transition,
  the app explicitly attempts to resume the breath audio immediately.
- pageshow, focus and visibilitychange are handled.

Important platform limitation:
A web app cannot guarantee audible playback while an iPhone or Android
device is locked. The operating system/browser may suspend audio in the
background. This build uses native media playback and automatically attempts
to resume it as soon as the page becomes active again, which is the strongest
recovery path available to a normal web app.

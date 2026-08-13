Three Deep Breaths — FINAL ELAPSED SYNC + CUES

Built from the latest working background-audio/resume package.

Two new changes:
1. Elapsed-time breathing sync:
   - Uses wall-clock elapsed time rather than relying on animation execution.
   - If the phone is locked or the tab is backgrounded, the visual count/phase
     catches up to the correct breath when the user returns.
   - Applies to 3, 7, 12 and 21 breaths.
2. Very soft musical breathing cues:
   - "In" begins the 4-second inhale.
   - "Exhale" begins the 6-second exhale.
   - Cues are blended into the continuous breath sound itself, so they can
     continue with the audio during screen lock.

Retained:
- green launch button disappears once breathing starts
- visible 3 / 7 / 12 / 21 counts
- Stay / if you feel → A little more → A while longer → Welcome back
- volume and mute
- soft gong
- native background audio + resume-on-return
- Safari/mobile handling
- network-first HTML cache strategy
- versioned service worker

The breath sound remains a single continuous 10-second audio loop, now with
the soft cues embedded in it. This avoids depending on JavaScript timing for
the audible cue while the phone is locked.

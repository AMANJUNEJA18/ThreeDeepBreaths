Three Deep Breaths — FINAL FOR NOW

Built directly from the last-known-good v8 deployment package.

Preserved exactly from v8:
- working breath sound/audio asset
- soft feminine Inhale / Exhale cues
- audio/count synchronization after lock/background
- background audio and resume-on-return
- 3 / 7 / 12 / 21 counts
- green launch button removal
- 4s inhale / 6s exhale
- circle + timer
- volume / mute
- completion gong
- retreat progression
- network-first HTML cache strategy

New final-for-now change:
- The timer shows 0 for only 40ms at the phase boundary.
- 0 is a visual transition marker only; it does not add time to the
  breathing cycle and does not alter the audio asset or elapsed-time clock.
- Service worker/cache release bumped to v9.

The v8 breath-loop.wav file is byte-for-byte preserved.

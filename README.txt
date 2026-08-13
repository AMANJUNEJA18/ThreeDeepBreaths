Three Deep Breaths — FINAL BACKGROUND AUDIO

Based on the latest working visible-count package.

Changes:
- The launch button disappears when the 3-breath session starts.
- Native HTML audio is used for the continuous breath sound.
- Native media playback is preferred because it is more suitable for
  iPhone/Android screen-lock/background playback than Web Audio alone.
- A soft native gong plays at completion.
- Volume and mute control the native audio.
- Retreat counts remain unchanged: 7 / 12 / 21.
- Service-worker version bumped to v4; HTML remains network-first.

Note: iOS/Android system settings, Silent/Focus modes, battery policies and
browser restrictions can still override background playback. The native
media path is the strongest browser-supported approach, but no web app can
guarantee audio against every OS policy.

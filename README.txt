Three Deep Breaths. — FINAL CLEAN BUILD

Deployment:
  app.threedeepbreaths.in

Flow:
  3 breaths
  -> Stay / if you feel
  -> 7 breaths
  -> A little more
  -> 12 breaths
  -> A while longer
  -> 21 breaths
  -> Welcome back

The user never sees the 7/12/21 numbers as choices.

Every breathing stage has:
- 4-second inhale / 6-second exhale
- synchronized circle
- live countdown
- soothing breath sound
- soft completion sound
- live volume control
- speaker icon changes to muted speaker at zero
- Safari-compatible Web Audio

Cache/update strategy:
- HTML navigations are network-first with cache:'no-store'
- service worker uses updateViaCache:'none'
- service worker calls skipWaiting() and clients.claim()
- old service-worker caches are deleted on activation
- static assets remain cached for PWA reliability

IMPORTANT:
The homepage domain is separate from this app repository.
Do not deploy this package to the homepage repository.

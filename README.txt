Three Deep Breaths — FINAL CACHE FIX

Deploy the contents of this ZIP to the existing ThreeDeepBreaths repository
and commit to main.

This package contains the complete app plus the cache/deployment fix.

Flow:
3 breaths
→ Stay / if you feel
→ 7 breaths
→ A little more
→ 12 breaths
→ A while longer
→ 21 breaths
→ Welcome back

The cache fix:
- HTML/navigation is network-first and is not stored as the primary app shell.
- Static assets remain cached for PWA reliability.
- Service worker version is changed.
- Service-worker registration is versioned.
- updateViaCache is disabled.
- The worker is explicitly updated.
- When the new worker takes control, the page reloads once.
- Old service-worker caches are deleted.

Do not change index.html or sw.js after extracting unless necessary.

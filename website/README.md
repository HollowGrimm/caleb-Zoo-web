# Santa Ana Zoo Guide website

This is a standalone static landing page, separate from the Flutter app. It has no build step; host the contents of this directory as a static website.

To preview locally, serve this directory with any static file server. For example, from `website/`, run `python3 -m http.server 8000` and open `http://localhost:8000`.

When the app listings are published, put their full HTTPS URLs in `store-links.js`. The App Store and Google Play badges will become links automatically; until then, they show “Coming soon.”

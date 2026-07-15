# Ventura & Channel Islands Weekend Microsite

Mobile-first React microsite for a one-night Ventura and Santa Cruz Island weekend itinerary.

## What is included

- Full-screen coastal hero with sticky navigation and floating booking CTA
- Expandable Saturday and Sunday itinerary cards
- Transportation flow: home to Irvine Station to Ventura to hotel to harbor to island
- Zachari Dunes stay section with mobile image carousel, map, and booking link
- Ventura food recommendations, including non-seafood meals and fish-and-chips options
- Channel Islands hiking guidance with official source links
- Packing checklist saved in local storage
- Editable budget calculator for two people, also saved locally
- Booking checklist for ferry, hotel, train, and dinner
- Emergency information and important travel notes

## Run locally

```bash
npm run dev
```

Open `http://localhost:4173`.

The project intentionally avoids installed dependencies so it can run on machines with limited disk space. React is loaded from an ESM CDN in `index.html`.

## Validate

```bash
npm test
```

This checks that the core files and required itinerary features are present.

## Deploy to GitHub Pages

This repository includes `.github/workflows/pages.yml`. After the repo is pushed to GitHub:

1. Open the repository on GitHub.
2. Go to Settings -> Pages.
3. Set the source to GitHub Actions if GitHub does not do it automatically.
4. Push to `main` or run the "Deploy to GitHub Pages" workflow manually.

The site is static and has no build step. The workflow uploads the repository contents directly to GitHub Pages.

## Scheduling note

The site does not invent train or ferry times. Pacific Surfliner and Island Packers schedules are clearly marked as "confirm before booking" and linked to official schedule/booking pages.

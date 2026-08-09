# TripIQ Website

Official static website repository for TripIQ, a private-beta Android ride-request analysis tool for rideshare drivers.

TripIQ helps drivers evaluate supported ride-request screens by showing estimated hourly value, estimated per-mile value, and a GO, MAYBE, or NO GO result during Real-Time Mode.

## Pages

- `index.html` - product landing page
- `privacy.html` - beta privacy policy
- `support.html` - support information

## Project Structure

- `styles.css` - responsive site styling
- `script.js` - mobile navigation behavior
- `assets/` - public icon assets
- `serve.ps1` - local preview helper for Windows PowerShell
- `.nojekyll` - keeps static hosting behavior simple for a future GitHub Pages setup

## Local Preview

From the repository root, run:

```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```

Then open:

```text
http://127.0.0.1:4173/
```

## Deployment

GitHub Pages and custom-domain configuration are handled separately. This repository does not include a `CNAME` file, deployment workflow, backend service, analytics script, or tracking dependency.

## Privacy Maintenance Notes

When updating public copy, keep privacy statements aligned with the current Android beta behavior and Google Play disclosures. In particular, avoid describing future optional online or community features as current functionality until they are implemented, documented, and enabled with updated disclosures.

Current public privacy wording states that TripIQ stores diagnostics, ride-analysis information, preferences, and dashboard statistics locally on the device, and that TripIQ is configured to prevent its app data from being included in Android cloud backups or Android device-to-device transfer extraction.

## Support

Public support contact: [support.tripiq@gmail.com](mailto:support.tripiq@gmail.com)

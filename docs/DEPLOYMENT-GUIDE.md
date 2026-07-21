# Deployment Guide

## GitHub Pages

1. Push the repository to GitHub.
2. Open repository **Settings**.
3. Open **Pages**.
4. Set source to **GitHub Actions**.
5. Push to `main`.
6. Review the `Deploy website to GitHub Pages` workflow.
7. Open the generated Pages URL.

The workflow automatically determines the repository base path.

## Custom domain

After the GitHub Pages deployment works:

1. Add your custom domain in GitHub Pages settings.
2. Configure the DNS records required by GitHub.
3. Enable HTTPS after DNS validation.
4. Re-test all routes and assets.

## Alternative static hosting

The `out/` directory can be deployed to:

- Google Cloud Storage with a CDN
- Cloudflare Pages
- Netlify
- Vercel static output
- Any static web host

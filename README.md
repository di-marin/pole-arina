# Pole-Arina Paper Website

This website now follows the Nerfies project-page structure and adapts the paper text and figures from the attached TeX project.

## Before You Publish

1. Replace the placeholder author text in `index.html`.
2. Update the rounded hero buttons with your real links:
   - paper PDF
   - arXiv
   - code repository
   - dataset release
3. If you want a local PDF link, place the final paper at `static/pdfs/pole-arina.pdf` and point the button to it.
4. Swap any figures in `static/images/` if you want a different mix of visuals.

## Local Preview

From this repo root:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Publish with GitHub Pages

This folder is already the GitHub repository root for the website.

1. Push the latest changes to GitHub.
2. Open `Settings` -> `Pages`.
3. Choose `Deploy from a branch`.
4. Select branch `main`.
5. Select folder `/ (root)`.
6. Save and wait for deployment.

The `.nojekyll` file is included so GitHub Pages serves the static site directly.

## Optional Custom Domain

1. Add a `CNAME` file in the repo root with your domain.
2. Configure the DNS records with your provider.
3. Set the custom domain in the GitHub Pages settings.

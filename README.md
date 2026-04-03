# Pole-Arina Paper Website

This folder contains a static first-pass paper website built from the attached TeX project assets.

## Before You Publish

1. Replace the placeholder author line in `docs/index.html`.
2. Add your real outbound links in the hero button row:
   - paper PDF
   - code repository
   - dataset release
   - arXiv or project video, if you want them
3. If you want a downloadable paper button, place the final PDF at `docs/static/pdfs/pole-arina.pdf` and point the button to that file.
4. Swap or add figures in `docs/static/images/` if you want different visuals from the paper.

## Local Preview

You can either:

- open `docs/index.html` directly in a browser, or
- serve the repo root with a small local web server and open `http://localhost:8000/docs/`

Example:

```powershell
python -m http.server 8000
```

## Publish with GitHub Pages

This workspace is not currently a Git repository, so first either initialize a new repo or copy these files into an existing GitHub repo.

1. Push the project to GitHub.
2. In the GitHub repository, open `Settings` -> `Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select your main branch and the `/docs` folder.
5. Save the settings and wait for the first deployment to finish.
6. GitHub Pages will publish the site at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

## Optional Custom Domain

If you want a custom domain later:

1. Add a `docs/CNAME` file containing your domain name.
2. Configure the DNS records with your domain provider.
3. Set the custom domain in GitHub Pages settings.

## Note About the Paper PDF

I attempted to compile the attached TeX project into a PDF so the site could ship with a ready-made paper button, but the local MiKTeX installation appears to need setup or a longer first run. If you export the PDF manually, just drop it into `docs/static/pdfs/` and add the link in `docs/index.html`.

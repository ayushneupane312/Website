# Ayush Neupane — Portfolio

One-page **Tech Forward** portfolio. Live at [ayush-neupane.com.np](https://ayush-neupane.com.np).

## Scroll beats

| Section | Beat | ID |
|---------|------|-----|
| Hero | Arrival | — |
| About + skills | Curiosity | `#signal` |
| Projects | Systems | `#systems` |
| Experience | Conviction | `#proof` |
| Contact | Release | `#connect` |

## Commands

```bash
cd Website
npm install
npm run dev
npm run lint
npm run build
```

## Customize

Edit `src/data/content.js`. Profile photo: add `public/ayush-profile.png` and update `site.profileImage`.

## Deploy (GitHub Pages)

1. Repo **Settings → Pages → Build and deployment**
2. **Source:** choose **GitHub Actions** (not “Deploy from a branch” on `master`)
3. Push to `master` — workflow **Deploy Portfolio** builds `dist/` and publishes it

`public/CNAME` is copied into the build for **ayush-neupane.com.np**.

**If you see `main.jsx` MIME errors:** Pages is serving raw source from `master`. Switch source to **GitHub Actions** or branch **`gh-pages`** only — never `master`.

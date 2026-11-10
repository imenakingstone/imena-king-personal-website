# Deployment checklist

## Frontend — Cloudflare Pages
1. Sign in to Cloudflare and open **Workers & Pages → Create → Pages → Connect to Git**.
2. Select `imenakingstone/imena-king-personal-website`, production branch `main`.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Build output directory: `dist`.
6. Add build environment variable `VITE_API_BASE_URL` after the API is deployed (for example, `https://YOUR-API-HOST/api`).
7. Deploy. Cloudflare will provide a `*.pages.dev` URL and rebuild on future pushes to `main`.

## API — Render (or another Node.js host)
- Root directory: `server`
- Build command: `npm install`
- Start command: `npm start`
- Health check path: `/api/health`

Set these environment variables in the hosting dashboard:
- `NODE_ENV=production`
- `CLIENT_ORIGIN=https://YOUR-PAGES-SITE.pages.dev`
- `MONGODB_URI` — MongoDB Atlas connection string
- `JWT_SECRET` — random secret with at least 32 characters
- `JWT_EXPIRES_IN=8h`
- `ADMIN_EMAIL` and `ADMIN_PASSWORD` — only needed for initial admin seeding
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` — required for image uploads\n- `META_APP_ID`, `META_APP_SECRET`, `META_REDIRECT_URI` — required for Instagram Login\n- `META_GRAPH_VERSION=v26.0` — API version setting\n- `TOKEN_ENCRYPTION_KEY` — 64 hexadecimal characters (32 random bytes) for encrypting the Instagram token at rest

After the API service is running, use its shell once to run `npm run seed:admin`. Do not put credentials in GitHub files or chat.

## Final checks
- Open `/api/health` on the API host and confirm it returns `{"status":"ok"}`.
- Set the Cloudflare Pages `VITE_API_BASE_URL` to the API URL plus `/api`, then trigger a new frontend deployment.
- Sign in at `/admin`, create a draft media item, then publish a test item.
- Replace the placeholder social links, contact email and SEO domain before announcing the site.
- Replace `YOUR-DOMAIN` in `public/robots.txt` and `public/sitemap.xml` with the final Pages or custom-domain URL.

## Instagram connection
The currently connected Metricool brand exposes YouTube only, not Instagram. Instagram post syncing therefore needs a selected Instagram Professional (Business or Creator) account and a Meta developer app with the appropriate Instagram Graph API permissions. Do not attempt to read private accounts or use passwords. Add the authorized OAuth connection after the account owner grants access.
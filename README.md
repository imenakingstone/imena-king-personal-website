# Imena King — Personal Website & Creator Platform

A responsive personal website and content-management foundation for Imena King, based in Kigali, Rwanda.

## Stack
- Public website: React 19, Vite 6, CSS, Framer Motion, Lucide React
- Admin: React-based private media-kit manager at `/admin`
- API: Node.js, Express, MongoDB/Mongoose, JWT authentication
- Media: signed Cloudinary image upload foundation; YouTube embeds and direct video links
- CI: GitHub Actions frontend production build and backend syntax validation

## Repository structure
```
src/                  Public React website and media kit
src/admin.jsx         Private media-kit admin interface
server/src/           Express API, authentication, models and routes
public/               Favicon, social preview, SEO and security files
.github/workflows/    Automated build checks
DEPLOYMENT.md         Hosting and configuration checklist
```

## Run the public website
```bash
npm install
npm run dev
```

## Run the API
```bash
cd server
npm install
copy .env.example .env
npm run seed:admin
npm run dev
```
Fill in the local `server/.env` before seeding or starting the API. Use a strong unique admin password and a random JWT secret. Never commit `.env`.

## Admin and media kit
- Public media library: website section with link, image, YouTube and direct-video cards.
- Admin login: `/admin`.
- Admin media tools: add, publish/draft and delete media items.
- Image uploads use a server-signed Cloudinary upload flow. Cloudinary credentials must be configured in the API host.
- Admin access requires the first account to be created using `npm run seed:admin`.

## API endpoints
- `GET /api/health`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/media`
- `GET /api/media/manage` (admin)
- `POST /api/media` (admin)
- `PATCH /api/media/:id` (admin)
- `DELETE /api/media/:id` (admin)
- `POST /api/uploads/signature` (admin)\n- `POST /api/instagram/connect` (admin)\n- `GET /api/instagram/callback` (Meta OAuth callback)\n- `GET /api/instagram/status` (admin)\n- `POST /api/instagram/sync` (admin)\n- `GET /api/instagram/posts` (public selected-account feed)

## Verify
GitHub Actions runs the frontend production build and backend JavaScript syntax checks on pushes to `main`. See the Actions tab for the latest result.

## Still requires owner setup
1. Configure Cloudflare Pages and deploy the frontend.
2. Deploy the API and connect MongoDB Atlas.
3. Add Cloudinary credentials for image uploads.
4. Create/configure a Meta developer app, then authorize the chosen Instagram Professional account through Instagram Login.
5. Confirm the public contact email and exact social profile URLs.
6. Replace the placeholder website URL in the sitemap and robots file.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the launch checklist.

**Security:** Never commit database URIs, passwords, JWT secrets, Cloudinary secrets or Meta tokens. Do not send secrets in chat.
# Imena King API

Express + MongoDB API foundation for the personal website.

## Setup
1. Copy `.env.example` to `.env`.
2. Add your MongoDB Atlas URI and a random JWT secret of at least 32 characters.
3. Set a strong unique admin email/password locally.
4. Run `npm install`.
5. Run `npm run seed:admin` once to create the admin account.
6. Run `npm run dev`.

## Endpoints
- `GET /api/health` — health check
- `POST /api/auth/login` — admin login
- `GET /api/auth/me` — current admin (Bearer token)
- `GET /api/media` — published media kit items
- `GET /api/media/manage` — all media items (admin)
- `POST /api/media` — create media item (admin)
- `PATCH /api/media/:id` — update media item (admin)
- `DELETE /api/media/:id` — delete media item (admin)

The API stores media metadata and URLs. Actual image upload storage (Cloudinary) and Instagram OAuth are separate integrations and are not enabled yet. Keep `.env` out of Git.
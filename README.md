# Nocturne Studio

A premium creative agency website with a portfolio, blog, contact forms and an admin dashboard. Dark, editorial design with a Supabase backend and JWT-based admin auth.

Built as a reusable template for creative studios and independent designers.

## Features

- **Portfolio** — project grid and detail pages, driven by the database.
- **Blog** — posts with rich content, managed from the admin dashboard.
- **Contact forms** — submissions persisted to Postgres, not emailed into the void.
- **Admin dashboard** — JWT-authenticated area for managing projects, posts and enquiries.
- **Responsive** — mobile-first layout, dark luxury aesthetic.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js |
| UI | React 18, Tailwind CSS |
| Language | TypeScript |
| Backend | Supabase (Postgres, auth, storage) |
| Auth | JWT for the admin area |

## Repository layout

```
app/            Next.js routes (public site + admin)
components/     UI components
lib/            Supabase clients and helpers
public/         Static assets
```

## Getting started

```bash
git clone https://github.com/kennyorlando65-prog/nocturne-studio-web.git
cd nocturne-studio-web
npm install
cp .env.example .env.local     # then fill in real values locally
npm run dev                    # http://localhost:3000
```

## Environment variables

Documented as placeholders in [`.env.example`](.env.example).

`SUPABASE_SERVICE_ROLE_KEY` bypasses Row Level Security. It is server-only and must never be exposed to the browser or prefixed with `NEXT_PUBLIC_`.

## Security

A `.env.local` file containing a live service role key and an admin password hash was previously committed to this repository. It has been removed from the current tree, is now covered by `.gitignore`, and a gitleaks scan runs on every push and pull request. The historical values remain in git history and must be treated as compromised until rotated.

## Status

Feature-complete as a template. The admin dashboard covers projects, posts and enquiries; there is no role separation beyond admin, and no automated test suite yet.

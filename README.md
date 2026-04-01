# TTW Enterprises Full-Stack Website

This is a complete starter project for TTW Enterprises with:

- **React + Vite frontend**
- **Express backend**
- **Real contact form submission**
- **Inquiry persistence to JSON**
- **Optional email notification support with Nodemailer**
- **Your TTW gold logo already included**

## Project Structure

```bash
ttw-fullstack/
  frontend/
  backend/
  README.md
```

## 1) Install dependencies

### Frontend
```bash
cd frontend
npm install
```

### Backend
```bash
cd ../backend
npm install
```

## 2) Run the backend

```bash
cd backend
npm run dev
```

The backend runs on `http://localhost:5001`.

## 3) Run the frontend

Open a second terminal:

```bash
cd frontend
npm run dev
```

The frontend runs on `http://localhost:5173`.

## Backend Endpoints

- `GET /api/health`
- `GET /api/packages`
- `POST /api/contact`

## Contact Form Behavior

When someone submits the contact form:

1. the backend validates the fields
2. saves the lead into `backend/data/inquiries.json`
3. optionally emails you if SMTP settings are configured

## Enable Email Notifications

1. Copy `.env.example` to `.env`
2. Fill in your SMTP values
3. Restart the backend

```bash
cp .env.example .env
```

## Good Next Upgrades

- connect the form to Supabase or MongoDB instead of JSON
- add admin login for lead management
- deploy frontend to Vercel / Netlify
- deploy backend to Render / Railway
- add WhatsApp CTA and booking integration
- add CMS editing for packages and testimonials

## Branding Notes

Current branding is luxury black + gold and already uses your uploaded TTW logo.
You should still replace the placeholder contact details with your real:

- business email
- Instagram handle
- phone number
- location details

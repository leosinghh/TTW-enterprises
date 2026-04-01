import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 5001;
const inquiriesPath = path.join(__dirname, 'data', 'inquiries.json');
const packagesPath = path.join(__dirname, 'data', 'packages.json');

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'TTW backend is running' });
});

app.get('/api/packages', async (_req, res) => {
  try {
    const raw = await fs.readFile(packagesPath, 'utf8');
    const packages = JSON.parse(raw);
    res.json(packages);
  } catch (error) {
    console.error('Package load error:', error);
    res.status(500).json({ message: 'Could not load packages.' });
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, business, service, message } = req.body;

  if (!name || !email || !business || !service || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const inquiry = {
    id: Date.now().toString(),
    name,
    email,
    business,
    service,
    message,
    createdAt: new Date().toISOString(),
  };

  try {
    let existing = [];

    try {
      const raw = await fs.readFile(inquiriesPath, 'utf8');
      existing = JSON.parse(raw);
      if (!Array.isArray(existing)) existing = [];
    } catch {
      existing = [];
    }

    existing.unshift(inquiry);
    await fs.writeFile(inquiriesPath, JSON.stringify(existing, null, 2));

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.CONTACT_TO_EMAIL) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: String(process.env.SMTP_SECURE || 'false') === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_TO_EMAIL,
        subject: `New TTW inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nBusiness: ${business}\nService: ${service}\n\nMessage:\n${message}`,
      });
    }

    res.status(201).json({ message: 'Inquiry received successfully.', inquiry });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ message: 'There was a problem saving the inquiry.' });
  }
});

app.listen(port, () => {
  console.log(`TTW backend listening on port ${port}`);
});

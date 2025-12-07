# Interium - AI Interior Design Landing Page

A modern, responsive landing page for Interium, an AI-powered interior design tool that transforms room photos into stunning redesigns.

## Features

- **Clean, Modern Design** — Minimalist layout with elegant typography (DM Serif Display + Outfit fonts)
- **Responsive** — Works on desktop, tablet, and mobile
- **Smooth Scrolling Navigation** — Features, About, and FAQ sections with scroll-to navigation
- **Interactive Before/After Slider** — Showcase the AI transformation with a draggable comparison slider
- **FAQ Accordion** — Expandable FAQ section

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide Icons

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the dev server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:3000 in your browser

## Build for Production

```bash
npm run build
```

## Project Structure

```
├── components/
│   ├── pages/
│   │   └── Home.tsx        # Main landing page with all sections
│   ├── ComparisonSlider.tsx # Before/after image slider
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── Showcase.tsx
├── public/
│   └── Interium Logo.png
├── App.tsx
├── index.html
└── index.tsx
```

## License

MIT

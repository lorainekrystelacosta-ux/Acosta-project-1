# Loraine Krystel Acosta — Personal Portfolio

A modern, responsive personal portfolio website for **Loraine Krystel Acosta**,
a 2nd Year Bachelor of Science in Information Technology (BSIT) student at
**Kabankalan Catholic College Inc.**

> *"Turning Curiosity Into Creativity Through Technology."*

## Features

- Split-screen hero layout with floating information cards and glowing accents
- Sections: Hero, About Me, Skills, Projects, Education & Goals, Contact
- Smooth scrolling navigation with scroll-spy active states
- Mobile-friendly navigation (hamburger menu)
- Scroll-reveal animations with `prefers-reduced-motion` support
- Contact form with client-side validation (demo — no data is sent)
- Fully responsive across desktop, tablet, and mobile
- Pure HTML5, CSS3, and vanilla JavaScript — no frameworks or Bootstrap

## Design

- **Palette:** Midnight Navy, Soft Peach, Silver, White
- **Style:** Futuristic yet elegant — glassmorphism cards, geometric grid
  overlay, subtle glow effects, and smooth transitions

## Project Structure

```
acosta-project-1/
├── index.html          # Main page with all sections and content
├── README.md           # This file
├── assets/
│   ├── favicon.svg     # Site icon
│   └── profile.svg     # Profile photo placeholder
├── css/
│   └── style.css       # All styles, responsive breakpoints
└── js/
    └── script.js       # Navigation, scroll spy, animations, form handling
```

## Running Locally

No build step is required. Open `index.html` directly in a browser, or serve
the folder with any static server:

```bash
# With PHP (XAMPP)
php -S localhost:8000

# With Python
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages Deployment

1. Create a new repository named `acosta-project-1` on GitHub.
2. Push this project:

   ```bash
   git remote add origin https://github.com/<your-username>/acosta-project-1.git
   git branch -M main
   git push -u origin main
   ```

3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, select **Deploy from a branch**,
   choose `main`, and folder `/ (root)`.
5. Save. The site will be live at
   `https://<your-username>.github.io/acosta-project-1/`.

## Content Notes

- The profile photo area is a styled placeholder (`assets/profile.svg`) —
  replace `index.html`'s `.profile-placeholder` block or the SVG to add a real photo.
- The contact form is a front-end demonstration only; connect it to a backend
  or form service (e.g., Formspree) to receive real messages.
- No personal email, phone number, or social media accounts are published.

## Author

**Loraine Krystel Acosta** — BSIT, 2nd Year College
Kabankalan Catholic College Inc., Kabankalan City, Negros Occidental

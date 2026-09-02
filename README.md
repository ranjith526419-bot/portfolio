# Alex Morgan — Accessible HTML5 Portfolio

A high-performance personal portfolio adhering strictly to HTML5 semantic landmarks, WCAG 2.2 AAA accessibility, screen reader optimizations, and modern editorial aesthetics.

---

## 🚀 Automated Deployment with GitHub Actions

This repository includes a ready-to-use GitHub Actions workflow configured in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that builds and deploys the portfolio to **GitHub Pages** on every push to `main` or `master`.

### One-Time Setup in GitHub:

1. **Push your code** to your GitHub repository.
2. In your repository on GitHub, navigate to **Settings** > **Pages** (in the left sidebar under *Code and automation*).
3. Under **Build and deployment** > **Source**, select **`GitHub Actions`** from the dropdown menu.
4. Push a new commit to `main` (or go to the **Actions** tab and click **Run workflow**).
5. Once the workflow finishes, your site will be live at:
   ```text
   https://<your-username>.github.io/<your-repo-name>/
   ```

---

## 🛠️ Local Development & Scripts

### Prerequisites
- Node.js 18+ or 20+
- npm or bun

### Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript type check
npm run lint

# Build production bundle for static hosting (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## ♿ Accessibility & Quality Standards

- **Semantic Landmarks**: Complete `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>` hierarchy.
- **WCAG 2.2 AAA Conformance**: 7:1+ contrast ratios, high-contrast focus rings, dyslexia-friendly typography scaling, and reduced-motion controls.
- **Screen Reader Support**: Skip links, ARIA live region stream, descriptive `aria-labelledby` / `aria-describedby` associations, and zero keyboard traps.

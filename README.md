# dev-studio-test

A React + Vite + Tailwind CSS project configured for automatic deployment to **GitHub Pages**.

## GitHub Pages Deployment

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site whenever changes are pushed to the `main` branch.

### One-Time Setup in GitHub

To activate GitHub Pages for this repository:

1. Go to your repository on GitHub: `https://github.com/evanstom273/dev-studio-test`.
2. Click on **Settings** -> **Pages** (in the left sidebar).
3. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
4. Push a change to `main` (or run the workflow manually under **Actions** tab).

Once deployed, your app will be live at:
`https://evanstom273.github.io/dev-studio-test/`

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

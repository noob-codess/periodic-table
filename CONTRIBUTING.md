# Contributing to Periodic Table

Thanks for considering contributing! 🎉

This is an open source project for the community. Whether you're fixing a typo or adding a major feature, your help is appreciated.

## Code of Conduct

By participating, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md).

## How to Contribute

### 1. Report a Bug

Found a bug? [Open an issue](https://github.com/noob-codess/periodic-table/issues/new) with:
- Clear title describing the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if relevant
- Browser/OS info

### 2. Suggest a Feature

Have an idea? [Open an issue](https://github.com/noob-codess/periodic-table/issues/new) with:
- Clear description of the feature
- Why it would be valuable
- How it might work
- Examples or mockups (optional)

### 3. Submit Code

Found something you want to fix or improve?

#### Setup

```bash
# Fork the repo on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/periodic-table.git
cd periodic-table

# Install dependencies
cd frontend
npm install

# Start dev server
npm run dev
```

#### Development Workflow

1. Create a branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Test locally:
   ```bash
   npm run dev    # Start dev server
   npm run build  # Verify production build works
   npm run lint   # Run linter
   ```

4. Commit with clear messages:
   ```bash
   git commit -m "feat: add comparison feature"
   git commit -m "fix: correct atomic mass for tungsten"
   git commit -m "docs: improve README quick start section"
   ```

5. Push and open a Pull Request

#### Pull Request Guidelines

- Keep PRs focused — one feature/fix per PR
- Update documentation if needed
- Make sure CI passes
- Be patient and responsive to feedback

## Areas We'd Love Help With

### 🏷️ Better Element Tagging
The filter feature needs more curated tags. If you're a chemistry enthusiast, help tag elements with their real-world uses.

### 🌍 Translations
Help us internationalize the project. We need translations for element names and descriptions.

### 📝 Better Element Descriptions
Many elements have basic descriptions. Help us make them more interesting and educational.

### ✨ New Filter Categories
Got an idea for a new filter? Like "Medical Uses" or "Aerospace Materials"? Add it!

### 🎨 Design Improvements
UI/UX improvements always welcome. Just discuss in an issue first.

## Project Structure

```
periodic-table/
├── frontend/              # React application (your main playground)
│   ├── src/
│   │   ├── components/    # All React components
│   │   ├── data/          # Element data — edit elements.json here
│   │   └── styles/        # Global CSS
├── docker/                # Docker config
├── kubernetes/            # Kubernetes/Helm config
└── .github/workflows/     # CI/CD
```

## Code Style

- Use functional React components with hooks
- Tailwind CSS for styling (not external CSS files)
- Keep components small and focused
- Use descriptive variable names
- Comment complex logic, not obvious code

## Questions?

Open an issue and we'll help you out!

---

Thanks again for your interest in contributing! ⚛️
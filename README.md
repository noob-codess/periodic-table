# 🧪 Periodic Table

> An interactive periodic table that shows how chemistry connects to your daily life.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/noob-codess/periodic-table.svg?style=social)](https://github.com/noob-codess/periodic-table/stargazers)
[![Docker Image](https://img.shields.io/badge/docker-ghcr.io-blue)](https://github.com/noob-codess/periodic-table/pkgs/container/periodic-table)
[![CI](https://github.com/noob-codess/periodic-table/actions/workflows/ci.yml/badge.svg)](https://github.com/noob-codess/periodic-table/actions/workflows/ci.yml)
[![Deploy](https://github.com/noob-codess/periodic-table/actions/workflows/deploy.yml/badge.svg)](https://github.com/noob-codess/periodic-table/actions/workflows/deploy.yml)

🌐 **Live demo:** [noob-codess.github.io/periodic-table](https://noob-codess.github.io/periodic-table/)

## What makes this different?

Most periodic tables show you atomic numbers and electron configurations. This one shows you **why elements matter in your life**.

Filter elements by:
- 📱 **In Your Phone** — Lithium, Cobalt, Gold, Indium, and more
- 🚗 **In an EV** — Battery and motor components
- 🧬 **In Your Body** — Essential elements for life
- ☀️ **In Solar Panels** — Photovoltaic materials
- 💎 **Precious Metals** — Gold, Silver, Platinum
- ☢️ **Radioactive** — From Uranium to Plutonium
- 🏠 **Daily Life** — Elements you encounter every day

## Features

- ✨ True periodic table layout on desktop, responsive grid on mobile
- 🌗 Beautiful dark/light mode with smooth transitions
- 🔍 Search by name, symbol, or atomic number
- 🎯 Filter by real-world relevance
- 📊 Detailed element data (electron config, atomic mass, valence, etc.)
- 🚀 Fast, lightweight, no tracking
- 📦 Self-hostable via Docker or Kubernetes

## Quick Start

### Option 1: Visit the live site
👉 [noob-codess.github.io/periodic-table](https://noob-codess.github.io/periodic-table/)

### Option 2: Run with Docker
```bash
docker run -p 8080:80 ghcr.io/noob-codess/periodic-table:latest
```
Then open http://localhost:8080

### Option 3: Run locally
```bash
git clone https://github.com/noob-codess/periodic-table.git
cd periodic-table/frontend
npm install
npm run dev
```

### Option 4: Deploy to Kubernetes
```bash
git clone https://github.com/noob-codess/periodic-table.git
helm install my-periodic-table periodic-table/kubernetes/helm/periodic-table
```

## Tech Stack

- **Frontend:** React 18 + Vite + Tailwind CSS
- **Hosting:** GitHub Pages (free, fast, no tracking)
- **Container:** Docker + nginx
- **Orchestration:** Helm chart for Kubernetes
- **CI/CD:** GitHub Actions

## Project Structure

```
periodic-table/
├── frontend/              # React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── data/          # Element data (JSON)
│   │   └── styles/        # Global styles
│   └── package.json
├── docker/                # Docker configuration
│   ├── Dockerfile
│   └── nginx.conf
├── kubernetes/            # K8s manifests
│   └── helm/              # Helm chart
└── .github/workflows/     # CI/CD pipelines
```

## Contributing

Contributions are welcome! Whether it's:
- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🌍 Translations
- 🏷️ Better element tagging

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## Roadmap

- [ ] Add more filter categories (medical, agriculture, military)
- [ ] Show pronunciation audio for each element
- [ ] Add element discovery timeline view
- [ ] Mobile app version
- [ ] Internationalization (multiple languages)
- [ ] Compare two elements side-by-side
- [ ] Add isotope information

## Built With Help From AI

This project was built with significant assistance from Claude (Anthropic's AI). I'm a Platform Engineer, not a frontend developer — Claude helped me with the React components and design decisions while I handled the architecture, deployment, and DevOps setup.

I think AI-assisted development is the future, and being transparent about it matters. The decisions, debugging, integrations, and the production setup are mine. The boilerplate code is largely Claude's. Together we shipped something better than either of us alone.

## License

[MIT](./LICENSE) — feel free to use this in your own projects.

## Acknowledgments

- Element data curated from public chemistry sources
- Built with ❤️ for chemistry enthusiasts and curious minds

---

⭐ **If you find this useful, please star the repo!**
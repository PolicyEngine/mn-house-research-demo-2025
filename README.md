# Minnesota House Research Demo 2025

PolicyEngine presentation for the Minnesota House Research Department.

## Presentation

**Title**: Modeling Minnesota Tax Policy with PolicyEngine
**Date**: January 6, 2025
**Duration**: ~45 minutes

### Speakers

| Section | Speaker | Role |
|---------|---------|------|
| Intro & Live Coding | Max Ghenis | CEO |
| Microsimulation Deep Dive | David Minister | Lead State Tax Analyst |
| App Demos | Pavel Makarchuk | Director of Growth |
| Wrap Up | Max Ghenis | CEO |

### Topics Covered

- **Live coding exercise**: AI builds a custom MN Working Families Credit visualizer
- Introduction to PolicyEngine and microsimulation
- Deep dive into how microsimulation works (baselines, reforms, data, weighting)
- Hands-on demos of the PolicyEngine web app
- Minnesota Child & Working Families Credit analysis
- Modeling policy reforms and measuring impacts

## Viewing the Slides

Visit: https://policyengine.github.io/mn-house-research-demo-2025

Or run locally:
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the slides.

## Live Coding Prompt

At the start of the presentation, kick off Claude Code with this prompt:

```
Build a React+Vite app visualizing Minnesota's Child & Working Families Credit using PolicyEngine-US.

Stack: React frontend + local Flask API (port 5001) that calls policyengine_us.Simulation

UI: PolicyEngine app styling (teal #319795, Inter font). Controls for credit amount per child, phase-out rate, phase-out thresholds. Toggle for single/joint. Chart with lines for 1/2/3 children vs earnings.

Test each integration point returns real data before moving on. Verify UI states visually in browser.
```

## Project Structure

```
├── slideshows/
│   └── mn-house-2025/
│       ├── config.ts            # Slideshow configuration with speaker assignments
│       └── slides/              # Individual slide components
├── components/                   # Shared slide components
├── lib/                         # Utilities
└── public/                      # Static assets
```

## Deployment

Automatically deployed to GitHub Pages when changes are pushed to main.

# Samantha Campbell — Portfolio

Static portfolio site for Collarts Assignment 3 (SHCRDV-O). Hand-built HTML, CSS, and a small JS file. No framework, no build step.

## Run locally

Just open `index.html` in a browser. That's it.

For a slightly nicer dev experience (live reload, proper `file://` quirks avoided), run a local static server:

```sh
# Option 1: Python (built into macOS)
python3 -m http.server 8080

# Option 2: Node (if installed)
npx serve .

# Option 3: VS Code Live Server extension
```

Then visit `http://localhost:8080`.

## File map

```
portfolio uni/
├── index.html           # Home — hero, work grid, about teaser, contact
├── about.html           # Full about page
├── work/
│   ├── project-1.html   # Case study
│   ├── project-2.html
│   ├── project-3.html
│   └── project-4.html
├── css/
│   ├── tokens.css       # Design tokens (colour, type, spacing)
│   └── styles.css       # All other styles
├── js/
│   └── main.js          # Sticky-nav, mobile-nav, fade-in observer
├── assets/
│   ├── images/          # Project hero SVGs (placeholder until real imagery is added)
│   ├── videos/          # Pitch video, project videos
│   ├── pdfs/            # CV, original project PDFs
│   ├── linkedin-copy.md # LinkedIn deliverable copy (apply to live profile manually)
│   └── pitch-script.md  # 5-min pitch script + slide deck plan
└── README.md
```

## Updating content

### Add a real project

1. Replace the placeholder hero SVG in `assets/images/project-{n}.svg` with a real image (`.jpg` or `.webp`). If you change the file extension, update the `src` in:
   - `index.html` (the matching `.tile` in the work grid)
   - `work/project-{n}.html` (the `.case-hero img` and the case study `<title>` / `<meta>` tags)
2. In `work/project-{n}.html`:
   - Update the `<title>` and meta description
   - Update the `Case Study · 0X / 04` eyebrow (already correct for 1–4)
   - Update the `<h1>` to the real project name
   - Fill in the `case-meta` (Client, Year, Role, Discipline)
   - Rewrite Brief, Approach, Outcome with real content
   - Optionally drop real images into the `case-gallery` `<div>`s (replace each empty `<div aria-hidden="true">` with `<img src="..." alt="...">`)
3. In `index.html`:
   - Update the matching `.tile__title`, `.tile__meta`, and `.tag-row` to match the real project name and tags

### Add the CV

Drop the PDF into `assets/pdfs/CV-Samantha-Campbell.pdf`. The download links in `index.html` and `about.html` already point there.

### Add a real headshot

Drop a square or 4:5 portrait into `assets/images/headshot.jpg`, then in `index.html` and `about.html` replace:

```html
<div class="portrait" aria-hidden="true"></div>
```

with:

```html
<img src="assets/images/headshot.jpg" alt="Samantha Campbell" class="portrait" style="object-fit: cover;" />
```

### Update contact details

Currently using placeholder `hello@samanthacampbell.com`, `linkedin.com`, `instagram.com`. Find-and-replace these across all HTML files when you have real handles.

## Design tokens

Everything visual is driven by `css/tokens.css`. To shift the palette, only edit that file.

- `--accent-red` is the primary brand colour
- `--bg-cream` is the primary background
- `--font-display` is Fraunces (Google Fonts), `--font-sans` is Inter

## Deployment options

When you're ready to publish (do this *after* real content is in):

### Netlify drop (easiest, no account needed for instant preview)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `portfolio uni` folder onto the page
3. You get a live URL in seconds. Sign up to keep it permanent.

### GitHub Pages (free, custom domain capable)
1. Create a new GitHub repo, push this folder
2. Repo Settings → Pages → Source: `main` branch, root folder
3. Site goes live at `username.github.io/repo-name`

### Vercel (similar to Netlify)
1. `npx vercel` from inside the folder
2. Follow prompts

For the assignment submission, either a hosted URL plus a screen recording, or a screen recording on its own demonstrating navigation, will satisfy the "evidence of a functioning website" requirement.

## Submission checklist (Assignment 3)

- [ ] Portfolio site working — every link, every page, every nav item clicks through
- [ ] Real project content swapped in (4 projects minimum)
- [ ] Real headshot swapped in
- [ ] Real CV uploaded to `assets/pdfs/`
- [ ] Real contact details (email, LinkedIn, Instagram)
- [ ] Site deployed to a live URL **OR** screen recording captured
- [ ] LinkedIn profile updated using `assets/linkedin-copy.md`:
  - Headline, About, Skills, Experience, Education, 2 posts, 2 recommendations
- [ ] 5-minute pitch recorded using `assets/pitch-script.md`
- [ ] Slide deck exported as PDF for submission

## Accessibility notes (already built in)

- Semantic HTML (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- Skip-to-content link
- Visible focus rings (`:focus-visible` outline)
- Alt text on all images (update for real images!)
- `prefers-reduced-motion` respected
- Colour contrast checked AA on red/cream pair

When you swap real images in, **always add meaningful alt text** in the `alt=""` attribute. "Project hero artwork" is placeholder — describe what's actually in the image.

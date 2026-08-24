# Hewett.cc - Personal Site Architecture

## Overview

A simple, clean static website with 4 pages: Home, Blog, About Me, and Contact. Built with plain HTML/CSS/JS for easy editing and maintenance.

---

## Technology Stack

| Component | Choice | Rationale |
|-----------|--------|-----------|
| Markup | **HTML5** | Simple, universal, no build tools needed |
| Styling | **CSS3** (custom stylesheet) | Full control, minimal footprint |
| Interactivity | **Vanilla JavaScript** | Only where needed (mobile nav toggle) |
| Deployment | **GitHub Pages** or **Vercel** | Free, simple static hosting with custom domain |

---

## Site Structure

```
hewett.cc/
├── index.html              → Home page
├── blog.html               → Blog listing (post titles linked to full posts)
├── about.html              → About Me page
├── contact.html            → Contact page with email info
├── posts/
│   ├── hello-world.html    → Individual blog post 1
│   └── another-post.html   → Individual blog post 2
├── css/
│   └── style.css           → All styles
├── js/
│   └── main.js             → Mobile nav toggle, any interactivity
└── images/
    └── (project screenshots, profile photo, etc.)
```

---

## Pages

### 1. Home (`index.html`)

```
+--------------------------------------------------+
|  [Hewett.cc]       Home   Blog   About   Contact |
+--------------------------------------------------+
|                                                  |
|           Hewett.cc                              |
|      Software Developer & Creator                |
|     Short tagline / bio line                     |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  Projects                                        |
|  +-------------------+  +-------------------+    |
|  | Project Title     |  | Project Title     |    |
|  | Brief description |  | Brief description |    |
|  | [Link]            |  | [Link]            |    |
|  +-------------------+  +-------------------+    |
|  +-------------------+                          |
|  | Project Title     |                          |
|  | Brief description |                          |
|  | [Link]            |                          |
|  +-------------------+                          |
|                                                  |
+--------------------------------------------------+
|  Footer: Copyright + social links                |
+--------------------------------------------------+
```

### 2. Blog (`blog.html`)

```
+--------------------------------------------------+
|  [Hewett.cc]       Home   Blog   About   Contact |
+--------------------------------------------------+
|                                                  |
|  Blog                                             |
|                                                  |
|  +--------------------------------------------+  |
|  | Post Title                                  |  |
|  | Date | Short excerpt...                     |  |
|  | [Read More]                                 |  |
|  +--------------------------------------------+  |
|  +--------------------------------------------+  |
|  | Post Title                                  |  |
|  | Date | Short excerpt...                     |  |
|  | [Read More]                                 |  |
|  +--------------------------------------------+  |
|                                                  |
+--------------------------------------------------+
|  Footer                                          |
+--------------------------------------------------+
```

### 3. Blog Post (`posts/post-slug.html`)

```
+--------------------------------------------------+
|  [Hewett.cc]       Home   Blog   About   Contact |
+--------------------------------------------------+
|                                                  |
|  < Back to Blog                                  |
|                                                  |
|  Post Title                                      |
|  Date                                            |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  Full blog post content...                       |
|  Paragraphs, code blocks, images, etc.           |
|                                                  |
+--------------------------------------------------+
|  Footer                                          |
+--------------------------------------------------+
```

### 4. About Me (`about.html`)

```
+--------------------------------------------------+
|  [Hewett.cc]       Home   Blog   About   Contact |
+--------------------------------------------------+
|                                                  |
|  About Me                                        |
|                                                  |
|  +-------------------+                          |
|  |                   |                          |
|  |   Profile Photo    |                          |
|  |                   |                          |
|  +-------------------+                          |
|                                                  |
|  Bio text...                                     |
|  Background, interests, what I work on           |
|                                                  |
|  Skills / Tech Stack                             |
|  - JavaScript/TypeScript                         |
|  - Python                                        |
|  - React                                       |
|  - etc.                                          |
|                                                  |
+--------------------------------------------------+
|  Footer                                          |
+--------------------------------------------------+
```

### 5. Contact (`contact.html`)

```
+--------------------------------------------------+
|  [Hewett.cc]       Home   Blog   About   Contact |
+--------------------------------------------------+
|                                                  |
|  Contact                                         |
|                                                  |
|  Get in touch:                                   |
|                                                  |
|  Email: you@hewett.cc                            |
|  (mailto link)                                   |
|                                                  |
|  Social Links:                                   |
|  GitHub: github.com/username                     |
|  LinkedIn: linkedin.com/in/username              |
|  Twitter/X: @username                            |
|                                                  |
+--------------------------------------------------+
|  Footer                                          |
+--------------------------------------------------+
```

---

## Design System

### Color Palette (Clean Minimal)

```css
--color-text:        #1a1a2e   /* dark navy - headings and body */
--color-accent:      #0f3460   /* links, interactive elements */
--color-accent-hover:#16213e  /* hover state for links/buttons */
--color-bg:          #ffffff   /* main background */
--color-surface:     #f8f9fa   /* cards, alternate sections */
--color-muted:       #6c757d  /* secondary text, dates */
--color-border:      #e0e0e0  /* subtle dividers */
```

### Typography

- **Headings:** System sans-serif stack, bold (600-700 weight)
- **Body:** System sans-serif stack, regular (400 weight)
- **Code:** Monospace font for code snippets
- **Font Stack:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif`

### Layout

- Max content width: `800px` for readability (text content), `1200px` max overall
- Generous padding between sections (`3rem` vertical)
- Card components with subtle border/shadow for project listings
- Clean navigation bar at top, simple footer at bottom

---

## Blog Content Approach

Since this is a static site, each blog post will be its own HTML file. To make it easy to create new posts, I'll include:

1. A **template file** (`posts/template.html`) that you can copy and edit for new posts
2. The **blog listing page** (`blog.html`) will need manual updates when adding new posts (add a link entry) — or we can keep it simple with just HTML links

If you want automatic blog listing generation, I could use a very lightweight approach like a JSON file that the blog listing page reads via JavaScript. Let me know if you'd prefer that over manually updating `blog.html` each time.

---

## Deployment Options

### Option A: GitHub Pages (Free)
1. Create a GitHub repository
2. Push all files to the repo
3. Enable GitHub Pages in repository settings
4. Point `hewett.cc` DNS to GitHub Pages

### Option B: Vercel (Free)
1. Create a GitHub repository
2. Connect repo to Vercel
3. Add custom domain `hewett.cc` in Vercel dashboard
4. Automatic SSL, instant deploys on push

Both are free and straightforward. Vercel has slightly easier custom domain setup.

---

## Implementation Plan

1. **Set up project structure** — Create directories and base files
2. **Create shared CSS** — Design system, typography, layout styles
3. **Build navigation bar & footer** — Reusable HTML snippets (copy to each page)
4. **Create Home page** (`index.html`) — Intro + project highlights
5. **Create Blog listing** (`blog.html`) — Post titles with links
6. **Create blog post template** (`posts/template.html`) — For new posts
7. **Create About Me page** (`about.html`) — Bio, photo, skills
8. **Create Contact page** (`contact.html`) — Email + social links
9. **Add responsive mobile styling** — Hamburger menu, stacked layout
10. **Set up deployment** — GitHub repo + hosting configuration

---

## Questions for You

1. **Blog updates:** Do you want the blog listing page to auto-update when you add new posts (requires a small JSON file + JS), or is manually updating `blog.html` acceptable?
2. **Social links:** What social profiles do you want on the Contact page and/or footer? (GitHub, LinkedIn, Twitter/X, etc.)

# Hewett.cc - Personal Site

A clean, minimal dark-themed personal website for showcasing projects and writing blog posts.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Intro section + project highlights |
| Blog | `blog.html` | Auto-updating list of blog posts |
| About Me | `about.html` | Bio, photo, skills |
| Contact | `contact.html` | Email + social links |

## How to Edit

### Adding/Editing Projects (Home Page)

Open [`index.html`](index.html) and modify the project cards:

```html
<div class="project-card">
  <h3>Project Name</h3>
  <p>Brief description of what this project does.</p>
  <a href="#" class="project-link">View Project →</a>
</div>
```

Change the title, description, and `href` link as needed. Copy/paste a card to add more projects.

### Writing Blog Posts

1. **Add an entry** in [`posts/posts.json`](posts/posts.json):
   ```json
   {
     "title": "My New Post",
     "slug": "my-new-post",
     "date": "2024-08-09",
     "excerpt": "A short excerpt shown on the blog listing page."
   }
   ```

2. **Create the post file** by copying [`posts/template.html`](posts/template.html) to `posts/my-new-post.html` and filling in your content.

3. The `slug` must match the filename (without `.html`).

### Editing About Me

Open [`about.html`](about.html) and update:
- Your bio text
- Profile photo (`src="/images/profile.jpg"` — place your photo in `/images/`)
- Skills list

### Editing Contact Info

Open [`contact.html`](contact.html) and update:
- Email address (both display text and `mailto:` link)
- GitHub profile URL
- LinkedIn profile URL

## Deployment

### Option A: Vercel (Recommended - Easiest)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New Project" and import your repository
4. Deploy (no build step needed — it's static files)
5. Go to Settings → Domains and add `hewett.cc`

### Option B: GitHub Pages

1. Push this repo to GitHub
2. Go to Settings → Pages
3. Set Source to "Deploy from a branch"
4. Select your main branch and `/ (root)` folder
5. Deploy
6. Point your DNS for `hewett.cc` to GitHub Pages

## Local Testing

To preview locally, serve the files with any static server:

```bash
# Using Python (if installed)
python -m http.server 8000

# Or using Node.js
npx serve .

# Then open http://localhost:8000 in your browser
```

## File Structure

```
├── index.html              Home page
├── blog.html               Blog listing
├── about.html              About Me page
├── contact.html            Contact page
├── css/
│   └── style.css           All styles (dark theme)
├── js/
│   └── main.js             Mobile nav toggle + blog loader
├── posts/
│   ├── posts.json          Blog post metadata (auto-loaded)
│   ├── template.html       Template for new posts
│   └── [post-slug].html    Individual blog posts
└── images/                 Place images here
```

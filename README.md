# Adelaide Tutor Reviews - your blog website

A clean, professional review blog built with plain HTML, CSS and JavaScript.
No build tools, no database, nothing to install. Open `index.html` in a
browser and it works.

The site currently covers six real Adelaide tutoring companies: TopMark
Tutors, Alchemy Tuition, Tutors SA, Adelaide Tutors, Kip McGrath Education
Centres and Kinetic Education. Each write-up is compiled from what that
company publishes on its own website, and every review links back to the
source.

## What's inside

```
adelaide-tutor-reviews/
├── index.html            ← homepage: hero, search, filters, review cards
├── about.html            ← who you are + how you score providers
├── contact.html          ← contact form (live, via Web3Forms)
├── README.md             ← this file
├── css/
│   └── style.css         ← all styling (colours, layout, fonts)
├── js/
│   ├── reviews-data.js   ← ★ the list of reviews (edit this most often)
│   └── main.js           ← search/filter/sort logic (rarely needs editing)
└── reviews/
    ├── _template.html    ← copy this to create a new review page
    └── *.html            ← one page per review
```

## Features

- **Search box:** finds reviews by company, subject, location or keyword
- **Filters:** subject chips + location dropdown, combinable with search
- **Sorting:** newest first or highest rated
- **Star ratings:** overall score on cards, plus a four-category breakdown
  (teaching approach, subject coverage, parent communication, value and
  accessibility) on each review page
- **Contact form:** already live, no setup needed
- Fully responsive (phone / tablet / desktop), no cookies, no tracking

## How to add a new review (3 steps)

1. **Copy the template.** Duplicate `reviews/_template.html` and rename it,
   e.g. `reviews/smith-tutoring-burnside.html` (lowercase, hyphens).
2. **Write the review.** Open your new file. Every spot you need to edit is
   marked with `TODO`, including a cheat-sheet for the star widths.
3. **Add it to the homepage.** Open `js/reviews-data.js`, copy one of the
   existing blocks and edit it. Make sure `slug` matches your file name
   (without `.html`). The homepage cards, search, filters and stats all
   update automatically.

To **remove** a review: delete its entry in `js/reviews-data.js` and delete
its page from `reviews/`.

## The contact form

The form on `contact.html` is wired to [Web3Forms](https://web3forms.com)
using your access key, so it already works. Submissions are emailed to the
address registered against that key. If you want messages to go to a
different inbox, change it in your Web3Forms dashboard rather than in the
HTML.

The form includes a hidden `botcheck` field that catches most spam bots.
Leave it in place.

## Before you promote the site

- **About page:** rewrite the "Who's behind this" section in `about.html`
  with your real story (it's marked with a TODO comment).
- **Site name:** if you'd rather call the blog something else,
  search-and-replace "Adelaide Tutor Reviews" across the HTML files.

## How the site is published

The site lives in a GitHub repository and is hosted free with **GitHub
Pages**. Any change pushed (or uploaded) to the `main` branch republishes
the site automatically in about a minute.

Two easy ways to update the live site:

1. **On the GitHub website:** open the repository, navigate to the file,
   click the pencil icon to edit (or use "Add file → Upload files" for new
   pages) and commit. No software needed.
2. **With git on your computer:** clone the repository, edit locally, then
   commit and push.

The `.nojekyll` file in the folder tells GitHub Pages to publish the files
exactly as they are. Leave it in place.

## Connecting your domain (when you have it)

1. In the GitHub repository go to **Settings → Pages**, enter your domain
   in the **Custom domain** box and save. GitHub adds a `CNAME` file to the
   repository.
2. At your domain registrar, add these DNS records:
   - For the bare domain (e.g. `adelaidetutorreviews.com.au`): four **A**
     records pointing to `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153` and `185.199.111.153`
   - For `www`: a **CNAME** record pointing to `YOURUSERNAME.github.io`
3. Back in **Settings → Pages**, tick **Enforce HTTPS** once the
   certificate appears (this can take up to an hour after the DNS records
   go live).

## Customising the look

Open `css/style.css`. The colours all live at the top in the `:root` block.
Change `--navy` and `--link` for a different accent colour, `--gold` for
the stars or `--bg` for the page background. Headings use the free Google
font "Fraunces" and body text uses "Inter"; swap them in the `<link>` tag
in each HTML file if you'd like different fonts.

## Writing about real businesses

The reviews here are researched desk reviews, built from each company's own
published material and attributed in a source note at the bottom of every
page. That framing matters. Keeping to it protects you and keeps the site
credible:

- Stick to facts a company publishes about itself, and attribute them.
- Present opinions clearly as opinions, and keep them fair.
- Link to the source so readers can verify anything you state.
- Update or correct a page promptly if a provider tells you something has
  changed. There's a note inviting exactly that on the contact page.
- Don't describe lessons, visits or conversations that did not happen.

(This is general information, not legal advice.)

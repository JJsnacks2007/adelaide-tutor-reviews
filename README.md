# Adelaide Tutor Reviews - your blog website

A clean, professional review blog built with plain HTML, CSS and JavaScript.
No build tools, no database, nothing to install. Open `index.html` in a
browser and it works.

> **Important:** all six tutors currently on the site (BrightPath, Sarah
> Whitfield, Adelaide Science Hub, Little Sprouts, Lingua Adelaide, Harmony
> Lane) are **fictional placeholders** written so you can see the layout.
> Swap in your real reviews before you promote the site or attach your
> domain. Don't leave the sample reviews up as if they were real businesses.

## What's inside

```
adelaide-tutor-reviews/
├── index.html            ← homepage: hero, search, filters, review cards
├── about.html            ← who you are + how you score tutors
├── contact.html          ← contact form (needs 2-min Formspree setup)
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

- **Search box:** finds reviews by tutor name, subject, suburb or keyword
- **Filters:** subject chips + suburb dropdown, combinable with search
- **Sorting:** newest first or highest rated
- **Star ratings:** overall score on cards, plus a four-category breakdown
  (teaching, communication, value, reliability) on each review page
- Fully responsive (phone / tablet / desktop), no cookies, no tracking

## How to add a new review (3 steps)

1. **Copy the template.** Duplicate `reviews/_template.html` and rename it,
   e.g. `reviews/jane-smith-maths-burnside.html` (lowercase, hyphens).
2. **Write the review.** Open your new file. Every spot you need to edit is
   marked with `TODO`, including a cheat-sheet for the star widths.
3. **Add it to the homepage.** Open `js/reviews-data.js`, copy one of the
   existing blocks and edit it. Make sure `slug` matches your file name
   (without `.html`). The homepage cards, search, filters and stats all
   update automatically.

To **remove** a review: delete its entry in `js/reviews-data.js` and delete
its page from `reviews/`.

## One-time setup before you promote the site

- **Contact form:** sign up free at [formspree.io](https://formspree.io),
  create a form and replace `YOUR_FORM_ID` in `contact.html` with your form
  ID. Also replace `hello@example.com` on that page with your real email.
- **About page:** rewrite the "Who's behind this" section in `about.html`
  with your real story (marked with a TODO comment).
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

## A small legal note

You're publishing opinions about real businesses, so: stick to honest,
first-hand experience, keep records of what happened, present opinions as
opinions and be accurate with facts (prices, dates, what was said). The
disclaimer in the site footer helps, but fair and factual writing is the
real protection. (This is general information, not legal advice.)

# Alex Redfield's website

The source for Alex Redfield's personal and professional website, built with
[Astro](https://astro.build) and published free on GitHub Pages.

Live site: https://alexanderredfield-dev.github.io (later: https://redfield.land)

## How it works, in plain language

- **The repo** (short for *repository*) is this project folder on GitHub. GitHub keeps
  every version of every file, so nothing is ever truly lost.
- **Astro** turns the files in this folder (Markdown posts, a list of publications and projects,
  page templates) into an ordinary website.
- **GitHub Actions** is a robot that runs whenever a change reaches the `main` branch.
  It runs Astro, then hands the finished website to **GitHub Pages**, which hosts it.
  A change usually appears on the live site 1–2 minutes later.
- A **commit** is a saved snapshot of changes, with a short note saying what changed.
  A **branch** is a separate line of changes; `main` is the one that gets published.
  To **push** is to send commits from a computer up to GitHub.

You don't need to install anything to make everyday edits: you can do them all on
github.com in your browser.

## Where things live

| What | Where |
|---|---|
| Reflections (blog posts) | `src/content/reflections/` (one `.md` file per post) |
| Publications and Projects | `src/data/publications.yaml` |
| Home/About page | `src/pages/index.astro` |
| Consulting page | `src/pages/consulting.astro` |
| Community Action page | `src/pages/community-action.astro` |
| Contact page | `src/pages/contact.astro` |
| Policy Tracker page | `src/pages/policy-tracker.astro` |
| Menu, header, footer | `src/layouts/Base.astro` (menu labels are listed near the top) |
| Seedling and contour-line drawings | `src/components/` |
| Colors and fonts | `src/styles/global.css` |
| Publishing robot | `.github/workflows/deploy.yml` |

## Add a reflection (blog post)

1. On GitHub, open the folder `src/content/reflections/`.
2. Click **Add file → Create new file**.
3. Name it with lowercase words and hyphens, ending in `.md`, for example
   `farmland-loss-in-maine.md`. The name becomes the web address:
   `/reflections/farmland-loss-in-maine/`.
4. Start the file with this block (the lines between the `---` marks), then write the post below it:

   ```markdown
   ---
   title: "Farmland loss in Maine"
   date: 2026-11-20
   description: "One sentence that shows on the Reflections page."
   ---

   The post starts here. Leave a blank line between paragraphs.

   ## A section heading

   Make **bold** text, *italic* text, and [links](https://example.com).
   ```

   - `title` and `date` are required. Dates are written `YYYY-MM-DD`.
   - `description` is optional.
   - Add `draft: true` to keep a post off the site until it's ready.
5. Click **Commit changes…**, keep "Commit directly to the main branch" selected, and
   click **Commit changes**. The post is live in a minute or two, at the top of the
   Reflections page (posts are listed newest first).

To edit or delete a post, open its file and use the pencil (edit) or the **…** menu (delete).

## Add a publication or project

1. On GitHub, open `src/data/publications.yaml` and click the pencil icon to edit.
2. Copy an existing item (all six lines, starting at `- id:`) and paste it at the
   end of the file, with a blank line before it. Then change the values:

   ```yaml
   - id: maine-farmland-report
     title: "Report title"
     outlet: "Publisher or outlet"
     date: 2026-09-15
     link: "https://example.com/the-real-link"
     description: "One sentence on what this is and why it matters."
   ```

   - `id` is a short unique name: lowercase, hyphens, no spaces.
   - Keep the two-space indent on every line after `- id:`.
   - Put quotes around text, especially text containing a colon (`:`).
   - Order doesn't matter: the page sorts items newest first.
3. Commit the change the same way as a blog post.

## Edit the other pages

The Home, Consulting, Community Action, Policy Tracker, and Contact pages are `.astro` files in `src/pages/`.
They are mostly plain HTML: text sits between tags like `<p>…</p>` (a paragraph) and
`<h2>…</h2>` (a heading). Edit the text between the tags and leave the tags alone.
Placeholder text is in `[square brackets]`.

**Adding the Airtable embed:** in `src/pages/policy-tracker.astro`, find the comment
marked `AIRTABLE EMBED GOES HERE`. Replace the `<div class="placeholder" …>…</div>`
block below it with the `<iframe>` embed code Airtable gives you (Share → Embed this view).

## Publishing changes, and when something goes wrong

Every commit to `main` publishes automatically. To check on it, open the repo's
**Actions** tab: a green check means it's live; a red X means the build stopped and
the old version of the site stays up, so nothing breaks for visitors.

If you get a red X, click it, then click the failed step to see the message.
The most common causes:

- A reflection or publication is missing a required field, or a date isn't `YYYY-MM-DD`.
  The message names the file.
- In `publications.yaml`, an indent is off, or text with a colon isn't in quotes.

Fix the file and commit again. To undo a change entirely, open the commit on GitHub
(the **Commits** link on the repo's main page) and copy back the old text.

## Working on your own computer (optional)

If you'd rather preview changes before they go live:

1. Install [Node.js](https://nodejs.org) (the "LTS" version) and [Git](https://git-scm.com).
2. Download the repo once (*cloning* means making a local copy):
   `git clone https://github.com/alexanderredfield-dev/alexanderredfield-dev.github.io.git`
3. In that folder, run `npm install` once, then `npm run dev` and open
   http://localhost:4321. The preview updates as you save files.
4. To publish: `git add .` (choose the changed files), `git commit -m "Add new post"`
   (save a snapshot with a note), then `git push` (send it to GitHub).

## Pointing redfield.land here (later, not done yet)

No DNS settings have been changed. When it's time, the change at Namecheap must
**only add or edit the records for the website** and must leave the Google Workspace
email records (the **MX** records, plus the email-related TXT records such as SPF,
DKIM, and DMARC) exactly as they are. Then update `site` in `astro.config.mjs` to
`https://redfield.land`.

# antu-saha.github.io

Personal website of Antu Saha, Ph.D. candidate in Computer Science at William & Mary: <https://antu-saha.github.io/>.

The site is plain static HTML (each page has its own copy of the navbar and footer). It started from the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. GitHub Pages still runs Jekyll, so folders whose names start with `_` (e.g., `_templates/`) are not published. `_templates/` keeps the original theme author's pages and files for reference only.

## Pages

| URL | File |
|---|---|
| `/` | `index.html` (bio and news) |
| `/research/` | `research/index.html` (`/projects/` redirects here) |
| `/publications/` | `publications/index.html` |
| `/teaching/` | `teaching/index.html` (teaching, mentoring, service) |
| `/cv/` | `cv/index.html` (web CV; PDF at `assets/pdf/CV.pdf`) |
| `/resume/` | `resume/index.html` (web résumé; PDF at `assets/pdf/Resume.pdf`) |

## Update checklist

1. After editing `cv/main.tex` or `cv/resume_industry.tex` in the job-materials folder, run `cv/make_public.sh` there. It builds phone-free copies and copies them here as `assets/pdf/CV.pdf` and `assets/pdf/Resume.pdf`.
2. Update the matching web pages (`cv/index.html`, `resume/index.html`) and, if needed, `publications/index.html`.
3. Add news items to `index.html` (newest first; keep about ten above the "Older news" toggle).
4. If a page is added or removed, update the navbar on every page and `sitemap.xml`.
5. Preview locally with `python3 -m http.server` from the repository root, then check links before pushing.
6. Never put the phone number or a home address on the site.

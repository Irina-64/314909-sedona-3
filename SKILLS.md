# HTML Academy Sedona Layout Skill

## When To Use

Use this project skill for every change in the Sedona HTML Academy layout:
`index.html`, `catalog.html`, `modal.html`, `style/style.css`, local images,
fonts, and small vanilla JavaScript needed for interface behavior.

## Project Baseline

- Build plain HTML and CSS with progressive enhancement.
- Do not add CSS frameworks, component libraries, bundlers, or external runtime
  dependencies.
- Keep the fixed desktop layout from the mockup: content width is `1200px`,
  centered on a grey page background with a light site shadow.
- Use local PT Sans fonts from `fonts/`.
- Treat the styleguide and interface states as higher priority than individual
  page screenshots when they differ.
- Keep Chrome, Firefox, and Safari compatibility in mind.

## Required Pages And Screens

- `index.html`: main page with hero, advantages, service, search CTA,
  subscription form, footer, and modal trigger.
- `catalog.html`: hotels page with breadcrumbs, filter form, sorting/view
  controls, product cards, pagination, subscription form, and footer.
- `modal.html`: modal search screen, used as the separate modal-state screen.

## Mandatory Technical Requirements

- Logo is always a link to `index.html`.
- Footer HTML Academy logo links to `https://htmlacademy.ru/intensive/htmlcss`.
- Phone number uses a `tel:` link.
- Search and favorites header icons are links to separate placeholder pages.
- Header "Хочу сюда!" is a link to a separate placeholder page.
- Main hero text "Welcome to the gorgeous Sedona, because the Grand Canyon
  sucks!" is a content image with meaningful alternative text.
- Hero background fills the block width and has the white lower mask.
- Service icons for housing, food, and souvenirs are decorative.
- Subscription forms use `required`, do not submit empty email, and send to
  `https://echo.htmlacademy.ru/`.
- The search CTA opens the hotel-search modal.
- Catalog "Гостиницы" navigation item is current and does not link to itself.
- Breadcrumb home icon links to `index.html`.
- Catalog filter is a form sent to `https://echo.htmlacademy.ru/`.
- Filter reset is a real `type="reset"` control.
- Price range controls are interactive.
- View controls are links with GET parameters:
  `catalog.html?view=tile`, `catalog.html?view=card`,
  `catalog.html?view=list`.
- Product card "Подробнее" links to a placeholder hotel detail page.
- Favorite buttons are real buttons; state switching is not required.
- Current pagination item is not interactive and has no hover/focus/active
  states.

## HTML Quality Rules

- Use semantic landmarks: `header`, `main`, `footer`, `nav`, `section`,
  headings, forms, lists.
- Use links only for navigation and buttons for actions.
- Add `aria-current="page"` to the current navigation item.
- Keep hidden text for icon-only controls.
- Use content images via `img` with useful `alt`; decorative images should be
  CSS backgrounds or empty-alt hidden images.
- Avoid dead `href="#"` except where it is intentionally used for CSS-only
  fallback behavior and has no better static destination.

## CSS Quality Rules

- Keep styles in `style/style.css`.
- Follow the existing class naming style and avoid introducing unused classes.
- Preserve visible focus states for interactive controls.
- Do not add responsive breakpoints: the technical specification says the
  layout is not adaptive.
- Reuse existing color variables and button state patterns where possible.

## JavaScript Rules

- Use small vanilla JavaScript only where HTML/CSS cannot provide the required
  interaction cleanly.
- Store scripts in `scripts/` and load them with `defer`.
- Use `const` by default, named handlers, and cached DOM references.
- Do not use `innerHTML` for user-provided content.
- Add and remove document-level handlers only while the modal is open.

## Verification Checklist

- Check all three pages open without console-breaking script errors.
- Run JavaScript syntax checks with `node --check` for every local script.
- Confirm key HTML requirements by searching for links, forms, `required`,
  `type="reset"`, range controls, and active pagination markup.
- If a browser is available, visually inspect `index.html`, `catalog.html`,
  and `modal.html` at the fixed desktop width.

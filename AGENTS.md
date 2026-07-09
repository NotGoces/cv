# Project guidance for AI coding agents

This workspace is a personal portfolio site built with Next.js 16, React 19, TypeScript, and Tailwind CSS. The app uses the App Router under [app](app).

## What matters here
- The landing page is [app/page.tsx](app/page.tsx); it composes the main sections from [app/components](app/components).
- UI copy is centralized through [app/constants/translations.ts](app/constants/translations.ts) and [app/constants/locales.json](app/constants/locales.json). If you add or change visible text, update the relevant translation keys instead of hardcoding new strings.
- The navbar links target section anchors such as #about, #experience, #skills, #projects, #education, and #contact. Keep those anchors consistent when adding or renaming sections.
- Styling is mostly Tailwind utility classes with a dark/light theme toggle. Preserve the existing visual tone and spacing rather than introducing new patterns.

## Workflow for changes
- Prefer small, focused edits in the existing component structure.
- For new sections, follow the current pattern: a top-level section component, semantic markup, and Tailwind-based layout.
- Static assets should go in [public](public); reference them with root-relative paths such as /CV_Pablo_Abad.pdf or /profile.jpg.
- Before finishing, run npm run lint and, when changing behavior or layout, npm run build.

## Important note
The repository includes a Next.js-specific caution from the local environment. When working on framework internals, consult the installed docs in node_modules/next/dist/docs/ before introducing breaking changes.

# Ben Fadel Construction — website

Marketing site for Ben Fadel General Construction Company (Benghazi, Libya). React + TypeScript, Vite, Tailwind CSS. English/Arabic (RTL) via a single in-app language switcher — all copy lives in [src/context/LanguageContext.tsx](src/context/LanguageContext.tsx).

## Structure

```
src/
  pages/        route-level views (Home, About, Projects, Contact, Privacy)
  components/   shared UI (Navbar, Footer, Hero, Services, StatCounter, ProjectCard, CtaBanner)
  context/      language/translation provider
  data/         static content not tied to a language (image lists)
```

## Development

```bash
npm install
npm run dev        # local dev server
npm run typecheck  # tsc --noEmit
npm run lint        # eslint
npm run build       # typecheck + production build to dist/
```

## Deployment

Hosted on Netlify, auto-deployed from `main` (see [public/_redirects](public/_redirects) for the SPA rewrite). [.github/workflows/ci.yml](.github/workflows/ci.yml) runs lint/typecheck/build on every push and PR so broken code never reaches `main`.

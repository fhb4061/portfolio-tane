## Portfolio Website Plan: Jonathan Lopeti (Mobile-First, Recruiter-Focused)

### Summary
- Build a single-page, mobile-first portfolio that positions you as a **Senior Full-Stack Engineer** while preserving recruiter keyword clarity for full-stack roles.
- Core sections: Hero, About, Skills, Experience, Certs/Awards, Contact.
- Exclude Projects in v1 (fully hidden), with structure kept ready for future addition.
- Use a modern minimal default design plus a 3-theme toggle system (default + 2 alternates).

### Key Implementation Changes
- Replace the current landing render with a portfolio page component and section-anchor navigation.
- Introduce a typed local content source (single data module) for all editable profile content:
  - Identity and headline/subheadline
  - About copy
  - Skills grouped by domain
  - Experience entries with 4 concrete impact bullets each
  - Certs/awards items
  - Contact links (Email + LinkedIn)
- Add a theme architecture with 3 built-in visual variants:
  - Minimal default theme for production
  - Two alternate “suggestion” themes via lightweight toggle UI
  - Theme variants isolated so they can be removed with minimal code changes later
- Add mobile-first UX behaviors:
  - Sticky compact nav with anchor links
  - Section spacing and typography prioritized for small screens first, then scaled up
  - Clear primary CTA in hero and repeated CTA in contact section
- Keep projects capability future-ready but hidden:
  - No visible projects section in v1
  - Data shape includes optional projects array for future enablement without refactor

### Public Interfaces / Types
- Define a typed portfolio schema in one source file (e.g., `PortfolioData` with `about`, `skills`, `experience`, `certifications`, `contact`, optional `projects`).
- Define a `ThemeVariant` union (3 named variants) and centralized theme token map.
- Section components consume typed props from the data source (no hardcoded copy in UI components).

### Test Plan
- Render tests (or RTL smoke checks) for all required sections and hero/contact CTAs.
- Verify experience cards always render exactly 4 bullets per role.
- Verify projects section does not render when disabled/empty.
- Validate theme toggle:
  - Switches across 3 variants
  - Preserves readability and contrast on mobile and desktop breakpoints
- Run `npm run lint` and `npm run build` as acceptance gates.

### Assumptions and Defaults
- Headline uses “Senior Full-Stack Engineer”; supporting copy includes “full-stack” for recruiter discoverability.
- Incomplete details (metrics, cert specifics) ship with clearly editable placeholder content.
- Contact methods in v1 are Email and LinkedIn only (no form).
- Certs/Awards section is included in v1, even if initially placeholder-backed.

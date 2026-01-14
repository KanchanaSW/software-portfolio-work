# BIO_LOGIC Portfolio - Next.js Migration

A high-end Next.js 14+ application migrated from static HTML, showcasing a modern portfolio for BIO_LOGIC with a focus on ecological sustainability and regenerative design.

## Architecture Overview

This project follows a modular, data-driven architecture with clear separation of concerns:

### File Structure

```
/
├── .cursor/rules/progress.mdc    # Atomic progress tracking
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout with fonts & theme provider
│   │   ├── page.tsx               # Home page composition
│   │   └── globals.css            # Global styles & scrollbar
│   ├── components/
│   │   ├── Header.tsx             # Navigation bar with dark mode toggle
│   │   ├── Footer.tsx             # Footer with contact info
│   │   ├── HeroSection.tsx        # "MY WORK" hero section
│   │   ├── ProjectGrid.tsx        # Grid container with animations
│   │   ├── ProjectCard.tsx        # Reusable project card component
│   │   └── FloatingCTA.tsx        # Bottom floating CTA button
│   ├── styles/
│   │   └── theme.ts               # Color palette, spacing, typography
│   └── constants/
│       └── site-data.ts           # All content, images, links
└── README.md
```

## Key Features

- **Next.js 14+ App Router** with TypeScript
- **Tailwind CSS** with custom theme configuration
- **Dark Mode** support using `next-themes`
- **Optimized Fonts** via `next/font` (Archivo, Inter, JetBrains Mono)
- **Image Optimization** with Next.js Image component
- **Intersection Observer** animations for project cards
- **Responsive Design** matching original HTML breakpoints
- **Lucide React** icons replacing Material Symbols

## Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

## Updating Content

All site content is centralized in `src/constants/site-data.ts`. To update:

### Navigation Links
Edit the `navigation` array in `siteData`:
```typescript
navigation: [
  { label: 'Ecosystem', href: '#' },
  // Add more links...
]
```

### Project Cards
Modify the `projects` array. Each project supports:
- `id`: Unique identifier
- `title`: Main heading
- `subtitle`: Secondary text
- `imageUrl`: Image source (must be whitelisted in `next.config.js`)
- `type`: 'image' | 'code' | 'text' | 'feature'
- `tags`: Array of tag strings
- `codeContent`: Array of code lines (for code type)
- `textContent`: Array of text lines (for text type)

### Footer Information
Update `siteData.footer`:
- `socialLinks`: Social media links
- `inquiries`: Contact email and phone
- `garden`: Physical address

### Hero Section
Modify `siteData.hero`:
- `title`: Main title text
- `titleHighlight`: Highlighted portion
- `badges`: Array of badge strings

## Component Structure

### Header Component
- Fixed navigation bar
- Dark mode toggle (Lucide icons)
- Responsive navigation (hidden on mobile)
- CTA button

### ProjectCard Component
Handles multiple card variants:
- **Image cards**: SYMBIOSIS_OS, MYCELIUM_NET, HUMUS_APP, HARMONIOUS SCALING
- **Text cards**: ETHIC STACK
- **Code cards**: NATURE IS THE ARCHITECT
- **Feature cards**: GROWING WITH PURPOSE
- **Spanning cards**: RE_ROOT_CMS (2 columns)

### ProjectGrid Component
- 3-column grid on desktop, 1-column on mobile
- Intersection Observer for fade-in animations
- Responsive breakpoints: `md:` (768px), `lg:` (1024px)

## Styling

### Theme Configuration
Colors, spacing, and typography are defined in:
- `src/styles/theme.ts` - TypeScript theme constants
- `tailwind.config.ts` - Tailwind theme extension

### Custom Scrollbar
Custom scrollbar styles are defined in `src/app/globals.css`:
- Light mode: Sage green thumb on cream track
- Dark mode: Moss green thumb on dark track

### Responsive Breakpoints
- Mobile: Default (< 768px)
- Tablet: `md:` (≥ 768px)
- Desktop: `lg:` (≥ 1024px)

## Image Configuration

External images are configured in `next.config.js`:
```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
      pathname: '/**',
    },
  ],
}
```

To add new image domains, add entries to `remotePatterns`.

## Dark Mode

Dark mode is implemented using `next-themes`:
- Toggle button in header
- System preference detection
- Smooth transitions
- Persistent preference

## Animations

Project cards use Intersection Observer for scroll-triggered animations:
- Initial state: `opacity-0 translate-y-10`
- Animated state: `opacity-100 translate-y-0`
- Duration: 700ms
- Threshold: 10% visibility

## TypeScript

All components are fully typed:
- `ProjectCard` interface in `site-data.ts`
- Props interfaces for each component
- Theme type definitions

## Performance Optimizations

- Next.js Image component for optimized images
- Font optimization via `next/font`
- Code splitting via App Router
- CSS-in-JS via Tailwind (no runtime overhead)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid support required
- Intersection Observer API required

## License

© 2024 BIO_LOGIC STUDIO. REGENERATIVE BY DESIGN.

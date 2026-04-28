# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for "Ariella" — an Italian extra virgin olive oil brand from Irpinia. Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4. Content is in Italian.

## Commands

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm run start` — Start production server

## Architecture

- **App Router:** `app/page.tsx` (home) and `app/storia/page.tsx` (brand story) are the two routes
- **Components:** All in `app/components/` — heavy use of GSAP animations with `useGSAP` hook and ScrollTrigger
- **Responsive system:** Custom `MediaQueryProvider` context in `app/context/responsive.jsx` with four breakpoints (mobile <768, tablet 768-1223, desktop 1224-1823, bigScreen 1824+). Access via `useResponsive()` hook
- **Styling:** Tailwind CSS 4 utilities + `cn()` helper from `app/lib/utils.ts` (clsx + tailwind-merge). Brand gold color: `#D6AB5D`

## Key Patterns

- All interactive components use `'use client'` directive
- Animation pattern: `useRef` for DOM refs + `useGSAP` for GSAP lifecycle, with `gsap.matchMedia()` for responsive animations
- Path alias: `@/*` maps to project root
- Mix of `.tsx` and `.jsx` files (some components lack TypeScript)

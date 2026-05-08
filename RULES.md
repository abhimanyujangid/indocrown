# Project Rules and Guidelines

These rules must be followed at all times for this project:

## 1. File Size Limits
- **Maximum 100 lines of code per file**: If a file exceeds this limit, break it down into smaller, modular components or helper files.

## 2. Tech Stack & Styling
- **MUI Only**: Use Material UI (MUI) exclusively for all UI components and styling. Do not mix with other CSS frameworks unless absolutely necessary.
- **Framer Motion**: Use Framer Motion for all animations. Ensure all animations are smooth, high-quality, and enhance the user experience.

## 3. Architecture & Structure
- **Feature-Based Architecture**: Group code by feature rather than by technical type. 
- **Folder Structure**: Inside the App Router, heavily utilize a `features/` directory. Each feature folder should encapsulate its domain and follow this internal structure:
  - `components/`: UI components specific to this feature.
  - `view/`: The main page or layout compositions (the entry point for the feature's visual representation).
  - `data/`: Data fetching, services, hooks, and state management.
  - `types/`: TypeScript interfaces and types specific to this feature.

## 4. Next.js Best Practices & SEO
- **Server-Side First**: Default to Next.js React Server Components (RSC). Only use `'use client'` when interactivity, state (useState/useEffect), or browser APIs are required.
- **SEO Optimization**: Build all pages with SEO in mind. Utilize Next.js Metadata API, proper semantic HTML tags (h1, h2, etc.), and ensure fast server-side rendering for indexable pages.

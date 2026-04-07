const posts = [
  {
    slug: 'building-glec-fullstack-consultancy-platform',
    title: 'Building GLEC: A Full-Stack Consultancy Platform',
    date: '2026-04-07',
    tags: ['Next.js', 'Sanity', 'Supabase', 'Full Stack'],
    excerpt: 'How I built GLEC, a full-stack consultancy platform using Next.js 15, Sanity CMS, and Supabase with a scalable and maintainable architecture.',
    image: '/blogs/glec_hero_image.png',
    demoUrl: 'https://glec-nine.vercel.app/',
    content: `
GLEC (Great Leap Consults) is a consultancy platform designed to help users explore study abroad opportunities, international job placements, and English test preparation services.

I built it as a full-stack application with a focus on performance, clean architecture, and maintainability.

## Project Architecture

The project is structured as a monorepo with two main parts:

- A Next.js 15 frontend for the public website
- A Sanity CMS Studio for managing all dynamic content

This separation keeps content management flexible while allowing the frontend to stay fast and optimized.

## Why Next.js 15?

Next.js App Router made it easy to structure the app using route groups like:

- \`(auth)\` for authentication pages
- \`(client)\` for all public-facing pages

I used server components for data fetching and client components for interactivity. This kept the codebase clean and improved performance.

## Data Fetching Strategy

All data is fetched at the page level using GROQ queries from Sanity. Pages remain thin and pass data into reusable components.

I used Incremental Static Regeneration (ISR) with \`revalidate = 60\`. This means pages are statically generated but updated every 60 seconds, giving a good balance between speed and freshness.

## Sanity CMS Integration

Sanity handles all content including homepage (as a singleton), job listings, and study abroad programs. Queries are centralized in one file, making them easy to maintain and reuse.

## Authentication with Supabase

Authentication is handled using Supabase with simple helper functions for sign up, sign in, and sign out. This removed the need to build a custom backend while still supporting secure user management.

## Key Features

- Filterable job and study listings (client-side)
- Dynamic pages using slugs
- Rich text rendering with Portable Text
- Live chat integration using Tawk.to
- Clean and responsive layout

## What I Learned

This project reinforced a few key lessons:

- Separation of concerns makes scaling easier
- CMS-driven apps benefit from strong typing and structured queries
- Performance should be considered from the start, not added later

The biggest takeaway: keep things simple, structure your code well, and choose tools that reduce complexity instead of adding to it.
    `.trim(),
  },
  {
    slug: 'my-experience-as-an-ai-engineer',
    title: 'My Experience as an AI Engineer at Algonquin College',
    date: '2026-03-30',
    tags: ['AI', 'AWS', 'Python'],
    excerpt: 'Lessons learned from building production AI tools with AWS services during my job at the AI Accelerator Hub.',
    image: '/blogs/ai_engineer.jpg',
    demoUrl: null,
    content: `
During my job at the AI Accelerator Hub at Algonquin College, I got hands-on experience building real AI infrastructure. Here are the key things I worked on and what I learned.

## Building a PDF Report Generator

One of my first tasks was creating a PDF report generator using Python. The styling was driven by YAML configuration files, making it flexible for different report formats without changing code. This taught me the value of separating configuration from logic.

## CloudWatch Logging System

I built a structured logging module that output JSON logs to AWS CloudWatch. It included metrics tracking and error monitoring. The key insight was designing logs to be machine-parseable from day one. It makes debugging in production so much easier.

## S3 Storage with Security Best Practices

I implemented an S3 storage manager with encryption at rest, versioning, and secure access policies. Working with AWS IAM policies taught me that security isn't something you add later, it needs to be baked in from the start.

## Key Takeaways

1. **Infrastructure code is real code** - it deserves the same testing and review as application code
2. **Documentation matters** - I wrote technical docs for every module, which made onboarding teammates much faster
3. **AWS is vast** - but you don't need to know everything, just go deep on the services your project actually uses
    `.trim(),
  },
  {
    slug: 'building-my-portfolio-with-react-and-vite',
    title: 'Building My Portfolio with React and Vite',
    date: '2026-03-29',
    tags: ['React', 'Vite', 'SCSS'],
    excerpt: 'How I built a modern portfolio site with React, Vite, SCSS, dark/light theme, and deployed it to GitHub Pages.',
    image: '/blogs/portfolio.png',
    demoUrl: 'https://janespot.github.io',
    content: `
When I decided to rebuild my portfolio, I wanted something fast, modern, and easy to maintain. Here's how I did it.

## Why React + Vite?

I'd been using plain HTML/CSS for my portfolio, but as the site grew with more sections: skills, experience, certifications, contact forms; managing it all in static HTML became painful. React gave me components, and Vite gave me instant hot reload and a tiny build output.

## The Stack

- **React 18** for the UI
- **Vite** for blazing fast builds
- **SCSS** with a custom design system (ocean blue + light pink theme)
- **Formspree** for the contact form (free tier, no backend needed)
- **GitHub Actions** for automatic deployment to GitHub Pages

## Key Features

The site includes a dark/light theme toggle that persists to localStorage, glassmorphism card designs, a certificate viewer modal that uses Google Docs Viewer on mobile to avoid PDF permission prompts, and inline form submission with success/error states.

## What I Learned

Building this taught me a lot about responsive design edge cases; like how \`min-width\` on flex items can cause horizontal overflow on mobile, or how Material Icons need \`vertical-align: -0.15em\` to sit properly with text.

The biggest takeaway: start simple, ship fast, iterate based on real feedback.
    `.trim(),
  },
];

// Always sorted newest first
export default posts.sort((a, b) => new Date(b.date) - new Date(a.date));

const posts = [
  {
    slug: 'building-my-portfolio-with-react-and-vite',
    title: 'Building My Portfolio with React and Vite',
    date: '2026-03-29',
    tags: ['React', 'Vite', 'SCSS'],
    excerpt: 'How I built a modern portfolio site with React, Vite, SCSS, dark/light theme, and deployed it to GitHub Pages.',
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

Building this taught me a lot about responsive design edge cases, like how \`min-width\` on flex items can cause horizontal overflow on mobile, or how Material Icons need \`vertical-align: -0.15em\` to sit properly with text.

The biggest takeaway: start simple, ship fast, iterate based on real feedback.
    `.trim(),
  },
  {
    slug: 'my-experience-as-an-ai-engineer',
    title: 'My Experience as an AI Engineer at Algonquin College',
    date: '2026-03-15',
    tags: ['AI', 'AWS', 'Python'],
    excerpt: 'Lessons learned from building production AI tools with AWS services during my co-op at the AI Accelerator Hub.',
    content: `
During my co-op at the AI Accelerator Hub at Algonquin College, I got hands-on experience building real AI infrastructure. Here are the key things I worked on and what I learned.

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
];

export default posts;

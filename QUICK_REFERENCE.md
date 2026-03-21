# 🚀 Quick Reference Card

## Installation & Running (First Time)

```powershell
# 1. Navigate to project
cd d:\Projects\project_1

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser at http://localhost:3000
```

## Build & Deploy

```powershell
# Build for production
npm run build

# Start production server
npm start
```

## Project Commands

```powershell
npm run dev          # Start dev server (local testing)
npm run build        # Create optimized build
npm start            # Run production build
npm run lint         # Check code quality
npm cache clean      # Clear npm cache
```

## File Editing Quick Guide

| What to Change | File | Search For |
|----------------|------|------------|
| Your name | `src/components/Hero.tsx` | `Hi, I'm Kamalesh` |
| Your title | `src/components/Hero.tsx` | `Computer Science Student` |
| Resume link | `src/components/Hero.tsx` | `href="/resume.pdf"` |
| GitHub URL | `src/components/Hero.tsx` | `https://github.com` |
| LinkedIn URL | `src/components/Hero.tsx` | `https://linkedin.com` |
| About text | `src/components/About.tsx` | `I'm a Computer Science...` |
| Add skill | `src/components/Skills.tsx` | `const skills = [...]` |
| Add project | `src/components/Projects.tsx` | `const projects = [...]` |
| Email | `src/components/Contact.tsx` | `kamalesh@example.com` |
| Colors | `tailwind.config.js` | `colors: { ... }` |

## Folder Structure Quick Reference

```
src/
├── app/              # Pages & layouts
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/       # All components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ThemeProvider.tsx
└── utils/            # Helper functions
```

## Tailwind Dark Mode Classes

```jsx
// Light mode
<div className="bg-white text-gray-900 border-gray-200">

// Dark mode
<div className="dark:bg-gray-800 dark:text-white dark:border-gray-700">

// Combined
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
```

## Common Tailwind Utilities

```jsx
// Spacing
px-6 py-4      // Padding
mx-auto        // Margin auto
gap-4          // Grid/flex gap

// Display
flex           // Flexbox
grid           // CSS Grid
hidden md:flex // Hide on mobile

// Colors
bg-blue-600    // Background
text-gray-900  // Text color
border-2       // Border

// Effects
shadow-lg      // Shadow
rounded-lg     // Border radius
hover:scale-105 // Hover effect
transition     // Smooth animation

// Responsive
md:grid-cols-2 // 2 columns on tablet+
lg:grid-cols-3 // 3 columns on desktop
```

## Component Props & Exports

All components export as default:
```typescript
export default function ComponentName() {
  return (...)
}
```

Usage in page.tsx:
```typescript
import Hero from '@/components/Hero'
import About from '@/components/About'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  )
}
```

## Git Commands (Optional)

```powershell
# Initialize git
git init

# Add all files
git add .

# Create commit
git commit -m "Initial portfolio setup"

# Add remote (after creating GitHub repo)
git remote add origin https://github.com/username/portfolio.git

# Push to GitHub
git push -u origin main
```

## Environment Setup Verification

```powershell
# Check Node version (should be 16+)
node --version

# Check npm version (should be 8+)
npm --version

# Check git (if using)
git --version

# List installed packages
npm list

# Check for outdated packages
npm outdated
```

## Deploying to Vercel

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js
6. Click "Deploy"
7. Your portfolio is live! 🎉

## Deploying to Netlify

1. Push code to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Connect GitHub
5. Auto-detects build settings
6. Click "Deploy"
7. Your portfolio is live! 🎉

## Troubleshooting

```powershell
# Issue: port 3000 in use
npm run dev -- -p 3001

# Issue: npm won't install
npm cache clean --force
npm install

# Issue: changes not showing
# Clear browser cache (Ctrl + Shift + Delete)
# Hard refresh (Ctrl + Shift + R)

# Issue: dark mode not working
# Clear localStorage in DevTools Console
localStorage.clear()
# Refresh page
```

## Key Features Checklist

- ✅ Responsive Design (mobile + tablet + desktop)
- ✅ Dark Mode Toggle
- ✅ Smooth Scrolling Navigation
- ✅ Animated Sections (Framer Motion)
- ✅ Progress Bars (Skills)
- ✅ Project Cards
- ✅ Contact Form
- ✅ Social Media Links
- ✅ Clean, Modern UI
- ✅ SEO Optimized
- ✅ Accessible

## Browser Compatibility

Works on:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Next Steps

1. ✅ Install dependencies
2. ✅ Run locally (`npm run dev`)
3. ✅ Customize with your info
4. ✅ Add your resume to `/public`
5. ✅ Update social media links
6. ✅ Test on mobile (DevTools)
7. ✅ Build (`npm run build`)
8. ✅ Deploy to Vercel/Netlify
9. ✅ Share with others!

## Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion/
- TypeScript: https://www.typescriptlang.org/

---

**Keep this card handy for quick reference! 📎**

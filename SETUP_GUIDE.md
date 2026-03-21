# 📖 Complete Setup Guide for Kamalesh's Portfolio

## 🎯 Quick Start (5 Minutes)

### 1. Open Terminal/PowerShell
```powershell
# Navigate to project directory
cd d:\Projects\project_1

# Install all dependencies
npm install

# Start development server
npm run dev
```

### 2. Open Browser
- Visit: **http://localhost:3000**
- You should see the portfolio live! 🎉

---

## 📝 Step-by-Step Detailed Setup

### Step 1: Prerequisites Check ✅

Before starting, ensure you have:

1. **Node.js installed** (version 16 or higher)
   - Download from: https://nodejs.org/
   - Verify installation:
     ```powershell
     node --version
     npm --version
     ```

2. **Git installed** (optional but recommended)
   - Download from: https://git-scm.com/

3. **Code Editor**
   - VS Code (recommended): https://code.visualstudio.com/

### Step 2: Navigate to Project Directory

```powershell
# Open PowerShell/Terminal
# Navigate to the project folder
cd d:\Projects\project_1

# Verify you're in the right place
Get-ChildItem
# You should see: package.json, tailwind.config.js, etc.
```

### Step 3: Install Dependencies

```powershell
# Install all required packages
npm install

# This will take 2-3 minutes
# Wait for it to complete
```

Upon successful installation, you'll see:
```
added XXX packages in XXs
```

### Step 4: Start Development Server

```powershell
# Start the development server
npm run dev

# You should see:
# ▲ Next.js 14.0.0
# - Local:        http://localhost:3000
```

### Step 5: View Your Portfolio

1. Open your web browser
2. Go to: **http://localhost:3000**
3. Explore the portfolio!
4. Try the dark mode toggle in the top-right corner
5. Test the smooth scrolling by clicking navigation links

---

## 🎨 Customize Your Portfolio

### Update Hero Section

Edit: `src/components/Hero.tsx`

```typescript
// Line ~20: Change name
<h1>Hi, I'm Kamalesh</h1>  // ← Change "Kamalesh" to your name

// Line ~25: Update title
<p>Computer Science Student</p>  // ← Your title

// Line ~30: Update description
<p>Passionate about coding, technology...</p>  // ← Your description

// Line ~43: Update resume link
href="/resume.pdf"  // ← Upload your resume to public/ folder

// Line ~50-60: Update GitHub/LinkedIn URLs
href="https://github.com"  // ← Your GitHub URL
href="https://linkedin.com"  // ← Your LinkedIn URL
```

### Update About Section

Edit: `src/components/About.tsx`

```typescript
// Line ~8-16: Update interests
const interests = [
  {
    title: 'Python',
    description: 'My primary language...'  // ← Your description
  },
  // Add/remove interests as needed
]

// Line ~50-60: Update bio text
<p>I'm a Computer Science student...</p>  // ← Your bio
```

### Update Skills

Edit: `src/components/Skills.tsx`

```typescript
// Line ~10-16: Add/update skills
const skills = [
  { name: 'Python', level: 90 },  // level is 0-100
  { name: 'JavaScript', level: 85 },
  // Add your skills here
]

// Line ~63-68: Update tools
['Git', 'GitHub', 'VS Code', ...]  // ← Add your tools
```

### Update Projects

Edit: `src/components/Projects.tsx`

```typescript
// Line ~8-32: Update projects
const projects = [
  {
    title: 'Project Name',
    description: 'What this project does...',
    tech: ['Technology', 'Stack'],
    github: 'https://github.com/your-project',
    demo: 'https://project-demo.com'
  },
  // Add more projects
]
```

### Update Contact Email

Edit: `src/components/Contact.tsx` and `src/components/Footer.tsx`

Search for: `kamalesh@example.com` and replace with your email

---

## 🚀 Build for Production

When ready to deploy:

```powershell
# Create optimized production build
npm run build

# Start production server
npm start

# Build will be optimized and ready to deploy
```

---

## 📤 Deploy Your Portfolio

### Option 1: Vercel (Recommended) ⭐

1. Go to: https://vercel.com/sign-up
2. Sign up with GitHub
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Done! Your portfolio is live 🎉

**Benefits:**
- Free hosting
- Automatic deployments
- Fast CDN
- Custom domain support

### Option 2: Netlify

1. Go to: https://netlify.com
2. Click "Add new site"
3. Connect GitHub repository
4. Deploy settings auto-detected
5. Click "Deploy site"

### Option 3: GitHub Pages

1. Add to `next.config.js`:
   ```javascript
   const nextConfig = {
     output: 'export',
   }
   ```
2. Push to GitHub
3. Go to repository Settings → Pages
4. Select main branch
5. Your site will be live at `yourusername.github.io`

---

## 🎯 Key Customizations

### Change Colors

Edit: `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',      // Change primary color
      secondary: '#8B5CF6',    // Change secondary color
    }
  }
}
```

### Add Resume

1. Create a PDF of your resume
2. Place it in the `public/` folder (create if needed)
3. Name it: `resume.pdf`
4. In `src/components/Hero.tsx`, update:
   ```typescript
   href="/resume.pdf"
   ```

### Add Profile Picture

1. Place your picture in `public/` folder
2. Add to `src/components/About.tsx`:
   ```typescript
   import Image from 'next/image'
   <Image src="/your-picture.jpg" alt="Kamalesh" />
   ```

---

## 🔧 Useful Commands

```powershell
# Development
npm run dev              # Start dev server

# Build & Production
npm run build           # Create production build
npm start               # Start production server

# Code Quality
npm run lint            # Check code for errors

# Clear cache
rm -r .next node_modules  # Clean build
npm install             # Reinstall everything
```

---

## 🐛 Common Issues & Solutions

### Issue: Port 3000 Already In Use

```powershell
# Use a different port
npm run dev -- -p 3001
# Then visit: http://localhost:3001
```

### Issue: Dependencies Won't Install

```powershell
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
Remove-Item -Recurse -Force node_modules
npm install
```

### Issue: Styles Not Showing

```powershell
# Rebuild Tailwind CSS
npm run build

# Clear browser cache (Ctrl + Shift + Delete) and refresh
```

### Issue: Dark Mode Not Working

- Clear localStorage: Open DevTools (F12) → Console → `localStorage.clear()`
- Refresh page

### Issue: Changes Not Showing

- Save the file (Ctrl + S)
- Dev server auto-refreshes in 1-2 seconds
- Check for errors in terminal

---

## 📚 File Guide

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout and theme setup |
| `src/app/page.tsx` | Main page structure |
| `src/components/Navbar.tsx` | Navigation bar with dark mode |
| `src/components/Hero.tsx` | Landing section |
| `src/components/About.tsx` | About me section |
| `src/components/Skills.tsx` | Skills showcase |
| `src/components/Projects.tsx` | Projects display |
| `src/components/Education.tsx` | Education timeline |
| `src/components/Contact.tsx` | Contact form |
| `src/components/Footer.tsx` | Footer section |
| `tailwind.config.js` | Tailwind configuration |
| `package.json` | Dependencies and scripts |

---

## 🎓 Learning Resources

- **Next.js**: https://nextjs.org/learn
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Framer Motion**: https://www.framer.com/motion/
- **React Hooks**: https://react.dev/reference/react/hooks

---

## ✨ Next Steps After Setup

1. ✅ Verify it runs locally (npm run dev)
2. ✅ Customize with your information
3. ✅ Add your resume PDF
4. ✅ Update social media links
5. ✅ Test dark mode toggle
6. ✅ Test responsive design (use DevTools)
7. ✅ Add your projects
8. ✅ Build for production (npm run build)
9. ✅ Deploy to Vercel/Netlify

---

## 💡 Pro Tips

1. **Use DevTools** - Press F12 to test responsive design
2. **Dark Mode** - Click the sun/moon icon to toggle theme
3. **Smooth Scroll** - Click navbar links for smooth scrolling
4. **Mobile Preview** - Test on phone before deploying
5. **SEO** - Edit metadata in `src/app/layout.tsx`

---

## 🆘 Need Help?

### Check Terminal for Errors
- Look for red text in terminal when running `npm run dev`
- Error messages usually tell you what's wrong

### Common Errors:
- `Module not found` → Run `npm install`
- `Port already in use` → Use different port with `-p flag`
- `Syntax error` → Check for typos in edited files

### Verify Installation:
```powershell
node --version    # Should be v16+
npm --version     # Should be v8+
npm list          # Shows installed packages
```

---

## 🎉 Congratulations!

You now have a professional portfolio website! 

**Next:**
- Share with friends and family
- Add to your resume
- Keep updating with new projects
- Customize to make it uniquely yours!

**Happy coding! 🚀**

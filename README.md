# 🚀 Kamalesh's Portfolio Website

A modern, fully responsive portfolio website for Kamalesh - a Computer Science student. Built with **Next.js 14** (App Router), **Tailwind CSS**, and **Framer Motion** for smooth animations.

## ✨ Features

- ✅ **Responsive Design** - Perfectly optimized for mobile, tablet, and desktop
- 🌙 **Dark Mode Toggle** - Switch between light and dark themes
- 🎨 **Modern UI** - Clean and contemporary design with gradient accents
- ⚡ **Smooth Animations** - Beautiful animations powered by Framer Motion
- 🔄 **Smooth Scrolling** - Fluid navigation between sections
- 📱 **Mobile-First** - Optimized performance on all devices
- 🎯 **SEO Friendly** - Proper meta tags and semantic HTML
- ♿ **Accessible** - Built with accessibility best practices

## 📋 Sections

1. **Hero Section** - Engaging introduction with CTA buttons
2. **About Me** - Personal introduction and interests
3. **Skills** - Technical skills with animated progress bars
4. **Projects** - Featured projects showcase
5. **Education** - Educational background and timeline
6. **Contact** - Contact form and social links
7. **Footer** - Navigation links and social connections

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Dev Tools**: ESLint, Prettier

## 📦 Installation & Setup

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Step-by-Step Guide

1. **Navigate to project directory**
   ```bash
   cd d:\Projects\project_1
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   - Go to [http://localhost:3000](http://localhost:3000)
   - Your portfolio is now live! 🎉

## 🚀 Building for Production

1. **Create optimized build**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Start production server**
   ```bash
   npm start
   # or
   yarn start
   ```

## 📁 Project Structure

```
d:\Projects\project_1/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx            # Main page/home
│   │   └── globals.css         # Global styles & animations
│   ├── components/
│   │   ├── Hero.tsx            # Hero/landing section
│   │   ├── About.tsx           # About me section
│   │   ├── Skills.tsx          # Skills with progress bars
│   │   ├── Projects.tsx        # Featured projects
│   │   ├── Education.tsx       # Education timeline
│   │   ├── Contact.tsx         # Contact form
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Footer.tsx          # Footer
│   │   └── ThemeProvider.tsx   # Dark mode provider
│   └── utils/                  # Utility functions (if needed)
├── public/                      # Static assets
├── package.json                # Dependencies
├── tsconfig.json              # TypeScript config
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── postcss.config.js          # PostCSS configuration
```

## 🎨 Customization

### Update Personal Information
Edit the following components to add your information:

1. **Hero Section** - [src/components/Hero.tsx](src/components/Hero.tsx)
   - Change email links
   - Update GitHub/LinkedIn URLs
   - Customize resume download link

2. **About Section** - [src/components/About.tsx](src/components/About.tsx)
   - Update personal bio
   - Modify interests

3. **Skills Section** - [src/components/Skills.tsx](src/components/Skills.tsx)
   - Add/remove skills
   - Adjust proficiency levels

4. **Projects Section** - [src/components/Projects.tsx](src/components/Projects.tsx)
   - Update project details
   - Add project links

5. **Contact Section** - [src/components/Contact.tsx](src/components/Contact.tsx)
   - Update email address
   - Modify social links

### Colors & Branding
Edit color scheme in [tailwind.config.js](tailwind.config.js):
```javascript
colors: {
  primary: '#3B82F6',      // Blue
  secondary: '#8B5CF6',    // Purple
  dark: '#1F2937',
  light: '#F9FAFB',
}
```

### Add Resume
1. Place your resume PDF in the `public` folder
2. Update the download link in [src/components/Hero.tsx](src/components/Hero.tsx)

## 🌐 Deployment

### Deploy to Vercel (Recommended)
Vercel is optimized for Next.js and provides the best experience:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Deploy automatically

### Deploy to Other Platforms
- **Netlify**: Works but optimized for Vercel
- **AWS**: Requires additional configuration
- **Docker**: Can containerize for any hosting

## 📱 Responsive Breakpoints

The portfolio uses Tailwind CSS responsive design:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔑 Key Features Explained

### Dark Mode
- Automatically detects system preference
- Saved to localStorage for persistence
- Toggle button in navbar

### Smooth Animations
- Fade-in effects on scroll
- Hover transformations
- Progress bar animations
- Button scale effects

### Accessibility
- Semantic HTML tags
- Proper ARIA labels
- Keyboard navigation support
- Color contrast compliance

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styles not applying
```bash
# Rebuild Tailwind CSS
npm run build
```

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [App Router Tutorial](https://nextjs.org/learn)

## 📝 Code Comments

All components include beginner-friendly comments explaining:
- Component purpose
- Key functionality
- Animation logic
- State management

## 🔐 Environment Variables

Currently, the project uses no environment variables. If you need to add API endpoints, create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_GITHUB_URL=your_github_url
```

## 🤝 Contributing

Feel free to fork and customize this portfolio template for your own use!

## 📄 License

This project is open source and available for personal and educational use.

## 🎯 Next Steps

1. ✅ Install dependencies and run locally
2. ✅ Customize with your information
3. ✅ Update social media links
4. ✅ Add your projects
5. ✅ Deploy to Vercel or your preferred host

---

**Made with ❤️ for Kamalesh** - Your journey in tech starts here! 🚀

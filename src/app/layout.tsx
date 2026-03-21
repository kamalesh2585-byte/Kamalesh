import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kamalesh - Portfolio | Developer from Coimbatore',
  description: 'Portfolio of Kamalesh, a Computer Science student from Coimbatore passionate about web development, coding, and technology.',
  keywords: ['portfolio', 'developer', 'coimbatore', 'computer science', 'python', 'javascript', 'web development', 'react', 'next.js'],
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

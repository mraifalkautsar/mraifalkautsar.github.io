import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Muhammad Ra\'if Alkautsar - Portofolio',
  description: 'Software Engineer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          {children}
      </body>
    </html>
  )
}

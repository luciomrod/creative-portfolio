import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucio Andres',
  description: 'Frontend Web Developer Portfolio ',
  generator: 'Lucio Andres',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

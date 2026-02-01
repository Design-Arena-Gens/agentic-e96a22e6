import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mandibular Growth & Suture Biology',
  description: 'Understanding mandibular forward growth potential and suture biology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

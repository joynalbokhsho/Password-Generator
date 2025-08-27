import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Password Generator - Secure & Smart',
  description: 'Generate strong, secure passwords with our advanced password generator. Features include customizable length and character types.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}

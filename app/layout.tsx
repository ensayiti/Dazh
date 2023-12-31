import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs'
import Dashboard from '@/app/dashboard/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dazh',
  description: 'Dazh by ensayiti',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className='scroll-smooth'>
        <body className={inter.className}>
          <SignedOut>
            {children}
          </SignedOut>
          <SignedIn>
            <Dashboard />
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  )
}

import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Isssues Tracker',
  description: 'A small app for keeping track of your issues',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.variable} >
        <Theme appearance="light" accentColor="bronze">
          <NavBar />
          <main className='p-5'>{children}</main>
        </Theme>
      </body>
    </html>
  )
}

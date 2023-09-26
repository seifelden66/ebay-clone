import './globals.css'
import type { Metadata } from 'next'
import {ToastContainer} from 'react-toastify'
import { Inter } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'eBay Clone',
  description: 'eBay',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        {children}</body>
    </html>
  )
}

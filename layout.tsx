import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TAMU Study Group Finder",
  description: "Find and create study groups for Texas A&M University students",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-white to-gray-100 min-h-screen`}>
        <header className="p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#500000]">
              TAMU Study Groups
            </Link>
            <div>
              <Link href="/" className="mr-4 text-gray-700 hover:text-[#500000]">
                Home
              </Link>
              <Link href="/create-group" className="text-gray-700 hover:text-[#500000]">
                Create Group
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}


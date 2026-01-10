import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "NexusAI - Intelligent Automation Platform",
  description:
    "Transform your workflow with next-generation AI. Build, automate, and scale with the most advanced AI platform.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${jetbrainsMono.variable} font-sans antialiased h-full w-full`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

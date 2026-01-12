"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${scrolled || mobileMenuOpen
        ? "bg-black/95 backdrop-blur-md border-b border-white/10"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl md:max-w-full md:px-12 lg:px-16 xl:px-20 mx-auto px-5 sm:px-6">
        <div className="flex h-14 md:h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="text-sm font-medium text-white">nexus.ai</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            {["Features", "Use Cases", "Pricing", "Docs"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-xs md:text-sm text-white/70 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            <Link
              href="/login"
              className="text-xs md:text-sm text-white/70 hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-medium bg-white text-black rounded hover:bg-white/90 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-white/70 hover:text-white transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-4 bg-black/95 border-t border-white/10">
          <div className="flex flex-col gap-1">
            {["Features", "Use Cases", "Pricing", "Docs"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded transition"
              >
                {item}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded transition"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 text-sm font-bold text-white hover:bg-white/10 rounded transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

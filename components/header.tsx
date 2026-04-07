"use client"

import Link from "next/link"

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight group">
          <span className="text-brand">M</span>anuel <span className="text-brand">M</span>artinez
        </Link>
        <ul className="flex items-center gap-8">
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-muted-foreground hover:text-brand transition-colors"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-brand transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-brand transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

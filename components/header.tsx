"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"

export function Header({ lang, dict }: { lang: string; dict: any }) {
  const pathname = usePathname()
  
  const redirectedPathname = (locale: string) => {
    if (!pathname) return "/"
    const segments = pathname.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={`/${lang}`} className="text-lg font-semibold tracking-tight group">
          <span className="text-brand">M</span>anuel <span className="text-brand">M</span>artinez
        </Link>
        <ul className="flex items-center gap-6 md:gap-8">
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-muted-foreground hover:text-brand transition-colors font-medium"
            >
              {dict.projects}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-brand transition-colors font-medium"
            >
              {dict.about}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-brand transition-colors font-medium"
            >
              {dict.contact}
            </button>
          </li>
          <li className="flex items-center gap-1.5 border-l border-border pl-6 ml-2">
            <Link
              href={redirectedPathname("en")}
              className={`text-xs font-bold transition-all ${lang === "en" ? "text-brand scale-110" : "text-muted-foreground/60 hover:text-brand"}`}
            >
              EN
            </Link>
            <span className="text-muted-foreground/30 text-[10px]">|</span>
            <Link
              href={redirectedPathname("es")}
              className={`text-xs font-bold transition-all ${lang === "es" ? "text-brand scale-110" : "text-muted-foreground/60 hover:text-brand"}`}
            >
              ES
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

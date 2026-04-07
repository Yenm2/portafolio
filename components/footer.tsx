export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {currentYear} Manuel Martinez. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with Next.js and deployed on Vercel
        </p>
      </div>
    </footer>
  )
}

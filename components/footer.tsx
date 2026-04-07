export function Footer({ dict }: { dict: any }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border bg-background/50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Manuel Martinez. {dict.rights}
        </p>
        <p className="text-sm text-muted-foreground">
          {dict.builtWith}
        </p>
      </div>
    </footer>
  )
}

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { AnimatedCursor } from "@/components/animated-cursor"
import { getDictionary } from "@/lib/get-dictionaries"
import type { Locale } from "@/lib/i18n-config"

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  
  return (
    <>
      <AnimatedCursor />
      <Header lang={lang} dict={dict.nav} />
      <main>
        <Hero dict={dict.hero} lang={lang} />
        <Projects dict={dict.projects} />
        <About dict={dict.about} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
    </>
  )
}

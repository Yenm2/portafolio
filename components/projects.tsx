"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "KD - King Detailer",
    description: "Captación de leads de alta fidelidad para servicios premium. Implementé una arquitectura SPA con Next.js (SSG) y optimización de activos, logrando un LCP < 1.2s y 100/100 en Performance de Lighthouse.",
    tags: ["Next.js", "SSG", "Performance", "Lighthouse 100"],
    liveUrl: "https://kd-tau.vercel.app",
    githubUrl: "https://github.com/Yenm2/KD",
  },
  {
    title: "Comido",
    description: "Plataforma escalable de reseñas gastronómicas. Diseñé la arquitectura de microservicios y lideré un equipo de 8 ingenieros (Scrum). Implementé GraphQL para una agregación de datos eficiente, reduciendo la latencia de consultas en un 40%.",
    tags: ["Next.js", "GraphQL", "Microservices", "Tech Lead"],
    liveUrl: "http://www.somoscomido.com/",
    githubUrl: "https://github.com/Yenm2/somoscomido",
  },
  {
    title: "NCC - Northern Construction",
    description: "Sistema de gestión de maquinaria pesada con enfoque Mobile-First y SSR. Desarrollé una infraestructura de alta disponibilidad que incrementó la accesibilidad móvil en un 60%, optimizando el acceso a datos en zonas de baja conectividad.",
    tags: ["Next.js", "SSR", "Mobile-First", "Systems Design"],
    liveUrl: "https://ncc-tan.vercel.app",
    githubUrl: "https://github.com/Yenm2/NCC",
  },
  {
    title: "Rojas Finishes",
    description: "Catálogo digital interactivo de alta resolución. Implementé estrategias de Lazy Loading y Blur Placeholders para el manejo de activos de >5MB, manteniendo un Time to Interactive (TTI) inferior a 2 segundos.",
    tags: ["Image Optimization", "SEO", "Next.js", "Performance"],
    liveUrl: "https://rojas-beta.vercel.app",
    githubUrl: "https://github.com/Yenm2/RF",
  },
  {
    title: "Voces de la Sierra",
    description: "Experiencia narrativa interactiva ganadora de la Beca de Emprendimiento (Tec de Monterrey). Programé el motor de eventos y un sistema de audio procedimental reactivo utilizando C# y FMOD.",
    tags: ["Unity", "C#", "System Logic", "Entrepreneurship Award"],
    liveUrl: "https://cesarug.itch.io/vocesdelasierra",
    githubUrl: "#",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of my most recent work deployed on Vercel.
          </p>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="group h-full hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-2 transition-all duration-300 border-border/50 hover:border-brand/30">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-brand transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-pretty">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-brand/10 text-brand rounded-full transition-colors hover:bg-brand hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl !== "#" && (
                      <Button variant="outline" size="sm" asChild className="group/btn border-brand text-brand hover:bg-brand hover:text-white">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="size-4 mr-1.5 group-hover/btn:rotate-12 transition-transform" />
                          Live Site
                        </a>
                      </Button>
                    )}
                    {project.githubUrl !== "#" && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="size-4 mr-1.5" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

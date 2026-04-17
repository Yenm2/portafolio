"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

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

export function Projects({ dict }: { dict: any }) {
  const projectItems = [
    {
      id: "comido",
      ...dict.items.comido,
      image: "/assets/projects/comido.png",
      liveUrl: "http://www.somoscomido.com/",
      githubUrl: "#"
    },
    {
      id: "ncc",
      ...dict.items.ncc,
      image: "/assets/projects/ncc.png",
      liveUrl: "https://ncccolorado.com/",
      githubUrl: "https://github.com/Yenm2/NCC"
    },
    {
      id: "Magnolia",
      ...dict.items.Magnolia,
      image: "/assets/projects/magnolia.png",
      liveUrl: "https://magnoliajoyeria.com/password",
      githubUrl: "#"
    },
    {
      id: "ecos",
      ...dict.items.ecos,
      image: "/assets/projects/voces.png",
      liveUrl: "https://cesarug.itch.io/vocesdelasierra",
      githubUrl: "#"
    },
  ]

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
            {dict.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {dict.description}
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectItems.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="group h-full overflow-hidden hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-2 transition-all duration-300 border-border/50 hover:border-brand/30">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-xs font-medium bg-brand/90 text-white px-2 py-1 rounded">
                      {project.title}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-brand transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-pretty line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag: string) => (
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
                          {dict.liveSite}
                        </a>
                      </Button>
                    )}
                    {project.githubUrl !== "#" && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="size-4 mr-1.5" />
                          {dict.code}
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

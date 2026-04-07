"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "KD - King Detailer",
    description: "High-conversion landing page for premium automotive services. Dark mode design oriented to highlight automotive textures and finishes. Simplified navigation directing users to booking or service inquiries.",
    tags: ["Landing Page", "Dark Mode", "Conversion"],
    liveUrl: "https://kd-tau.vercel.app",
    githubUrl: "#",
  },
  {
    title: "Comido",
    description: "Social platform for food reviews. Led the technical development of an 8-person team, establishing software architecture and implementing the MVP with Next.js and GraphQL.",
    tags: ["Next.js", "GraphQL", "Full-Stack", "Scrum"],
    liveUrl: "http://www.somoscomido.com/",
    githubUrl: "#",
  },
  {
    title: "NCC - Northern Construction",
    description: "Institutional platform for construction project management. Robust information architecture prioritizing machinery, completed projects, and certifications. Mobile-first accessibility for users in the field.",
    tags: ["Corporate", "Scalable", "Responsive"],
    liveUrl: "https://ncc-tan.vercel.app",
    githubUrl: "#",
  },
  {
    title: "Rojas Finishes",
    description: "Digital identity for specialized services. High-fidelity visual interface serving as a 24/7 business card. Optimized heavy image loading to showcase finishing portfolios without sacrificing mobile performance.",
    tags: ["Next.js", "Business Identity", "Performance"],
    liveUrl: "https://rojas-beta.vercel.app",
    githubUrl: "#",
  },
  {
    title: "Voces de la Sierra",
    description: "Narrative video game developed at Ludic Jam Hackathon 2025. Winner of the Entrepreneurship Scholarship and recognition as 'Emerging Entrepreneur' from Tecnológico de Monterrey.",
    tags: ["Unity", "C#", "Sound Design", "Game Dev"],
    liveUrl: "https://cesarug.itch.io/vocesdelasierra",
    githubUrl: "#",
  },
  {
    title: "Lion Records - Productions",
    description: "Direction of over 10 music videos managing lighting, camera, and post-production teams. End-to-end supervision of audio and video workflows.",
    tags: ["Audio Engineering", "Video Direction", "Leadership"],
    liveUrl: "#",
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

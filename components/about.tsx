"use client"

import { motion } from "framer-motion"

const coreLanguages = ["JavaScript", "TypeScript", "Go", "Python"]
const frameworks = ["Next.js (App Router)", "Astro", "React", "Node.js", "Express"]
const infraSkills = ["MongoDB", "SQL Server", "GraphQL", "Git", "Vercel"]
const methodologies = ["Software Architecture", "System Design", "Scrum (Agile)", "Lead Engineering"]

function SkillCategory({ title, skills, delay = 0 }: { title: string; skills: string[]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h4 className="text-sm font-medium text-muted-foreground mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + index * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-3 py-1.5 bg-background border border-brand/20 rounded-lg text-sm font-medium hover:border-brand hover:bg-brand/5 hover:text-brand transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.03)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.03)_0%,transparent_50%)]" />
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Software Engineer con un enfoque en la construcción de arquitecturas escalables y liderazgo de equipos técnicos. Mi experiencia radica en transformar visiones de producto en plataformas robustas, habiendo diseñado y liderado la arquitectura completa de <span className="text-brand font-medium">Comido</span> (Next.js + GraphQL).
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Como <span className="text-brand font-medium">Founder & Técnico Lead</span>, he orquestado equipos multidisciplinarios bajo metodologías Agile, garantizando siempre la excelencia técnica, el rendimiento y una visión estratégica de sistemas distribuidos.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Ganador de la <span className="text-brand font-medium">Beca de Emprendimiento</span> y reconocido como &quot;Emprendedor Emergente&quot; por el Tecnológico de Monterrey (2025) por mi trabajo en innovación tecnológica y desarrollo de productos de software.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-sm italic"
              >
                Actualmente cursando el 8vo semestre de Ingeniería en Ciencias de la Computación en el Tecnológico de Monterrey.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-sm"
              >
                <span className="font-medium text-foreground">Languages:</span> Spanish (Native), 
                English (Fluent)
              </motion.p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Technical Excellence</h3>
            <SkillCategory title="Core Languages" skills={coreLanguages} delay={0.1} />
            <SkillCategory title="Frameworks & Libraries" skills={frameworks} delay={0.2} />
            <SkillCategory title="Infrastucture & DB" skills={infraSkills} delay={0.3} />
            <SkillCategory title="Methodologies & Leadership" skills={methodologies} delay={0.4} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

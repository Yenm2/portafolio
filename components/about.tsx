"use client"

import { motion } from "framer-motion"

const frontendSkills = ["Next.js", "Astro", "JavaScript", "HTML5", "CSS3"]
const backendSkills = ["Node.js", "Go", "GraphQL", "Python"]
const toolsSkills = ["SQL Server", "Git", "Microsoft Excel", "Office"]
const softSkills = ["Team Leadership", "Agile Methodologies", "Scrum"]

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
                Computer Science Engineering student (8th semester) with a solid 
                technical foundation in backend development, relational database design, and systems analysis.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Currently the <span className="text-brand font-medium">Founder & Lead Developer of Comido</span>, 
                a social platform for food reviews where I lead a team of 8 people and direct 
                the software architecture using Next.js and GraphQL.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                I also work as Audio Engineer and Creative Director at Lion Records, where I have 
                directed over 10 music videos managing multidisciplinary teams.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Awarded as <span className="text-brand font-medium">&quot;Emerging Entrepreneur&quot;</span> by 
                Tecnológico de Monterrey (2025).
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
            <h3 className="text-lg font-semibold">Technical Skills</h3>
            <SkillCategory title="Frontend" skills={frontendSkills} delay={0.1} />
            <SkillCategory title="Backend" skills={backendSkills} delay={0.2} />
            <SkillCategory title="Tools & DB" skills={toolsSkills} delay={0.3} />
            <SkillCategory title="Soft Skills" skills={softSkills} delay={0.4} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

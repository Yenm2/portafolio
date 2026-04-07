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

export function About({ dict }: { dict: any }) {
  const coreLanguages = ["JavaScript", "TypeScript", "Go", "Python"]
  const frameworks = ["Next.js (App Router)", "Astro", "React", "Node.js", "Express"]
  const infraSkills = ["MongoDB", "SQL Server", "GraphQL", "Git", "Vercel"]
  const methodologies = ["Software Architecture", "System Design", "Scrum (Agile)", "Lead Engineering"]

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
              {dict.title}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {dict.p1}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {dict.p2}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {dict.p3}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-sm italic"
              >
                {dict.p4}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-sm"
              >
                <span className="font-medium text-foreground">{dict.languages}:</span> {dict.spanish}, {dict.english}
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
            <h3 className="text-lg font-semibold">{dict.skillsTitle}</h3>
            <SkillCategory title={dict.coreLanguagesTitle} skills={coreLanguages} delay={0.1} />
            <SkillCategory title={dict.frameworksTitle} skills={frameworks} delay={0.2} />
            <SkillCategory title={dict.infraTitle} skills={infraSkills} delay={0.3} />
            <SkillCategory title={dict.methodologiesTitle} skills={methodologies} delay={0.4} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

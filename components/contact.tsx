"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export function Contact({ dict }: { dict: any }) {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 -z-10 opacity-20">
        <div className="w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
      </div>
      
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

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold mb-6">{dict.infoTitle}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Email</p>
                  <a href="mailto:manuelmtz267@gmail.com" className="text-foreground hover:text-brand transition-colors">
                    manuelmtz267@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="text-foreground">{dict.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                {dict.findMeOn}
              </h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild className="rounded-full hover:border-brand hover:text-brand hover:bg-brand/5 transition-all duration-300">
                  <a href="https://github.com/Yenm2" target="_blank" rel="noopener noreferrer">
                    <Github className="size-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-full hover:border-brand hover:text-brand hover:bg-brand/5 transition-all duration-300">
                  <a href="https://www.linkedin.com/in/manuel-martinez-729037205/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="size-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {dict.form.name}
                </label>
                <Input 
                  id="name" 
                  placeholder={dict.form.placeholderName} 
                  className="bg-background border-border/50 focus-visible:ring-brand/50 transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {dict.form.email}
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder={dict.form.placeholderEmail} 
                  className="bg-background border-border/50 focus-visible:ring-brand/50 transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {dict.form.message}
                </label>
                <Textarea 
                  id="message" 
                  placeholder={dict.form.placeholderMessage} 
                  className="min-h-[120px] bg-background border-border/50 focus-visible:ring-brand/50 transition-colors" 
                />
              </div>
              <Button type="submit" className="w-full bg-brand hover:bg-brand-dark shadow-md shadow-brand/20 transition-all font-medium h-11">
                {dict.form.send}
                <Send className="size-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Mail, MapPin, Send, PhoneCall } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
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
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it and see how I can help.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <motion.a 
                href="mailto:manuel_martinez_martinez@outlook.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                whileHover={{ x: 5 }}
              >
                <span className="p-2 bg-brand/10 text-brand rounded-lg group-hover:bg-brand group-hover:text-white transition-colors">
                  <Mail className="size-5" />
                </span>
                <span>manuel_martinez_martinez@outlook.com</span>
              </motion.a>
              <motion.a 
                href="tel:+526143770399" 
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                whileHover={{ x: 5 }}
              >
                <span className="p-2 bg-brand/10 text-brand rounded-lg group-hover:bg-brand group-hover:text-white transition-colors">
                  <PhoneCall className="size-5" />
                </span>
                <span>+52 614 377 03 99</span>
              </motion.a>
              <motion.div 
                className="flex items-center gap-3 text-muted-foreground"
                whileHover={{ x: 5 }}
              >
                <span className="p-2 bg-brand/10 text-brand rounded-lg">
                  <MapPin className="size-5" />
                </span>
                <span>Chihuahua, Mexico</span>
              </motion.div>
            </div>
            <div className="mt-8">
              <p className="text-sm text-muted-foreground mb-4">
                You can also find me on:
              </p>
              <div className="flex gap-4">
                {[
                  { name: "LinkedIn", url: "https://www.linkedin.com/in/manuel-martinez-729037205/" },
                  { name: "GitHub", url: "https://github.com/Yenm2" }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="px-4 py-2 bg-brand/10 text-brand rounded-lg text-sm font-medium hover:bg-brand hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6" 
            onSubmit={(e) => e.preventDefault()}
          >
            <FieldGroup>
              <Field>
                <FieldLabel>Name</FieldLabel>
                <Input placeholder="Your name" className="transition-all focus:scale-[1.01]" />
              </Field>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input type="email" placeholder="you@email.com" className="transition-all focus:scale-[1.01]" />
              </Field>
              <Field>
                <FieldLabel>Message</FieldLabel>
                <Textarea
                  placeholder="Tell me about your project..."
                  className="min-h-32 resize-none transition-all focus:scale-[1.01]"
                />
              </Field>
            </FieldGroup>
            <Button type="submit" className="w-full group bg-brand hover:bg-brand-dark shadow-lg shadow-brand/25">
              <Send className="size-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

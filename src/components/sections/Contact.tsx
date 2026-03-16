import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Github, MessageSquare, Phone } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'udaybhanraut@gmail.com',
    href: 'mailto:udaybhanraut@gmail.com',
    color: '#3B82F6',
    description: 'Best way to reach me for opportunities',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/omprakashraut',
    href: 'https://www.linkedin.com/in/omprakashraut',
    color: '#22D3EE',
    description: 'Connect for professional networking',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Omiraut',
    href: 'https://github.com/Omiraut/',
    color: '#A78BFA',
    description: 'Explore my open source work',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+91 78419 98147',
    href: 'https://wa.me/917841998147',
    color: '#25D366',
    description: 'Chat with me on WhatsApp',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="font-mono text-xs text-primary mb-2 uppercase tracking-widest">Get In Touch</p>
          <h2 className="section-title mb-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto">
            I'm open to backend engineering roles in FinTech, payments, or API development.
            Feel free to reach out — I respond promptly.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group block bg-card border border-border rounded-xl p-4 transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <ContactCardContent item={item} />
                  </a>
                ) : (
                  <div className="bg-card border border-border rounded-xl p-4">
                    <ContactCardContent item={item} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="mailto:udaybhanraut@gmail.com"
              className={cn(buttonVariants({ size: 'lg' }), 'bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/25')}
            >
              <MessageSquare className="mr-2 w-4 h-4" />
              Send Me an Email
            </a>
            <a
              href="https://wa.me/917841998147"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), 'font-semibold border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10')}
            >
              <Phone className="mr-2 w-4 h-4" />
              WhatsApp Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactCardContent({ item }: { item: typeof contactItems[0] }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
        style={{ backgroundColor: `${item.color}20` }}
      >
        <item.icon className="w-4 h-4" style={{ color: item.color }} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-mono text-muted-foreground mb-0.5">{item.label}</p>
        <p className="text-sm font-semibold text-foreground truncate">{item.value}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Download, ArrowRight, Zap, Shield, Clock, TrendingUp } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const roles = [
  'Backend Engineer',
  'API Developer',
  'FinTech Developer',
  'Spring Boot Expert',
  "Java Developer",
]

const metrics = [
  { icon: Clock, label: '3+ Years Experience' },
  { icon: Shield, label: 'FinTech & Payments' },
  { icon: Zap, label: '99.9% Uptime Systems' },
  { icon: TrendingUp, label: 'High-Performance APIs' },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      const speed = isDeleting ? 50 : 90
      timeout = setTimeout(() => {
        setDisplayText(isDeleting
          ? currentRole.slice(0, displayText.length - 1)
          : currentRole.slice(0, displayText.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Gradient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container w-full pt-24 pb-16 relative z-10">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="mb-6 border-primary/30 text-primary bg-primary/5 font-mono text-xs px-3 py-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green mr-2 animate-pulse inline-block" />
              Available for opportunities
            </Badge>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4"
          >
            Omprakash{' '}
            <span className="gradient-text">Raut</span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 h-10 flex items-center"
          >
            <span className="text-2xl sm:text-3xl font-semibold font-mono text-accent">
              {displayText}
              <span className="ml-0.5 inline-block w-0.5 h-7 bg-accent align-middle animate-pulse" />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            Building scalable financial APIs and high-performance backend systems.
            Specialized in Java Spring Boot microservices, payment integrations, and API optimization.
          </motion.p>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {metrics.map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted border border-border text-sm text-muted-foreground"
              >
                <m.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="font-medium">{m.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/25 group"
              onClick={scrollToProjects}
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="https://github.com/Omiraut/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'border-border hover:border-primary hover:text-primary font-semibold')}
            >
              <Github className="mr-2 w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/omprakashraut"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'border-border hover:border-primary hover:text-primary font-semibold')}
            >
              <Linkedin className="mr-2 w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="#"
              download
              className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }), 'text-muted-foreground hover:text-foreground font-semibold')}
            >
              <Download className="mr-2 w-4 h-4" />
              Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground font-mono">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-border to-transparent" />
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Github, ExternalLink, Lock, Zap, Users } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const projects = [
  {
    title: 'Payment API Gateway',
    subtitle: 'FinTech · Production System',
    description:
      'Enterprise-grade payment processing API supporting UPI and IMPS transactions with a focus on high availability, security, and performance. Built to handle financial-grade transaction volumes with strict reliability requirements.',
    features: [
      { icon: Lock, text: 'JWT authentication & role-based authorization' },
      { icon: Zap, text: '20% latency reduction via payload optimization' },
      { icon: Zap, text: '99.9% uptime SLA across production environments' },
    ],
    techStack: ['Java', 'Spring Boot', 'UPI/IMPS APIs', 'JWT', 'MySQL', 'APIGEE', 'REST', 'Maven'],
    accent: '#3B82F6',
    accentBg: 'bg-blue-500/10',
    status: 'Production',
    github: 'https://github.com/Omiraut/',
  },
  {
    title: 'Fit Manager',
    subtitle: 'SaaS · Gym Management Platform',
    description:
      'Full-featured gym management SaaS application with a Spring Boot backend and React frontend. Handles member subscriptions, attendance tracking, billing, and admin dashboards for gym owners.',
    features: [
      { icon: Users, text: 'Member subscription & attendance management' },
      { icon: Zap, text: 'Admin dashboard with analytics & reports' },
      { icon: Lock, text: 'Secure payment & billing integration' },
    ],
    techStack: ['Spring Boot', 'React', 'MySQL', 'Hibernate', 'REST APIs', 'Maven', 'JWT', 'HTML/CSS'],
    accent: '#22D3EE',
    accentBg: 'bg-cyan-400/10',
    status: 'Completed',
    github: 'https://github.com/Omiraut/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-primary mb-2 uppercase tracking-widest">My Work</p>
          <h2 className="section-title mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Backend systems and applications built with production-quality standards.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl overflow-hidden card-hover flex flex-col"
            >
              {/* Top color bar */}
              <div
                className="h-1 w-full"
                style={{ backgroundColor: project.accent }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                      <Badge
                        variant="outline"
                        className="text-xs"
                        style={{
                          color: project.accent,
                          borderColor: `${project.accent}40`,
                          backgroundColor: `${project.accent}10`,
                        }}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm font-mono text-muted-foreground">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key features */}
                <ul className="space-y-2 mb-5">
                  {project.features.map((feat) => (
                    <li key={feat.text} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <feat.icon
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: project.accent }}
                      />
                      <span>{feat.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-xs font-mono font-medium border"
                      style={{
                        color: project.accent,
                        backgroundColor: `${project.accent}12`,
                        borderColor: `${project.accent}30`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'border-border hover:border-primary/50 hover:text-primary text-muted-foreground')}
                  >
                    <Github className="w-3.5 h-3.5 mr-1.5" />
                    GitHub
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), 'text-muted-foreground hover:text-foreground')}
                  >
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    Details
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

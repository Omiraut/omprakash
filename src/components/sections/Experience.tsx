import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Building2, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    company: 'Prevoyance IT Solutions',
    role: 'Java Backend Developer',
    period: 'Jan 2023 – Present',
    type: 'Full-Time',
    location: 'Nagpur, India',
    description: 'Building and maintaining FinTech payment APIs and backend infrastructure for enterprise clients.',
    highlights: [
      'Developed and maintained UPI/IMPS payment APIs achieving 99.9% uptime across all production systems',
      'Reduced API response latency by 20% through payload optimization and connection pooling strategies',
      'Optimized SQL queries and database schema, improving overall query performance by 30%',
      'Managed APIGEE API Gateway for API lifecycle management, rate limiting, and developer portals',
      'Implemented JWT-based authentication and authorization for secure API access patterns',
      'Built Python automation tools that reduced manual engineering effort by 40% team-wide',
      'Created DB schema sync utilities eliminating 90% of manual synchronization work',
      'Conducted thorough API testing using Postman and documented endpoints in internal developer portals',
    ],
    techStack: ['Java', 'Spring Boot', 'APIGEE', 'UPI/IMPS', 'MySQL', 'JWT', 'Python', 'REST APIs', 'Agile'],
    accent: '#3B82F6',
  },
  {
    company: 'RentMart IT Services',
    role: 'Java Developer',
    period: 'Jun 2022 – Dec 2022',
    type: 'Full-Time',
    location: 'Nagpur, India',
    description: 'Full-stack development and backend services for internal product and client web applications.',
    highlights: [
      'Developed backend REST APIs using Spring MVC framework for various client applications',
      'Implemented data persistence layers using Hibernate ORM and JDBC for database interactions',
      'Designed and maintained MySQL databases including schema creation and dummy data generation',
      'Performed end-to-end application testing using STLC methodology and Jira for issue tracking',
      'Collaborated with front-end developers to integrate APIs and resolve cross-cutting concerns',
      'Drafted comprehensive technical documentation for developed features and deployment procedures',
    ],
    techStack: ['Java', 'Spring MVC', 'Hibernate', 'JDBC', 'MySQL', 'Jira', 'STLC', 'HTML/CSS'],
    accent: '#22D3EE',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-primary mb-2 uppercase tracking-widest">Work History</p>
          <h2 className="section-title mb-3">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            3+ years building production-grade backend systems and payment APIs.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 bg-background hidden md:flex items-center justify-center"
                  style={{ borderColor: exp.accent }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: exp.accent }} />
                </div>

                {/* Card */}
                <div className="bg-card border border-border rounded-xl p-6 card-hover">
                  {/* Header */}
                  <div className="flex flex-wrap items-start gap-3 justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Building2 className="w-4 h-4 text-muted-foreground" />
                        <h3
                          className="text-lg font-bold text-foreground"
                          style={{ color: exp.accent === '#3B82F6' ? 'inherit' : 'inherit' }}
                        >
                          {exp.company}
                        </h3>
                        <Badge
                          variant="outline"
                          className="text-xs border-border text-muted-foreground"
                        >
                          {exp.type}
                        </Badge>
                      </div>
                      <p className="font-semibold text-foreground">{exp.role}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{exp.location}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-lg shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="font-mono text-xs">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>

                  {/* Achievement bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <ChevronRight
                          className="w-3.5 h-3.5 mt-0.5 shrink-0"
                          style={{ color: exp.accent }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

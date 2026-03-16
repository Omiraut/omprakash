import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Mail, Briefcase, GraduationCap } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const highlights = [
  { icon: Briefcase, label: 'Role', value: 'Backend & API Engineer' },
  { icon: MapPin, label: 'Location', value: 'Nagpur, Maharashtra, India' },
  { icon: Mail, label: 'Email', value: 'udaybhanraut@gmail.com' },
  { icon: GraduationCap, label: 'Degree', value: 'Bachelor of Commerce & Management' },
]

const expertise = [
  'Java Spring Boot Microservices',
  'REST API Development & Design',
  'Payment Systems (UPI / IMPS)',
  'APIGEE API Gateway',
  'SQL Performance Optimization',
  'Python Automation Tools',
  'JWT Authentication & Security',
  'Agile / SDLC Methodology',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start"
        >
          {/* Left — Photo + Info */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-primary/30 glow-blue">
                <img
                  src="/profile.jpg"
                  alt="Omprakash Raut"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-primary text-white text-xs font-mono font-bold px-3 py-1.5 rounded-lg shadow-lg shadow-primary/40">
                3+ YOE
              </div>
            </motion.div>

            {/* Quick info */}
            <div className="w-full space-y-2">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-mono">{item.label}</p>
                    <p className="text-sm text-foreground font-medium truncate">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Bio */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <p className="font-mono text-xs text-primary mb-2 uppercase tracking-widest">About Me</p>
              <h2 className="section-title">
                Backend Engineer with a Passion for{' '}
                <span className="gradient-text">Financial Systems</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a <strong className="text-foreground">Backend & API Engineer</strong> with 3+ years of hands-on
                experience building production-grade financial systems. My core expertise lies in
                Java Spring Boot microservices, REST API development, and payment platform integrations
                including <strong className="text-foreground">UPI and IMPS transaction APIs</strong>.
              </p>
              <p>
                At Prevoyance IT Solutions, I architected and maintained payment APIs achieving{' '}
                <strong className="text-foreground">99.9% uptime</strong>, reduced API latency by 20%, and
                optimized SQL performance by 30%. I also built Python automation tools that eliminated
                40% of manual processes across the team.
              </p>
              <p>
                I manage <strong className="text-foreground">APIGEE API Gateway</strong> for enterprise
                API lifecycle management, implement JWT-based authentication, and follow Agile methodologies
                in collaborative team environments. I'm passionate about building systems that are both
                highly reliable and performant.
              </p>
            </div>

            <Separator className="bg-border" />

            {/* Key Expertise */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">Key Expertise</p>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                    className="tech-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

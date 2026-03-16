import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Server, Plug, Database, Wrench, Cpu, Bot } from 'lucide-react'

const skillCategories = [
  {
    title: 'Backend',
    icon: Server,
    color: '#3B82F6',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    skills: ['Java', 'Spring Boot', 'Spring MVC', 'REST APIs', 'Microservices', 'Hibernate', 'Maven', 'J2EE'],
  },
  {
    title: 'API & Integration',
    icon: Plug,
    color: '#22D3EE',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
    skills: ['APIGEE', 'API Gateway', 'JWT Auth', 'UPI APIs', 'IMPS APIs', 'Payment APIs', 'REST', 'OAuth'],
  },
  {
    title: 'Database',
    icon: Database,
    color: '#4ADE80',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
    skills: ['SQL', 'MySQL', 'JDBC', 'Query Optimization', 'Schema Design', 'DB Performance', 'Indexing'],
  },
  {
    title: 'Tools & Methods',
    icon: Wrench,
    color: '#FBBF24',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
    skills: ['Git', 'GitHub', 'Maven', 'Postman', 'Jira', 'Agile', 'SDLC', 'STLC'],
  },
  {
    title: 'Other',
    icon: Cpu,
    color: '#A78BFA',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
    skills: ['Python', 'Automation Scripts', 'React', 'HTML/CSS', 'JavaScript', 'Agentic AI Tools'],
  },
  {
    title: 'AI Tools',
    icon: Bot,
    color: '#F472B6',
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/20',
    skills: ['Cursor', 'Codex', 'Claude', 'Komb AI', 'Amazon Q'],
  },
]

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-xl border ${category.border} bg-card p-5 card-hover`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-9 h-9 rounded-lg ${category.bg} flex items-center justify-center shrink-0`}>
          <category.icon className="w-4.5 h-4.5" style={{ color: category.color, width: 18, height: 18 }} />
        </div>
        <h3 className="font-semibold text-foreground text-sm">{category.title}</h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-0.5 rounded-md text-xs font-mono font-medium border"
            style={{
              color: category.color,
              backgroundColor: `${category.color}12`,
              borderColor: `${category.color}30`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-primary mb-2 uppercase tracking-widest">Technical Skills</p>
          <h2 className="section-title mb-3">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build robust, scalable backend systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, TrendingDown, Zap, Bot, Database } from 'lucide-react'

const achievements = [
  {
    icon: Shield,
    metric: '99.9',
    unit: '%',
    suffix: ' Uptime',
    label: 'Payment API Availability',
    description: 'Production payment APIs maintained with enterprise-grade reliability',
    color: '#4ADE80',
    bg: 'bg-green-400/8',
    border: 'border-green-400/20',
  },
  {
    icon: TrendingDown,
    metric: '30',
    unit: '%',
    suffix: ' Faster',
    label: 'SQL Performance Gain',
    description: 'Database query optimization and indexing improvements across core systems',
    color: '#3B82F6',
    bg: 'bg-blue-500/8',
    border: 'border-blue-500/20',
  },
  {
    icon: Zap,
    metric: '20',
    unit: '%',
    suffix: ' Reduced',
    label: 'API Latency Reduction',
    description: 'Payload optimization and connection pooling for faster API responses',
    color: '#22D3EE',
    bg: 'bg-cyan-400/8',
    border: 'border-cyan-400/20',
  },
  {
    icon: Bot,
    metric: '40',
    unit: '%',
    suffix: ' Less Effort',
    label: 'Automation Efficiency',
    description: 'Python automation scripts reducing team manual workload significantly',
    color: '#FBBF24',
    bg: 'bg-amber-400/8',
    border: 'border-amber-400/20',
  },
  {
    icon: Database,
    metric: '90',
    unit: '%',
    suffix: ' Eliminated',
    label: 'Manual DB Work Reduced',
    description: 'DB schema sync tool built to replace repetitive manual synchronization',
    color: '#A78BFA',
    bg: 'bg-violet-400/8',
    border: 'border-violet-400/20',
  },
]

function CountUp({ end, duration = 2000, isVisible }: { end: number; duration?: number; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return <>{count}</>
}

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="section-padding bg-card/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-primary mb-2 uppercase tracking-widest">Impact</p>
          <h2 className="section-title mb-3">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Measurable results from production systems and engineering improvements.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-xl border ${item.border} ${item.bg} p-5 card-hover relative overflow-hidden ${
                i === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Subtle glow bg */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-30 pointer-events-none"
                style={{ backgroundColor: item.color }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>

                {/* Metric */}
                <div className="mb-2">
                  <span
                    className="text-5xl font-bold font-mono leading-none"
                    style={{ color: item.color }}
                  >
                    <CountUp end={parseFloat(item.metric)} isVisible={isInView} />
                    {item.unit}
                  </span>
                  <span className="text-xl font-semibold text-foreground ml-1">{item.suffix}</span>
                </div>

                {/* Label */}
                <p className="text-sm font-semibold text-foreground mb-1">{item.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

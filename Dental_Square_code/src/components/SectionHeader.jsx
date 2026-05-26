import { motion } from 'framer-motion'

function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <motion.div
      className={`mx-auto max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-3">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-slate-600">{text}</p>}
    </motion.div>
  )
}

export default SectionHeader

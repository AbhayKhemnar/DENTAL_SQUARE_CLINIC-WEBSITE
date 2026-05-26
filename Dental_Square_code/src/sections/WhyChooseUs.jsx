import { motion } from 'framer-motion'
import { whyChooseUs } from '../data/clinic'

function WhyChooseUs() {
  return (
    <section className="bg-blue-700 py-14 text-white sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-widest text-blue-100">Why choose us</p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal sm:text-5xl">
            Designed around comfort, clarity, and clinical confidence.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => (
            <motion.article
              className="rounded-md border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:bg-white hover:text-slate-950"
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <item.icon className="text-3xl text-blue-100" />
              <h3 className="mt-5 text-xl font-extrabold">{item.title}</h3>
              <p className="mt-3 leading-7 text-current opacity-85">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

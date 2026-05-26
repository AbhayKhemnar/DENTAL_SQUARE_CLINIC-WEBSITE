import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { services } from '../data/clinic'

function Services() {
  return (
    <section id="services" className="bg-slate-50 py-14 sm:py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Dental services"
          title="Complete care for everyday and advanced dental needs."
          text="From preventive checkups to cosmetic dentistry, each service is presented with clear consultation and practical next steps."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              className="group rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/70"
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <div className="flex h-13 w-13 items-center justify-center rounded-md bg-blue-50 text-2xl text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                <service.icon />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-slate-950">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

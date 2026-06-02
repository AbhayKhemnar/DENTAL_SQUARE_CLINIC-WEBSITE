import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { services } from '../data/clinic'

function Services() {
  return (
    <section id="services" className="bg-slate-50 py-14 sm:py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Dental services"
          title="Dental services for healthy, confident smiles."
          text="From preventive dental checkups to root canal treatment in Moshi, dental implants, braces, teeth whitening, and smile designing, care is planned around comfort and long-term oral health."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              className="group rounded-md border border-amber-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-100/70"
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <div className="flex h-13 w-13 items-center justify-center rounded-md bg-amber-50 text-2xl text-amber-700 transition group-hover:bg-amber-700 group-hover:text-white">
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

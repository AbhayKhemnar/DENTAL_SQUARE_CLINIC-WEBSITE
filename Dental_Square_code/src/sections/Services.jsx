import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { services } from '../data/clinic'

function Services() {
  return (
    <section id="services" className="bg-white py-14 sm:py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Dental services"
          title="Dental services for healthy, confident smiles."
          text="From preventive dental checkups to root canal treatment in Moshi, dental implants, braces, teeth whitening, and smile designing, care is planned around comfort and long-term oral health."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              className="group relative min-h-[310px] overflow-hidden rounded-md border border-amber-200 bg-slate-900 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-900/20"
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover' }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/55 transition duration-500 group-hover:bg-black/45" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-amber-950/25" aria-hidden="true" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/90 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full min-h-[310px] flex-col justify-end p-5 text-white sm:p-6">
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-md border border-amber-200/30 bg-amber-500/20 text-2xl text-amber-100 shadow-lg shadow-amber-950/20 backdrop-blur-md transition duration-300 group-hover:border-amber-200/80 group-hover:bg-amber-600/85 group-hover:text-white">
                  <service.icon />
                </div>
                <div className="rounded-md border border-amber-100/20 bg-white/12 p-4 shadow-xl backdrop-blur-md transition duration-300 group-hover:border-amber-200/60 group-hover:bg-amber-50/15">
                  <h3 className="text-xl font-extrabold leading-tight text-white drop-shadow">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-100 drop-shadow-sm">{service.text}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

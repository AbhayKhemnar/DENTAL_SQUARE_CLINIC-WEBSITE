import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { contactActions } from '../data/clinic'

function Contact() {
  return (
    <section id="contact" className="bg-white py-14 sm:py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Book your visit or ask a question."
          text="Use the quickest option below to call, WhatsApp, email, or open directions to the clinic."
        />
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {contactActions.map((action, index) => (
            <motion.a
              className="focus-ring group rounded-md border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-700 hover:text-white hover:shadow-xl"
              href={action.href}
              key={action.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <span className="mx-auto flex h-13 w-13 items-center justify-center rounded-md bg-blue-50 text-2xl text-blue-700 transition group-hover:bg-white group-hover:text-blue-700">
                <action.icon />
              </span>
              <span className="mt-5 block text-lg font-extrabold">{action.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact

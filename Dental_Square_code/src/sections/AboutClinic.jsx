import { motion } from 'framer-motion'
import { FaClinicMedical, FaRegSmile, FaShieldAlt } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import { equipmentImage } from '../data/assets'

const highlights = [
  { title: 'Modern equipment', text: 'Digital-friendly workflows and advanced chairside support for everyday dentistry.', icon: FaClinicMedical },
  { title: 'Experienced care', text: 'Clear consultation, treatment planning, and follow-up guidance at every step.', icon: FaRegSmile },
  { title: 'Patient focused', text: 'Comfort-led appointments with attention to hygiene, safety, and trust.', icon: FaShieldAlt },
]

function AboutClinic() {
  return (
    <section id="about" className="bg-slate-50 py-14 sm:py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About the clinic"
          title="A clean, modern space for complete dental care."
          text="Dental Square brings multi-speciality dental services and aesthetic care together in Moshi, with a focus on practical treatment plans and a reassuring clinical experience."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="overflow-hidden rounded-md bg-white shadow-xl shadow-slate-200/70"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
          >
            <img
              className="h-[300px] w-full object-cover sm:h-full sm:min-h-[320px]"
              src={equipmentImage?.src}
              alt="Modern clinic equipment at Dental Square"
              loading="lazy"
            />
          </motion.div>
          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <motion.article
                className="rounded-md border border-slate-200 bg-white p-6 shadow-sm"
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-blue-50 text-xl text-blue-700">
                    <item.icon />
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-950">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutClinic

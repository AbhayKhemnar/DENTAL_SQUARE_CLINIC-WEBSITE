import { motion } from 'framer-motion'
import { FaCertificate, FaUserMd } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import { clinic } from '../data/clinic'
import { doctorImage } from '../data/assets'

function AboutDoctor() {
  return (
    <section id="about-doctor" className="bg-gradient-to-br from-white via-slate-50 to-blue-50/60 py-16 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About doctor"
          title="Care led by Dr. Prradnya Uttarwar."
          text="Meet the dentist behind Perfect Smile Dental Clinic, offering patient-focused dental care in Moshi with clear treatment planning and comfortable appointments."
        />
        <div className="mt-12 grid items-center gap-8 rounded-2xl border border-slate-200/80 bg-white/85 p-4 shadow-xl shadow-slate-200/70 backdrop-blur sm:gap-10 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:p-10">
          <motion.div
            className="group overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-3 shadow-xl shadow-slate-300/50 transition-all duration-500 hover:scale-[1.03] hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-200/60"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex min-h-[360px] items-center justify-center overflow-hidden rounded-xl bg-white sm:min-h-[430px]">
              <img
                className="max-h-[540px] w-full object-contain object-center transition-all duration-500 group-hover:scale-[1.02]"
                src={doctorImage?.src}
                alt="Dr Prradnya Uttarwar dentist in Moshi Pune"
                loading="lazy"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-blue-700">Principal Dentist</p>
            <h3 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {clinic.doctor}
            </h3>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Dr. Prradnya Uttarwar provides thoughtful dental consultations, preventive care, and treatment planning for patients looking for a dentist in Moshi, PCMC, and Pune.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="group/card rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-blue-50/80 p-6 shadow-md shadow-slate-200/70 transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/80">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-xl text-white shadow-lg shadow-blue-700/20 transition-all duration-500 group-hover/card:scale-110">
                    <FaCertificate />
                  </span>
                  <div>
                    <h4 className="font-extrabold text-slate-950">Qualification</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{clinic.qualification}</p>
                  </div>
                </div>
              </div>
              <div className="group/card rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-md shadow-slate-200/70 transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/80">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-xl text-white shadow-lg shadow-slate-900/20 transition-all duration-500 group-hover/card:scale-110">
                    <FaUserMd />
                  </span>
                  <div>
                    <h4 className="font-extrabold text-slate-950">Experience</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{clinic.experience}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutDoctor

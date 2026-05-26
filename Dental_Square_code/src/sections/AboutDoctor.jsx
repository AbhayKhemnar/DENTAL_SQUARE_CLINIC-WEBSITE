import { motion } from 'framer-motion'
import { FaCertificate, FaUserMd } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import { clinic } from '../data/clinic'
import { doctorImage } from '../data/assets'

function AboutDoctor() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About doctor"
          title="Care led by Dr. Sayali Kamble."
          text="A professional profile section built for clear trust signals, with placeholders ready for exact qualifications and years of experience."
        />
        <div className="mt-10 grid items-center gap-6 rounded-md border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/70 sm:mt-12 sm:gap-8 sm:p-5 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <motion.div
            className="overflow-hidden rounded-md bg-blue-50"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            <img
              className="h-[320px] w-full object-cover sm:h-[360px] lg:h-[460px]"
              src={doctorImage?.src}
              alt="Female dentist representing Dr. Sayali Kamble"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-eyebrow">Principal Dentist</p>
            <h3 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">{clinic.doctor}</h3>
            <p className="mt-5 leading-8 text-slate-600">
              Dr. Sayali Kamble provides thoughtful dental consultations, preventive care, and treatment planning for patients across Moshi and Pimpri-Chinchwad.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md bg-slate-50 p-5">
                <FaCertificate className="text-2xl text-blue-700" />
                <h4 className="mt-4 font-extrabold text-slate-950">Qualification</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">BDS , MBA - HAHM , FFO IFSCFO </p>
              </div>
              <div className="rounded-md bg-slate-50 p-5">
                <FaUserMd className="text-2xl text-blue-700" />
                <h4 className="mt-4 font-extrabold text-slate-950">Experience</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">5+ years experience </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutDoctor

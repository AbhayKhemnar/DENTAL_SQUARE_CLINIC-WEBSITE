import { motion } from 'framer-motion'
import { FaCalendarCheck, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import Button from '../components/Button'
import { clinic } from '../data/clinic'
import { clinicImages, galleryImages } from '../data/assets'

const heroImage = galleryImages.find((image) => image.name === '8')?.src || clinicImages[0]?.src

function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-white">
      <div className="section-shell grid items-center gap-9 py-10 sm:py-12 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow">Dental Clinic in Moshi, Pune</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-[1.08] tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
            Perfect Smile Dental Clinic
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Visit {clinic.name}, a family dental clinic in Moshi led by {clinic.doctor}, for root canal treatment, teeth whitening, dental implants, braces, smile designing, and general dental care.
          </p>

          <div className="mt-6 grid max-w-xl gap-3 rounded-md border border-amber-100 bg-amber-50/70 p-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700">Doctor</p>
              <p className="mt-1 font-bold text-slate-950">{clinic.doctor}</p>
              <p className="mt-1 text-sm font-semibold text-slate-600">{clinic.qualification}</p>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700">Clinic Timing</p>
              <p className="mt-1 font-bold text-slate-950">{clinic.hours}</p>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Button className="w-full sm:w-auto" href={clinic.whatsappHref} icon={FaCalendarCheck}>Book Appointment</Button>
            <Button className="w-full sm:w-auto" href={clinic.whatsappHref} variant="secondary" icon={FaWhatsapp}>WhatsApp Now</Button>
          </div>

          <a className="mt-6 inline-flex items-start gap-3 text-sm font-semibold leading-6 text-slate-600 hover:text-amber-700" href={clinic.mapsHref} target="_blank" rel="noreferrer">
            <FaMapMarkerAlt className="mt-1 shrink-0 text-amber-700" />
            <span>{clinic.address}</span>
          </a>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          <div className="absolute -left-5 top-8 hidden h-24 w-24 rounded-md bg-amber-100 sm:block" />
          <div className="absolute -right-4 bottom-10 hidden h-32 w-32 rounded-md bg-slate-100 sm:block" />
          <div className="relative overflow-hidden rounded-md border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-300/50">
            {heroImage && (
              <img
                className="h-[300px] w-full object-cover sm:h-[430px] lg:h-[520px]"
                src={heroImage}
                alt="Perfect Smile Dental Clinic Moshi Pune"
                loading="eager"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-slate-950/82 p-4 text-white backdrop-blur sm:p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-200 sm:text-sm">Best Dentist in Moshi</p>
              <p className="mt-1 text-xl font-black sm:mt-2 sm:text-2xl">Perfect Smile Dental Clinic</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

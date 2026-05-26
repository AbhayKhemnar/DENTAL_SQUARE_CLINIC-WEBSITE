import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaSpa } from 'react-icons/fa'
import Button from '../components/Button'
import { clinic } from '../data/clinic'
import { hydraImages } from '../data/assets'

const benefits = ['Deep cleansing', 'Skin rejuvenation', 'Intense hydration', 'Refreshed glow']

function HydraFacial() {
  const [active, setActive] = useState(0)
  const images = useMemo(() => (hydraImages.length ? hydraImages : []), [])
  const currentImage = images[active]?.src

  const move = (direction) => {
    setActive((value) => (value + direction + images.length) % images.length)
  }

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-eyebrow">Premium aesthetic care</p>
          <h2 className="section-title mt-3">Medicated Hydra Facial Treatment</h2>
          <p className="mt-5 leading-8 text-slate-600">
            A premium skin-care service focused on cleansing, exfoliation, hydration, and visible freshness using dedicated hydra facial equipment at Dental Square.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div className="flex items-center gap-3 rounded-md bg-blue-50 p-4 font-bold text-slate-900" key={benefit}>
                <FaSpa className="text-blue-700" />
                {benefit}
              </div>
            ))}
          </div>
          <Button className="mt-8 w-full sm:w-auto" href={clinic.whatsappHref}>Ask About Hydra Facial</Button>
        </motion.div>

        <motion.div
          className="rounded-md bg-slate-950 p-4 shadow-2xl shadow-slate-300/60"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <div className="relative overflow-hidden rounded-md bg-slate-100">
            {currentImage && (
              <img
                className="h-[310px] w-full object-cover sm:h-[440px]"
                src={currentImage}
                alt="Hydra facial equipment at Dental Square"
                loading="lazy"
              />
            )}
            {images.length > 1 && (
              <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
                <button className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-950" type="button" onClick={() => move(-1)} aria-label="Previous hydra facial image">
                  <FaChevronLeft />
                </button>
                <button className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-950" type="button" onClick={() => move(1)} aria-label="Next hydra facial image">
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>
          {images.length > 1 && (
            <div className="mt-4 grid grid-cols-2 gap-3">
              {images.map((image, index) => (
                <button
                  className={`h-16 overflow-hidden rounded-md border-2 ${active === index ? 'border-blue-400' : 'border-transparent'}`}
                  type="button"
                  key={image.src}
                  onClick={() => setActive(index)}
                  aria-label={`Show hydra facial image ${index + 1}`}
                >
                  <img className="h-full w-full object-cover" src={image.src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default HydraFacial

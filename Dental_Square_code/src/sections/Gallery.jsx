import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import { galleryImages } from '../data/assets'

function Gallery() {
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    if (!activeImage) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveImage(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeImage])

  return (
    <section id="gallery" className="bg-slate-50 py-14 sm:py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Gallery"
          title="Smile gallery."
          text="Treatment result images from the clinic gallery are presented as clean preview cards."
        />
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.button
              className="focus-ring block overflow-hidden rounded-md bg-white p-3 text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-100/70"
              type="button"
              key={image.src}
              onClick={() => setActiveImage(image)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <img
                className="aspect-[4/3] w-full rounded-md object-cover"
                src={image.src}
                alt="Perfect Smile Dental Clinic Moshi Pune"
                loading="lazy"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="focus-ring absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950"
            type="button"
            aria-label="Close gallery preview"
            onClick={() => setActiveImage(null)}
          >
            <FaTimes />
          </button>
          <img
            className="max-h-[82vh] max-w-[94vw] rounded-md object-contain sm:max-h-[86vh] sm:max-w-[95vw]"
            src={activeImage.src}
            alt="Perfect Smile Dental Clinic Moshi Pune gallery preview"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Gallery

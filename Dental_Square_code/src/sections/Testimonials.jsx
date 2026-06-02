import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import { testimonials } from '../data/clinic'

function Testimonials() {
  const scrollerRef = useRef(null)

  const scrollReviews = (direction) => {
    scrollerRef.current?.scrollBy({
      left: direction * 340,
      behavior: 'smooth',
    })
  }

  return (
    <section id="reviews" className="bg-white py-14 sm:py-20">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Google reviews"
            title="Patient reviews from Google Maps."
            text="Use the arrows to browse extracted Google reviews with reviewer name, rating, and review text."
          />
          <div className="flex gap-3">
            <button
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-md border border-amber-200 bg-white text-amber-700 transition hover:bg-amber-50"
              type="button"
              aria-label="Scroll reviews left"
              onClick={() => scrollReviews(-1)}
            >
              <FaArrowLeft />
            </button>
            <button
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-md border border-amber-200 bg-white text-amber-700 transition hover:bg-amber-50"
              type="button"
              aria-label="Scroll reviews right"
              onClick={() => scrollReviews(1)}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:thin] sm:mt-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="min-w-[280px] snap-start rounded-md border border-slate-200 bg-white p-6 shadow-sm sm:min-w-[360px]"
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <FaStar key={starIndex} />
                ))}
              </div>
              <p className="mt-5 leading-8 text-slate-600">"{testimonial.review}"</p>
              <p className="mt-5 font-extrabold text-slate-950">{testimonial.name}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

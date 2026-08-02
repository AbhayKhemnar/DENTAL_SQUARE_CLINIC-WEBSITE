import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight, FaGoogle, FaStar } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import { clinic, testimonials } from '../data/clinic'

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
            text="Browse patient feedback from Google Maps, or share your own experience with Perfect Smile Dental Clinic."
          />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-amber-700 px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-amber-700/20 transition hover:-translate-y-0.5 hover:bg-amber-800 hover:shadow-xl"
              href={clinic.reviewHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Write a Google review for Perfect Smile Dental Clinic"
            >
              <FaGoogle />
              Write a Review
            </a>
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
        </div>

        <div className="mt-8 rounded-md border border-amber-200 bg-amber-50/70 px-5 py-4 text-sm font-semibold leading-6 text-amber-900">
          New reviews submitted on Google Maps can be added to this website review slider during the next site update.
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

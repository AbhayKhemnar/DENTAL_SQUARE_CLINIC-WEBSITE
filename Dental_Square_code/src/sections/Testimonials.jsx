import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import { testimonials } from '../data/clinic'

function Testimonials() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Patient testimonials"
          title="Warm words from sample patient stories."
          text="These testimonial cards are ready to replace with verified patient reviews whenever available."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="rounded-md border border-slate-200 bg-white p-6 shadow-sm"
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
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

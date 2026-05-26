import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { clinic } from '../data/clinic'

function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 sm:bottom-5 sm:right-5 sm:gap-3">
      <a
        className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl text-white shadow-xl shadow-green-900/20 transition hover:bg-green-600 sm:h-13 sm:w-13"
        href={clinic.whatsappHref}
        aria-label="WhatsApp Dental Square"
      >
        <FaWhatsapp />
      </a>
      <a
        className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-lg text-white shadow-xl shadow-blue-900/20 transition hover:bg-blue-800 sm:h-13 sm:w-13"
        href={clinic.phoneHref}
        aria-label="Call Dental Square"
      >
        <FaPhoneAlt />
      </a>
    </div>
  )
}

export default FloatingButtons

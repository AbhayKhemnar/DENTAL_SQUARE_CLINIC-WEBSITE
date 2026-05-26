import {
  FaAward,
  FaBaby,
  FaBrush,
  FaClinicMedical,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaRegSmile,
  FaShieldAlt,
  FaStar,
  FaTeeth,
  FaTooth,
  FaUserMd,
  FaWhatsapp,
  FaXRay,
} from 'react-icons/fa'
import { MdHealthAndSafety, MdOutlineCleanHands } from 'react-icons/md'

export const clinic = {
  name: 'Dental Square',
  doctor: 'Dr. Sayali Kamble',
  email: 'Drsayalikamble0@gmail.com',
  phone: '+91 7620398832',
  phoneHref: 'tel:+917620398832',
  whatsappHref: 'https://wa.me/917620398832',
  mapsHref: 'https://share.google/8V6zzr6w3VfRdkQI5',
  address:
    'Beside Gurukul Coaching Classes, Sant Nagar, Sector Number 4, Moshi, Pune, Pimpri-Chinchwad, Maharashtra 412105',
  hours: 'Monday to Saturday: 9:00 AM - 2:00 PM, 5:00 PM - 9:00 PM. Sunday by appointment only.',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  { title: 'Dental Checkup', text: 'Routine diagnosis, prevention planning, and oral health guidance.', icon: FaTooth },
  { title: 'Teeth Cleaning', text: 'Ultrasonic scaling and polishing for cleaner, healthier gums.', icon: MdOutlineCleanHands },
  { title: 'Teeth Whitening', text: 'Aesthetic whitening support for a brighter, confident smile.', icon: FaRegSmile },
  { title: 'Root Canal Treatment', text: 'Tooth-saving care planned for comfort and long-term function.', icon: FaXRay },
  { title: 'Dental Implants', text: 'Replacement options for missing teeth with natural-looking outcomes.', icon: FaTeeth },
  { title: 'Braces & Aligners', text: 'Alignment care for improved bite, function, and smile symmetry.', icon: FaBrush },
  { title: 'Tooth Extraction', text: 'Careful extractions with clear after-care instructions.', icon: MdHealthAndSafety },
  { title: 'Pediatric Dentistry', text: 'Gentle dental visits designed for children and growing smiles.', icon: FaBaby },
  { title: 'Cosmetic Dentistry', text: 'Smile designing, tooth-colored fillings, and aesthetic restorations.', icon: FaStar },
]

export const whyChooseUs = [
  { title: 'Experienced Doctor', text: 'Care guided by Dr. Sayali Kamble with a calm, patient-first approach.', icon: FaUserMd },
  { title: 'Advanced Technology', text: 'Modern equipment for diagnosis, treatment, and hydra facial care.', icon: FaClinicMedical },
  { title: 'Hygiene Standards', text: 'Clean clinical workflows and strong sterilization discipline.', icon: FaShieldAlt },
  { title: 'Affordable Treatment', text: 'Clear treatment options with practical plans for families.', icon: FaAward },
  { title: 'Personalized Care', text: 'Treatment plans shaped around comfort, goals, and oral health needs.', icon: FaRegSmile },
  { title: 'Convenient Location', text: 'Easy to reach clinic in Sant Nagar, Sector Number 4, Moshi.', icon: FaMapMarkedAlt },
]

export const testimonials = [
  {
    name: 'Priya S.',
    rating: 5,
    review: 'The clinic is clean, welcoming, and the explanation before treatment made me feel comfortable.',
  },
  {
    name: 'Rahul P.',
    rating: 5,
    review: 'Very professional dental care. My scaling appointment was smooth and handled with patience.',
  },
  {
    name: 'Neha K.',
    rating: 5,
    review: 'Loved the attention to hygiene and the calm approach. The hydra facial service felt premium.',
  },
]

export const contactActions = [
  { label: 'Call Now', href: clinic.phoneHref, icon: FaPhoneAlt },
  { label: 'WhatsApp Now', href: clinic.whatsappHref, icon: FaWhatsapp },
  { label: 'Email Us', href: `mailto:${clinic.email}`, icon: FaEnvelope },
  { label: 'Directions', href: clinic.mapsHref, icon: FaMapMarkedAlt },
]

export const socialLinks = [
  { label: 'Instagram', href: '#home', icon: FaInstagram },
  { label: 'Facebook', href: '#home', icon: FaFacebookF },
]

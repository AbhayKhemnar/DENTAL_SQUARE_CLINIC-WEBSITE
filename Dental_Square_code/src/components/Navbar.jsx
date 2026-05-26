import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { clinic, navLinks } from '../data/clinic'
import { brandLogo } from '../data/assets'
import Button from './Button'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="section-shell flex min-h-16 items-center justify-between gap-3 py-2 sm:min-h-20 sm:gap-4">
        <a className="focus-ring flex min-w-0 items-center gap-2 rounded-md sm:gap-3" href="#home" aria-label="Dental Square home">
          <img className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12" src={brandLogo} alt="Dental Square logo" />
          <span className="min-w-0 leading-tight">
            <span className="block text-sm font-black uppercase tracking-wide text-slate-950 sm:text-lg">
              Dental Square
            </span>
            <span className="hidden text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700 sm:block">
              Dental Clinic
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="text-sm font-bold text-slate-700 transition hover:text-blue-700" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href={clinic.whatsappHref}>Book Appointment</Button>
        </div>

        <button
          className="focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 text-slate-900 sm:h-11 sm:w-11 lg:hidden"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="rounded-md px-2 py-3 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href={clinic.whatsappHref} className="mt-2 w-full">
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

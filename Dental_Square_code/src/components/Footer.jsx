import { clinic, navLinks, services } from '../data/clinic'
import { brandLogo } from '../data/assets'

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="section-shell grid gap-9 py-12 sm:gap-10 sm:py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">
        <div>
          <img className="h-14 w-auto" src={brandLogo} alt="Perfect Smile Dental Clinic logo" />
          <p className="mt-5 max-w-sm text-sm leading-7">
            Perfect Smile Dental Clinic provides dental care in Moshi, Pune, including root canal treatment, teeth whitening, dental implants, braces, smile designing, and family dentistry.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Quick Links</h3>
          <div className="mt-5 grid gap-3">
            {navLinks.map((link) => (
              <a className="text-sm hover:text-white" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Services</h3>
          <div className="mt-5 grid gap-3">
            {services.slice(0, 6).map((service) => (
              <a className="text-sm hover:text-white" href="#services" key={service.title}>
                {service.title}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Contact</h3>
          <div className="mt-5 space-y-3 text-sm leading-7">
            <p>{clinic.address}</p>
            <a className="block hover:text-white" href={clinic.phoneHref}>{clinic.phone}</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        Copyright {new Date().getFullYear()} Perfect Smile Dental Clinic. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

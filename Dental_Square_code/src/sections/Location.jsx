import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import { clinic } from '../data/clinic'

const details = [
  { label: 'Address', value: clinic.address, icon: FaMapMarkerAlt },
  { label: 'Phone', value: clinic.phone, href: clinic.phoneHref, icon: FaPhoneAlt },
  { label: 'Email', value: clinic.email, href: `mailto:${clinic.email}`, icon: FaEnvelope },
  { label: 'Working Hours', value: clinic.hours, icon: FaClock },
]

function Location() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Location"
          title="Visit Dental Square in Moshi."
          text="Find us beside Gurukul Coaching Classes in Sant Nagar, Sector Number 4."
        />
        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
            <iframe
              title="Dental Square location map"
              className="h-[320px] w-full sm:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Beside%20Gurukul%20Coaching%20Classes%2C%20Sant%20Nagar%2C%20Sector%20Number%204%2C%20Moshi%2C%20Pune%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20412105&output=embed"
            />
          </div>
          <div className="grid gap-4">
            {details.map((detail) => (
              <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm" key={detail.label}>
                <div className="flex gap-3 sm:gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                    <detail.icon />
                  </span>
                  <div className="min-w-0">
                    <p className="font-extrabold text-slate-950">{detail.label}</p>
                    {detail.href ? (
                      <a className="mt-1 block break-words leading-7 text-slate-600 hover:text-blue-700" href={detail.href}>
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 leading-7 text-slate-600">{detail.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location

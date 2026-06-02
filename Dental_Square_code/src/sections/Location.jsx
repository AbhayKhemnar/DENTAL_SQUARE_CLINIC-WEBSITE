import { FaClock, FaGoogle, FaMapMarkerAlt, FaPhoneAlt, FaStar } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import { clinic } from '../data/clinic'

const details = [
  { label: 'Address', value: clinic.address, icon: FaMapMarkerAlt },
  { label: 'Phone', value: clinic.phone, href: clinic.phoneHref, icon: FaPhoneAlt },
  { label: 'Working Hours', value: clinic.hours, icon: FaClock },
]

function Location() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Location"
          title="Visit Perfect Smile Dental Clinic in Moshi."
          text="Find the clinic on Alandi - Moshi Road and use the embedded Google Map for directions."
        />
        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
            <iframe
              title="Perfect Smile Dental Clinic location map"
              className="h-[320px] w-full sm:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={clinic.mapEmbed}
            />
            <div className="flex flex-col gap-4 border-t border-amber-100 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-amber-50 text-2xl text-amber-700">
                  <FaGoogle />
                </span>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-wider text-amber-700">Google Maps Rating</p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-2xl font-black text-slate-950">{clinic.rating}</span>
                    <span className="flex gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </span>
                  </div>
                </div>
              </div>
              <a
                className="focus-ring inline-flex items-center justify-center rounded-md bg-amber-700 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-amber-800"
                href={clinic.mapsHref}
                target="_blank"
                rel="noreferrer"
              >
                View on Google Maps
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            {details.map((detail) => (
              <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm" key={detail.label}>
                <div className="flex gap-3 sm:gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-amber-50 text-amber-700">
                    <detail.icon />
                  </span>
                  <div className="min-w-0">
                    <p className="font-extrabold text-slate-950">{detail.label}</p>
                    {detail.href ? (
                      <a className="mt-1 block break-words leading-7 text-slate-600 hover:text-amber-700" href={detail.href}>
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

import { Megaphone, PenTool, BarChart3, Camera } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Campaign Strategy',
    desc: 'From research to rollout — launch ideas that drive awareness and action.'
  },
  {
    icon: PenTool,
    title: 'Brand Voice & Messaging',
    desc: 'Find the words people remember. Positioning and tone that feel unmistakably you.'
  },
  {
    icon: BarChart3,
    title: 'Growth & Funnels',
    desc: 'Email, landing pages, and automations that turn interest into customers.'
  },
  {
    icon: Camera,
    title: 'Content & Social',
    desc: 'Short-form video, carousels, and content systems that scale.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Services</h2>
          <p className="mt-3 text-gray-600">Practical strategies, creative execution, measurable growth.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="h-12 w-12 rounded-xl bg-pink-50 text-pink-600 grid place-items-center mb-4 group-hover:scale-105 transition">
                <Icon size={22} />
              </div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const items = [
  {
    tag: 'DTC',
    title: 'Glow Skincare Launch',
    result: '3.1x ROAS in 30 days',
    color: 'from-rose-100 to-rose-200'
  },
  {
    tag: 'SaaS',
    title: 'Creator Analytics Rebrand',
    result: '+42% signups after repositioning',
    color: 'from-purple-100 to-purple-200'
  },
  {
    tag: 'Education',
    title: 'Cohort Course Funnel',
    result: '38% lift in enrollment',
    color: 'from-pink-100 to-pink-200'
  },
  {
    tag: 'Local',
    title: 'Studio Opening Campaign',
    result: 'Sold out weekend launch',
    color: 'from-fuchsia-100 to-fuchsia-200'
  }
]

export default function Portfolio() {
  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Selected Work</h2>
            <p className="mt-3 text-gray-600">A peek into launches, rebrands, and growth systems I’ve shipped.</p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm hover:border-gray-400">Request full portfolio</a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.title} className={`group rounded-2xl bg-gradient-to-br ${item.color} p-5 shadow-sm ring-1 ring-black/5 hover:shadow-md transition` }>
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span className="rounded-full bg-white/70 px-2 py-1">{item.tag}</span>
                <span className="opacity-70">Case Study</span>
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-700">{item.result}</p>
              <div className="mt-6 h-28 rounded-xl bg-white/60 ring-1 ring-white/60 backdrop-blur-sm grid place-items-center text-gray-500 text-sm group-hover:scale-[1.02] transition">
                Visual preview
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

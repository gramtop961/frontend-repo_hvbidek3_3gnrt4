import { useEffect, useState } from 'react'
import { Rocket, Star, Mail } from 'lucide-react'

export default function HeroParallax() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const layer = (multiplier) => ({ transform: `translateY(${-offset * multiplier}px)` })

  return (
    <header className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-pink-50 via-white to-white" id="home">
      {/* Top navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-10 py-5">
        <div className="flex items-center gap-2 font-semibold text-pink-700">
          <div className="h-8 w-8 rounded-full bg-pink-600 text-white flex items-center justify-center shadow">MG</div>
          <span>Marketing Girl</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#services" className="hover:text-pink-600">Services</a>
          <a href="#work" className="hover:text-pink-600">Work</a>
          <a href="#contact" className="hover:text-pink-600">Contact</a>
        </div>
      </nav>

      {/* Decorative parallax layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-pink-200 blur-3xl opacity-60"
          style={layer(0.05)}
        />
        <div
          className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-purple-200 blur-3xl opacity-60"
          style={layer(0.08)}
        />
        <div
          className="absolute bottom-[-120px] left-1/3 h-[420px] w-[420px] rounded-full bg-rose-200 blur-3xl opacity-60"
          style={layer(0.03)}
        />
        {/* Stars */}
        <div className="absolute inset-0" style={layer(0.12)}>
          <div className="absolute left-10 top-32 text-pink-500"><Star size={18} /></div>
          <div className="absolute left-1/2 top-16 text-purple-500"><Star size={14} /></div>
          <div className="absolute right-10 top-40 text-rose-500"><Star size={16} /></div>
          <div className="absolute right-1/3 bottom-24 text-pink-500"><Star size={12} /></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-6 md:px-10 w-full grid md:grid-cols-2 gap-8 items-center">
          <div style={layer(0.02)}>
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-pink-700 shadow-sm">
              <Rocket size={14} /> Elevating brands with strategy + storytelling
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Hi, I’m <span className="text-pink-600">Jules</span>, your
              <br className="hidden md:block" />
              Marketing Girl.
            </h1>
            <p className="mt-4 text-gray-600 md:text-lg max-w-xl">
              I help startups and creators grow with magnetic positioning, campaigns that convert, and content that people actually want to share.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-pink-600 text-white px-5 py-2.5 shadow hover:bg-pink-700 transition">
                <Mail size={16} /> Book a call
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-gray-800 hover:border-gray-400 transition">
                See my work
              </a>
            </div>
          </div>

          <div className="relative" style={layer(0.05)}>
            <div className="mx-auto aspect-square w-72 md:w-96 rounded-3xl bg-gradient-to-br from-pink-100 via-white to-purple-100 shadow-xl ring-1 ring-pink-100/60 overflow-hidden">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="text-8xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-purple-500 leading-none">MG</div>
                  <p className="mt-2 text-sm text-gray-500">Brand • Content • Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

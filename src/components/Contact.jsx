import { Mail, Instagram, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let’s grow your brand</h2>
        <p className="mt-3 text-gray-600">Tell me about your goals and I’ll share an action plan within 48 hours.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:hello@marketinggirl.example" className="inline-flex items-center gap-2 rounded-full bg-pink-600 text-white px-5 py-2.5 shadow hover:bg-pink-700 transition">
            <Mail size={16} /> Email me
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-gray-800 hover:border-gray-400 transition">
            <Instagram size={16} /> Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-gray-800 hover:border-gray-400 transition">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
        <p className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Marketing Girl — All rights reserved.</p>
      </div>
    </section>
  )
}

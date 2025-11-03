import HeroParallax from './components/HeroParallax'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-inter text-gray-900 antialiased">
      <HeroParallax />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App

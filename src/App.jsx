import Nav from './components/Nav'
import Hero from './components/Hero'
import Signal from './components/Signal'
import Systems from './components/Systems'
import Proof from './components/Proof'
import Connect from './components/Connect'
import Footer from './components/Footer'
import Background from './components/Background'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <Nav />
      <main>
        <Hero />
        <Signal />
        <Systems />
        <Proof />
        <Connect />
      </main>
      <Footer />
    </div>
  )
}

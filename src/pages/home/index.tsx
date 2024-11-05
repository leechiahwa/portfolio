import { Hero } from 'src/components/hero'
import About from '../../components/About/About'
import Projects from 'src/components/Projects/Projects'
import Contact from 'src/components/Contact/Contact'
import Navbar from 'src/components/Navbar'

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

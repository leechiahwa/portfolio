import AnimatedLetters from './AnimatedLetters'
import ParticlesBackground from './ParticlesBackground'
import { handleScroll } from '../../lib/utils'

export const Hero = () => {
  return (
    <div id="hero" className="flex min-h-screen bg-gradient-to-b from-sky-600 to-sky-950">
      <div className="m-auto text-center">
        {/* TOFIX: Particles Background should only fill Hero section */}
        <ParticlesBackground />
        <div className="relative z-10">
          <p className="animate-fade-in text-2xl text-sky-50 opacity-100 md:text-2xl">Hi, I am</p>
          <AnimatedLetters />
          <p className={`animate-fade-in-right text-2xl text-rose-100 md:text-2xl`}>Fullstack Software Developer</p>
          <button
            className=" mt-3 animate-fade-in rounded border p-2 text-sky-50 opacity-0 delay-1000"
            onClick={() => handleScroll('about')}
          >
            View more
          </button>
        </div>
      </div>
    </div>
  )
}

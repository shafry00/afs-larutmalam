import { Gamepad2, Megaphone, Clapperboard, Sparkles, ArrowRight, ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-yellow/30 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-brand-coral/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-brand-teal/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-brand-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-black text-white px-4 py-2 rounded-full mb-8 text-sm font-medium">
            <Sparkles className="w-4 h-4 text-brand-yellow" />
            <span>Game Development & Digital Marketing Agency</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="block">Accidentally</span>
            <span className="block gradient-text">Fun Studio</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We bridge <span className="font-semibold text-brand-black">hardcore tech</span> with{' '}
            <span className="font-semibold text-brand-coral">pure fun</span>. Your game development and 
            digital marketing partner in Indonesia.
          </p>

          {/* Service Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-gray-700">
              <Gamepad2 className="w-5 h-5 text-brand-purple" />
              <span className="font-medium">Game Dev</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Megaphone className="w-5 h-5 text-brand-coral" />
              <span className="font-medium">Marketing</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Clapperboard className="w-5 h-5 text-brand-teal" />
              <span className="font-medium">Video</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-black border-2 border-brand-black px-8 py-4 rounded-full font-semibold hover:bg-brand-yellow transition-all"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-brand-black/50" />
      </div>
    </section>
  )
}

export default Hero

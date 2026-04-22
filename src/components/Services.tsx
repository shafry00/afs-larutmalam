import { Gamepad2, Layers, Megaphone, Clapperboard, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Gamepad2,
    title: 'Game Development',
    description: 'Full-cycle game development for Mobile & PC. We use Unity and Unreal Engine to create engaging gaming experiences that captivate players.',
    features: ['Unity & Unreal Engine', 'Mobile Games', 'PC Games', 'Roblox Development'],
    color: 'brand-purple',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Layers,
    title: 'Game Services',
    description: 'Gamification and backend systems to turn casual users into loyal superfans. We add game magic to your business.',
    features: ['Gamification Systems', 'Backend Infrastructure', 'Live Operations', 'Player Analytics'],
    color: 'brand-teal',
    bgColor: 'bg-teal-50',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Strategic guidance from personal consultations to full-scale 360° marketing execution for maximum growth.',
    features: ['Growth Strategy', 'Social Media', 'SEO & SEM', 'Content Marketing'],
    color: 'brand-coral',
    bgColor: 'bg-red-50',
  },
  {
    icon: Clapperboard,
    title: 'Video & Motion',
    description: 'Cinematic storytelling that explains, entertains, and converts viewers into customers through stunning visuals.',
    features: ['Motion Graphics', 'Video Production', 'Animation', 'Brand Films'],
    color: 'brand-yellow',
    bgColor: 'bg-yellow-50',
  },
]

const Services = () => {
  return (
    <section id="services" className="py-24 bg-brand-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-brand-yellow/30 text-brand-black px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services Built for{' '}
            <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-lg text-gray-600">
            From concept to launch, we provide end-to-end solutions that combine 
            creative excellence with technical expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 bg-white rounded-2xl shadow-sm`}>
                  <service.icon className={`w-8 h-8 text-${service.color}`} style={{ color: `var(--${service.color})` }} />
                </div>
                <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-brand-black transition-colors" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-white/80 px-3 py-1 rounded-full text-sm font-medium text-gray-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

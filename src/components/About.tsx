import { Users, Award, Globe, Clock, CheckCircle } from 'lucide-react'

const stats = [
  { icon: Users, value: '50+', label: 'Happy Clients' },
  { icon: Award, value: '100+', label: 'Projects Delivered' },
  { icon: Globe, value: '5+', label: 'Countries Served' },
  { icon: Clock, value: '3+', label: 'Years Experience' },
]

const values = [
  {
    title: 'Innovation First',
    description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.',
  },
  {
    title: 'Client Partnership',
    description: 'We treat your project as our own, ensuring transparent communication throughout.',
  },
  {
    title: 'Quality Delivery',
    description: 'No shortcuts. We deliver polished, professional results that exceed expectations.',
  },
  {
    title: 'Continuous Support',
    description: 'Our relationship doesn\'t end at launch. We provide ongoing support and optimization.',
  },
]

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-white">
      <div className="container mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-brand-coral" />
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-brand-yellow via-brand-coral to-brand-purple rounded-3xl overflow-hidden">
              <img
                src="/og-image.jpg"
                alt="Accidentally Fun Studio Team"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-yellow rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-teal rounded-2xl -z-10" />
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block bg-brand-teal/20 text-brand-black px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Making Tech{' '}
              <span className="gradient-text">Accidentally Fun</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2021 in Jakarta, Indonesia, Accidentally Fun Studio (AFS) is a 
              creative tech agency that bridges hardcore technology with pure fun. We 
              specialize in game development, Roblox games, digital marketing, and 
              gamification services.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of 12 passionate professionals combines technical expertise with 
              creative excellence to deliver exceptional results for clients worldwide.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-coral flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

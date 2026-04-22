import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Melonix Run',
    category: 'Roblox Game',
    description: 'An endless runner game on Roblox platform with 10,000+ active players.',
    image: '/og-image.jpg',
    link: 'https://www.roblox.com/games/melonix-run',
    tags: ['Roblox', 'Lua', 'Multiplayer'],
  },
  {
    title: 'Brand Gamification',
    category: 'Gamification',
    description: 'Complete gamification system for a retail brand increasing engagement by 300%.',
    image: '/og-image.jpg',
    link: '#',
    tags: ['Gamification', 'Backend', 'Analytics'],
  },
  {
    title: 'Mobile Game Prototype',
    category: 'Game Dev',
    description: 'Hyper-casual mobile game prototype developed in Unity for iOS and Android.',
    image: '/og-image.jpg',
    link: '#',
    tags: ['Unity', 'C#', 'Mobile'],
  },
  {
    title: 'Marketing Campaign',
    category: 'Digital Marketing',
    description: '360° digital marketing campaign resulting in 200% ROI for client.',
    image: '/og-image.jpg',
    link: '#',
    tags: ['Strategy', 'Social Media', 'Ads'],
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-brand-coral/20 text-brand-black px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600">
            Explore our latest work across game development, gamification, and digital marketing.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <a
                  href={project.link}
                  className="absolute bottom-4 right-4 bg-white text-brand-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-yellow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

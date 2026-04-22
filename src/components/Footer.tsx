import { Gamepad2, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: 'Game Development', href: '#services' },
      { label: 'Game Services', href: '#services' },
      { label: 'Digital Marketing', href: '#services' },
      { label: 'Video & Motion', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    support: [
      { label: 'Contact', href: '#contact' },
      { label: 'FAQ', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  }

  return (
    <footer className="bg-brand-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="w-8 h-8 text-brand-yellow" />
              <span className="text-2xl font-bold font-display">AFS</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Accidentally Fun Studio - Bridging hardcore tech with pure fun. 
              Your partner for game development and digital marketing in Indonesia.
            </p>
            <div className="text-sm text-gray-500">
              <p>accidentallyfunstudio@larutmalam.id</p>
              <p>+62 881 1083 771</p>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Accidentally Fun Studio. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-brand-coral fill-brand-coral" /> in Jakarta
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

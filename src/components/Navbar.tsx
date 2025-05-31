
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Results', href: '#results' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-dark-secondary/90 to-dark-primary/90 backdrop-blur-md border-b border-violet-500/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:7637855557" className="flex items-center text-gray-300 hover:text-violet-400 transition-all duration-300 hover:scale-105">
                <Phone size={16} className="mr-2 text-violet-400" />
                7637855557
              </a>
              <a href="mailto:influenceoffcl@gmail.com" className="flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">
                <Mail size={16} className="mr-2 text-blue-400" />
                influenceoffcl@gmail.com
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="https://api.whatsapp.com/send?phone=917637855557&text=Hello!%20%F0%9F%8C%9F%20I%27m%20passionate%20about%20growing%20my%20business%20and%20exploring%20exciting%20new%20opportunities.%20Let%27s%20embark%20on%20this%20journey%20together%20and%20make%20something%20amazing%20happen!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-105"
              >
                WhatsApp
              </a>
              <a 
                href="https://calendly.com/officialinfluence/strategic-growth-session"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-violet-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-violet-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book Strategy Call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 w-full z-[100] bg-dark-primary/95 backdrop-blur-lg border-b border-violet-500/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/lovable-uploads/cc869bf4-0bc5-4074-9e2d-1eaed58c6d8e.png" 
                alt="INFLUENCE Logo" 
                className="h-20 w-auto mr-4 hover:scale-105 transition-transform duration-300"
              />
              <h1 className="text-3xl font-bold gradient-text">INFLUENCE</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-white/10 hover:scale-105"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                asChild
                className="bg-gradient-to-r from-violet-deep to-blue-electric hover:from-violet-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl px-6 py-3 text-lg font-semibold"
              >
                <a 
                  href="https://calendly.com/officialinfluence/strategic-growth-session"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Free Strategic Growth Session
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:bg-white/10"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-dark-secondary/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium rounded-lg hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-violet-deep to-blue-electric"
                >
                  <a 
                    href="https://calendly.com/officialinfluence/strategic-growth-session"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Free Strategic Growth Session
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

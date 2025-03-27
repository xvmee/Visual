import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#commands', label: 'Commands' },
    { href: '#stats', label: 'Stats' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#FF66C4]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/xSE1E6E.png" 
              alt="Visual Logo" 
              className="h-10 w-auto mr-2" 
            />
            <Link href="/">
              <span className="font-montserrat font-bold text-xl tracking-wider cursor-pointer">
                <span className="bg-gradient-to-r from-[#FF66C4] to-[#FF99D6] bg-clip-text text-transparent">
                  VISUAL
                </span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
              >
                <span className="text-white hover:text-[#FF99D6] transition duration-300 font-medium cursor-pointer">
                  {link.label}
                </span>
              </Link>
            ))}
            <Button 
              asChild
              className="bg-[#FF66C4] hover:bg-[#FF99D6] text-white font-poppins font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(255,102,196,0.7)] hover:shadow-[0_0_25px_rgba(255,102,196,0.9)]"
            >
              <a 
                href="https://discord.com/oauth2/authorize" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Add to Discord
              </a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1A1A1A] border-b border-[#FF66C4]/20"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="block text-white hover:text-[#FF99D6] transition duration-300 font-medium py-2 cursor-pointer">
                    {link.label}
                  </span>
                </Link>
              ))}
              <Button 
                asChild
                className="w-full mt-4 bg-[#FF66C4] hover:bg-[#FF99D6] text-white font-poppins font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(255,102,196,0.7)] hover:shadow-[0_0_25px_rgba(255,102,196,0.9)]"
              >
                <a 
                  href="https://discord.com/oauth2/authorize" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Add to Discord
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

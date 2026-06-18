import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function Header({ currentView, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About', value: 'about' },
    { label: 'CSR', value: 'csr' },
    { label: 'GAD', value: 'gad' },
    { label: 'Watershed', value: 'watershed' },
    { label: 'Sanitation Service', value: 'sanitation' },
    { label: 'HR', value: 'hr' },
    { label: 'Trainings', value: 'trainings' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
          : 'bg-transparent' // Completely transparent when at top
      }`}
    >
      {/* Dark overlay only when not scrolled - matches hero exactly */}
      {!scrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-90/70 to-blue-950/60 pointer-events-none" />
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/PolWD_Logo.jpg" alt="Polomolok Water District Logo" className="h-12 w-12 object-cover rounded-lg" />
            <div>
              <h1 className={`text-xl font-bold transition-all duration-500 ${
                scrolled ? 'text-blue-800' : 'text-white drop-shadow-lg'
              }`}>
                Polomolok Water District
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  scrolled
                    ? (currentView === item.value
                        ? 'text-blue-700 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50')
                    : (currentView === item.value
                        ? 'text-white bg-white/20 backdrop-blur-sm'
                        : 'text-white/90 hover:text-white hover:bg-white/10')
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden py-4 border-t relative z-10 transition-colors ${
            scrolled ? 'bg-white/95 border-gray-200' : 'bg-blue-950/80 backdrop-blur-md border-white/20'
          }`}>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    onNavigate(item.value);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 text-left text-sm font-medium rounded-md transition-colors ${
                    scrolled
                      ? (currentView === item.value
                          ? 'text-blue-700 bg-blue-50'
                          : 'text-gray-700 hover:bg-gray-50')
                      : (currentView === item.value
                          ? 'text-white bg-white/20'
                          : 'text-white/90 hover:bg-white/10')
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <Button className="w-full bg-blue-700 hover:bg-blue-800 rounded-full">
                  Login / Sign up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
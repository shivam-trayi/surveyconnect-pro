import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-medium border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 font-bold text-xl text-foreground hover:text-primary transition-colors"
          >
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">VP</span>
            </div>
            <span className="hidden sm:block">VendorPortal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              How It Works
            </button>
            <Button
              variant="ghost"
              onClick={() => navigate('/canvas')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Design Studio
            </Button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-lg"
            >
              {resolvedTheme === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/login')}
              className="font-medium"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate('/signup')}
              className="gradient-primary text-white font-medium hover:shadow-glow transition-all duration-300"
            >
              Sign Up Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-lg"
            >
              {resolvedTheme === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="w-9 h-9 rounded-lg"
            >
              {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
            <nav className="py-4 space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => navigate('/canvas')}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                Design Studio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border/50">
                <Button
                  variant="outline"
                  onClick={() => {
                    navigate('/login');
                    setIsMobileMenuOpen(false);
                  }}
                  className="font-medium"
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    navigate('/signup');
                    setIsMobileMenuOpen(false);
                  }}
                  className="gradient-primary text-white font-medium"
                >
                  Sign Up Free
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
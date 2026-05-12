import { useState, useEffect } from 'react';
import logoLight from '../assets/images/trevon logo masterfile-03.png';
import logoTextLight from '../assets/images/trevon logo masterfile-01.png';
import logoDark from '../assets/images/trevon logo masterfile-04.png';
import logoTextDark from '../assets/images/trevon logo masterfile-02 (1).png';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { cn } from '../utils/cn';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'TrevAI', href: '#ai' },
    { label: 'For Teams', href: '#roles' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
        scrolled
          ? 'w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-6xl rounded-2xl py-3 mt-4'
          : 'w-full max-w-full rounded-none py-5 mt-0'
      )}
      style={{
        background: scrolled
          ? 'rgba(255,255,255,0.65)'
          : 'rgba(255,255,255,0.0)',
        backdropFilter: scrolled ? 'blur(24px) saturate(200%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(200%)' : 'none',
        border: scrolled
          ? '1px solid rgba(255,255,255,0.8)'
          : '1px solid transparent',
        boxShadow: scrolled
          ? '0 16px 40px -12px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,1)'
          : 'none',
      }}
    >
      <style>{`
        .dark nav {
          background: ${scrolled ? 'rgba(11,16,26,0.65)' : 'rgba(11,16,26,0.0)'} !important;
          border: 1px solid ${scrolled ? 'rgba(255,255,255,0.1)' : 'transparent'} !important;
          box-shadow: ${scrolled ? '0 16px 40px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)' : 'none'} !important;
        }
        .nav-link {
          position: relative;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #FE696D, #F2994A);
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
      `}</style>

      <Container className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <img key={`navbar-logo-${theme}`} src={theme === 'dark' ? logoDark : logoLight} alt="Trevon Logo" className="h-9 w-auto" />
          <img key={`navbar-logo-text-${theme}`} src={theme === 'dark' ? logoTextDark : logoTextLight} alt="Trevon" className="h-6 w-auto mt-0.5" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="nav-link text-sm font-semibold text-grey-600 dark:text-grey-300 hover:text-brand-coral dark:hover:text-brand-coral transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-grey-500 hover:text-brand-coral hover:bg-brand-coral/8 transition-all duration-200 dark:text-grey-400 dark:hover:text-white dark:hover:bg-white/10"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#download">
            <Button
              variant="primary"
              size="sm"
              className="btn-glow shadow-lg shadow-brand-coral/20 hover:shadow-brand-coral/35 hover:-translate-y-0.5 transition-all duration-200"
            >
              Download App
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-xl text-brand-navy dark:text-white hover:bg-grey-100 dark:hover:bg-white/10 transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 border-b border-grey-200 dark:border-white/10 shadow-xl py-4 px-6 flex flex-col gap-4"
          style={{
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-semibold text-brand-navy dark:text-white py-2 border-b border-grey-100 dark:border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#download" className="w-full mt-4" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="primary" className="w-full btn-glow">
              Download App
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

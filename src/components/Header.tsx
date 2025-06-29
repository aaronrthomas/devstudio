import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [boxStyle, setBoxStyle] = useState<React.CSSProperties>({});

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Update box position and size when activeIdx or window size changes
  useEffect(() => {
    const el = navRefs.current[activeIdx];
    if (el) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement?.getBoundingClientRect();
      setBoxStyle({
        left: rect.left - (parentRect?.left ?? 0),
        width: rect.width,
        height: rect.height,
        top: rect.top - (parentRect?.top ?? 0),
        transition: 'all 0.45s cubic-bezier(.4,0,.2,1)', // smoother and slightly slower
      });
    }
  }, [activeIdx, isMenuOpen]);

  // Listen to hash changes for scroll/active tab sync
  useEffect(() => {
    const onHashChange = () => {
      const idx = navItems.findIndex(item => item.href === window.location.hash);
      if (idx !== -1) setActiveIdx(idx);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Smooth scroll to section on nav click
  const handleNavClick = (idx: number, href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveIdx(idx);
    const el = document.querySelector(href);
    if (el) {
      // Use scrollIntoView for smooth scrolling
      (el as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Update hash after scroll for accessibility/history
      window.history.replaceState(null, '', href);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 border-b border-gray-100" style={{ background: 'transparent' }}>
      <style>
        {`
          .nav-animate-box {
            transition: all 0.45s cubic-bezier(.4,0,.2,1);
            background: linear-gradient(90deg, #18181b 0%, #6366f1 100%);
            opacity: 1.5;
            border-radius: 0.75rem;
            pointer-events: none;
            position: absolute;
            z-index: 0;
            will-change: left, width, height, top;
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {/* Removed the logo box */}
            {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div> */}
            <span className="text-xl font-bold text-gray-900">Devstudio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 relative">
            {/* Moving box */}
            <div
              className="nav-animate-box"
              style={{
                ...boxStyle,
                position: 'absolute',
                transition: 'all 0.45s cubic-bezier(.4,0,.2,1)',
              }}
            />
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                ref={el => (navRefs.current[idx] = el)}
                className={`relative z-10 px-3 py-2 transition-colors duration-200 font-medium
                  ${activeIdx === idx ? 'text-white font-bold' : 'text-gray-700 hover:text-blue-600'}
                `}
                onClick={e => handleNavClick(idx, item.href, e)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navItems.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={e => {
                    setIsMenuOpen(false);
                    handleNavClick(idx, item.href, e);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

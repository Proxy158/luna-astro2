import { useEffect, useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Come funziona', href: '#come-funziona' },
  { label: "Un esempio", href: '#esempio' },
  { label: 'Cosa non facciamo', href: '#non-facciamo' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-900/85 backdrop-blur-lg border-b border-gold-500/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-gold-gradient rounded-full blur-sm opacity-60 group-hover:opacity-90 transition-opacity" />
            <div className="relative w-7 h-7 bg-ink-900 rounded-full flex items-center justify-center border border-gold-500/40">
              <Sparkles className="w-4 h-4 text-gold-400" />
            </div>
          </div>
          <span className="font-display text-2xl font-semibold text-gold-gradient tracking-wide">
            Finestre
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-gold-300 transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#come-funziona"
            className="bg-gold-gradient text-ink-900 px-5 py-2.5 rounded-full text-sm font-semibold gold-glow-hover hover:scale-[1.03] transition-all duration-300"
          >
            Inizia gratis
          </a>
        </div>

        <button
          className="md:hidden text-gold-400 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-4 pb-6 flex flex-col gap-4 bg-ink-900/95 backdrop-blur-lg border-t border-gold-500/10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-gray-300 hover:text-gold-300 transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#come-funziona"
            onClick={() => setMobileOpen(false)}
            className="bg-gold-gradient text-ink-900 px-5 py-2.5 rounded-full text-sm font-semibold text-center"
          >
            Inizia gratis
          </a>
        </div>
      </div>
    </nav>
  );
}

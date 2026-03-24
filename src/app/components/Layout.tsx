import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Sparkles, Star, Sun, Moon } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from '@hugeicons/react'
import { SaturnIcon } from '@hugeicons/core-free-icons'

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    document.documentElement.style.scrollBehavior = "smooth";
    document.documentElement.style.scrollPaddingTop = "64px";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      document.documentElement.style.scrollPaddingTop = "0px";
    };
  }, [location.pathname]);

  const navLinks = [
    { name: "Главная", href: "#home" },
    { name: "Услуги", href: "#services" },
    { name: "Обо мне", href: "#about" },
    { name: "Запись на консультацию", href: "#contact" },
  ];

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-indigo-50 font-sans selection:bg-purple-800 selection:text-white flex flex-col scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-indigo-900/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <HugeiconsIcon icon={SaturnIcon} className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
            {/* <Sparkles className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" /> */}
            <span className="font-serif text-xl tracking-wider font-medium text-white">planet.ohara</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-indigo-200 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm tracking-wide uppercase transition-colors hover:text-purple-300 text-indigo-200 font-[Abhaya_Libre]"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-lg pt-20 px-4 md:hidden"
          >
            <nav className="flex flex-col gap-6 items-center mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-2xl font-serif tracking-wider transition-colors text-indigo-100 hover:text-purple-400"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex gap-6 mt-12 text-purple-400/50">
                <Star className="w-6 h-6 animate-pulse" />
                <Sun className="w-6 h-6 animate-pulse delay-75" />
                <Moon className="w-6 h-6 animate-pulse delay-150" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 pt-16 relative overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none -z-10" />
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-indigo-900/50 bg-slate-950/50 pt-12 pb-8 px-4 mt-auto">
        <div className="container mx-auto flex flex-col items-center text-center">
          {/* <Sparkles className="w-8 h-8 text-purple-500 mb-4" /> */}
          <HugeiconsIcon icon={SaturnIcon} className="w-8 h-8 text-purple-500 mb-4" />
          <h2 className="font-serif text-2xl text-white mb-2">planet.ohara</h2>
          <p className="text-indigo-200 max-w-sm mb-8">
            Интуитивное толкование натальной карты поможет вам в вашем путешествии по космосу.
          </p>
          <div className="flex items-center gap-6 mb-8">
            <a 
              href="https://instagram.com/planet.ohara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-indigo-950 border border-indigo-800/50 flex items-center justify-center text-indigo-300 hover:text-white hover:bg-purple-900/50 hover:border-purple-500/50 transition-all shadow-[0_0_15px_rgba(79,70,229,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/77785586030" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-indigo-950 border border-indigo-800/50 flex items-center justify-center text-indigo-300 hover:text-white hover:bg-green-900/50 hover:border-green-500/50 transition-all shadow-[0_0_15px_rgba(79,70,229,0.1)] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
          <div className="text-sm text-indigo-400/60">
            &copy; {new Date().getFullYear()} planet.ohara. All cosmic rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

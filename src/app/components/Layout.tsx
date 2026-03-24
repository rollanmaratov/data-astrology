import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Sparkles, Star, Sun, Moon } from "lucide-react";
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
          <div className="text-sm text-indigo-400/60">
            &copy; {new Date().getFullYear()} planet.ohara. All cosmic rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

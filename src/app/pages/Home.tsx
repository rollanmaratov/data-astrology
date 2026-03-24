import { motion } from "motion/react";
import { Sparkles, ArrowRight, Star, Moon, Sun } from "lucide-react";
import { Services } from "./Services";
import { About } from "./About";
import { Contact } from "./Contact";

export function Home() {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-32 px-4 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-[-1]">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950 z-10" />
          <img
            src="https://images.unsplash.com/photo-1515705576963-95cad62945b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxreSUyMHdheSUyMGdhbGF4eXxlbnwxfHx8fDE3NzM3NDgwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Milky Way Galaxy"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 flex flex-col items-center text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-900/20 text-purple-300 text-sm mb-6 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              <Sparkles className="w-4 h-4" />
              <span>Сакральные методы самопомощи</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-lg break-words whitespace-normal">Профессиональное чтение натальной карты</h1>
            
            <p className="text-lg text-indigo-200 mb-10 leading-relaxed max-w-lg mx-auto">
              Dive deep into your astrological blueprint with an expert natal chart reading. Discover your unique strengths, challenges, and cosmic potential.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-all shadow-[0_0_30px_rgba(147,51,234,0.4)] flex items-center justify-center gap-2"
              >
                Запишитесь на консультацию
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-indigo-700 hover:bg-indigo-900/30 text-indigo-100 font-medium transition-colors flex items-center justify-center gap-2"
              >
                Мои услуги
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Insight Section */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-2xl blur-xl" />
              <img
                src="https://i.pinimg.com/736x/d7/18/b8/d718b8903383d3bf1889ca41d6215aa2.jpg"
                alt="Astrology Natal Chart"
                className="rounded-2xl border border-indigo-800/50 shadow-2xl relative z-10 w-full object-cover aspect-square md:aspect-auto md:h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-xl z-20">
                <Sun className="w-10 h-10 text-yellow-300" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex flex-col gap-6"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-white">Что такое натальная карта?</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
              <p className="text-indigo-200 text-lg leading-relaxed">
                Your natal chart is a map of the sky at the exact moment you were born. It serves as your personal cosmic fingerprint, revealing the unique energies, gifts, and karmic patterns that shape your life journey.
              </p>
              <p className="text-indigo-200 text-lg leading-relaxed">
                By understanding the placements of the Sun, Moon, and planets in your chart, you can gain profound insights into your personality, relationships, career path, and soul's purpose.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {[
                  { icon: Sun, text: "Core Identity & Ego" },
                  { icon: Moon, text: "Emotional Landscape" },
                  { icon: Star, text: "Hidden Potentials" },
                  { icon: Sparkles, text: "Life Purpose" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-indigo-950/40 p-3 rounded-lg border border-indigo-900/50">
                    <item.icon className="w-5 h-5 text-purple-400" />
                    <span className="text-indigo-100">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial preview */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <Star className="w-8 h-8 text-yellow-500 mx-auto mb-6" />
          <blockquote className="font-serif text-2xl md:text-3xl text-white leading-relaxed mb-8">
            "The natal chart reading I received was incredibly eye-opening. It felt like someone finally put my scattered thoughts into a clear, cohesive roadmap for my life."
          </blockquote>
          <cite className="text-indigo-300 not-italic uppercase tracking-widest text-sm font-semibold">
            — Sarah M., New York
          </cite>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

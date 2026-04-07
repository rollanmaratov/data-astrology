import { motion } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  Star,
  Moon,
  Sun,
  Heart,
  Briefcase,
} from "lucide-react";
import { Services } from "./Services";
import { About } from "./About";
import { Contact } from "./Contact";
import { ConsultationFormat } from "./ConsultationFormat";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-32 px-4 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-[-1]">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950 z-10" />
          <img
            src="https://images.unsplash.com/photo-1563547257011-054b1054e185?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Northern lights and stars"
            className="w-full h-full object-cover opacity-80 mix-blend-screen"
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
              <span>{t("hero.badge")}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-5xl text-white mb-6 leading-tight sm:leading-snug md:leading-normal lg:leading-normal drop-shadow-lg break-words whitespace-normal">
              {t("hero.title")}
            </h1>

            <p className="text-lg text-indigo-200 mb-10 leading-relaxed max-w-lg mx-auto">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-indigo-700 hover:bg-indigo-900/30 text-indigo-100 font-medium transition-colors flex items-center justify-center gap-2"
              >
                {t("hero.services")}
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-all shadow-[0_0_30px_rgba(147,51,234,0.4)] flex items-center justify-center gap-2"
              >
                {t("hero.cta")}
                <ArrowRight className="w-5 h-5" />
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
                src="https://i.imgur.com/ckZsdiJ.png"
                alt="Astrology Natal Chart"
                className="rounded-2xl border border-indigo-800/50 shadow-2xl relative z-10 w-full object-scale-down"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex flex-col gap-6"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-white">
                {t("natalChart.title")}
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
              <p className="text-indigo-200 text-lg leading-relaxed">
                {t("natalChart.description1")}
              </p>

              <div className="space-y-6 mt-6">
                {(
                  t("natalChart.description2", { returnObjects: true }) as any[]
                ).map((item, index) => {
                  const icons = [Sun, Heart, Briefcase, Star];
                  const Icon = icons[index];
                  return (
                    <div key={index} className="flex gap-4">
                      <Icon className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {item.heading}
                        </h3>
                        <p className="text-indigo-200 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial preview */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          {/* <Star className="w-8 h-8 text-yellow-500 mx-auto mb-6" /> */}
          <blockquote className="font-serif text-lg text-white leading-relaxed mb-8">
            {t("testimonial.text")}
          </blockquote>
          <cite className="text-indigo-300 not-italic uppercase tracking-widest text-sm font-semibold">
            {t("testimonial.author")}
          </cite>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Consultation Format Section */}
      <section id="consultation-format">
        <ConsultationFormat />
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

import { motion } from "motion/react";
import { Book, Heart, CalendarDays, Compass, ArrowRight, Baby } from "lucide-react";
import { useTranslation } from 'react-i18next';

export function Services() {
  const { t } = useTranslation();
  const services = [
    {
      title: t('services.personalAnalysis.title'),
      price: t('services.personalAnalysis.price'),
      duration: t('services.personalAnalysis.duration'),
      icon: Compass,
      description: t('services.personalAnalysis.description'),
      features: [
        "Sun, Moon, & Rising signs",
        "Major planetary aspects",
        "House placements",
        "North Node & Life Purpose",
      ],
    },
    {
      title: t('services.compatibility.title'),
      price: t('services.compatibility.price'),
      duration: "",
      icon: Heart,
      description: t('services.compatibility.description'),
      features: [
        "Current life themes",
        "Upcoming opportunities",
        "Navigating challenges",
        "Timing for major decisions",
      ],
    },
    {
      title: t('services.solar.title'),
      price: t('services.solar.price'),
      duration: t('services.solar.duration'),
      icon: CalendarDays,
      description: t('services.solar.description'),
      features: [
        "Chart overlay analysis",
        "Communication styles",
        "Emotional compatibility",
        "Karmic ties",
      ],
    },
    {
      title: t('services.childAnalysis.title'),
      price: t('services.childAnalysis.price'),
      duration: t('services.childAnalysis.duration'),
      icon: Baby,
      description: t('services.childAnalysis.description'),
      features: [
        "Year ahead forecast",
        "Major themes",
        "Favorable periods",
        "Challenges to watch for",
      ],
    },
    {
      title: t('services.synastry.title'),
      price: t('services.synastry.price'),
      duration: t('services.synastry.duration'),
      icon: Book,
      description: t('services.synastry.description'),
      features: [
        "Year ahead forecast",
        "Major themes",
        "Favorable periods",
        "Challenges to watch for",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-white mb-6 drop-shadow-lg"
          >
            {t('services.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-indigo-200 max-w-2xl mx-auto"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/60 border border-indigo-900/50 rounded-2xl p-8 hover:bg-slate-800/80 transition-all group hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(147,51,234,0.15)] flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-full bg-purple-900/30 flex items-center justify-center border border-purple-500/30 group-hover:bg-purple-600 group-hover:text-white transition-colors text-purple-400">
                  <service.icon className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-serif text-white">
                    {service.price}
                  </span>
                  {/* <span className="text-sm text-indigo-300">{service.duration}</span> */}
                </div>
              </div>

              <h2 className="text-2xl font-serif text-white mb-4 group-hover:text-purple-300 transition-colors">
                {service.title}
              </h2>

              {/* Render description as paragraphs (split on newlines) so text keeps intended breaks */}
              <div className="text-indigo-200 mb-6 flex-grow">
                {service.description
                  .split("\n")
                  .map((line) => line.trim())
                  .filter(Boolean)
                  .map((line, i) => (
                    <p key={i} className="mb-2">
                      {line}
                    </p>
                  ))}
              </div>

              {/* <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-indigo-400 font-semibold mb-3">Includes:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-indigo-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div> */}

              <a
                href="#contact"
                className="mt-auto w-full py-3 px-4 rounded-lg bg-indigo-950 text-indigo-100 font-medium hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-2 border border-indigo-800 hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
              >
                {t('services.cta')}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-indigo-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-serif text-white mb-2">
            {t('services.help.title')}
          </h3>
          <p className="text-indigo-200 mb-6">
            {t('services.help.description')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 font-medium underline underline-offset-4"
          >
            {t('services.help.cta')}
          </a>
        </div>
      </div>
    </div>
  );
}

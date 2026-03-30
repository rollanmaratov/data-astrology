import { motion } from "motion/react";
import { Sparkles, MapPin, Award, Star } from "lucide-react";
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen py-24 px-4 relative z-10 overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-40 right-10 opacity-30 animate-pulse text-purple-400">
        {/* <Sparkles className="w-12 h-12" /> */}
      </div>
      <div className="absolute bottom-20 left-10 opacity-20 animate-pulse text-yellow-500">
        {/* <Star className="w-8 h-8" /> */}
      </div>

      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row gap-16 items-start">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 relative mt-12"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/30 to-indigo-600/30 rounded-[2rem] blur-2xl -z-10" />
          <div className="relative rounded-[2rem] overflow-hidden border border-indigo-700/50 shadow-2xl shadow-indigo-900/40 group">
            <img
              src="https://i.imgur.com/bFHkjda.png"
              alt={t('about.name')}
              className="w-full h-auto object-cover aspect-[4/5] transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="font-serif text-3xl text-white mb-1">{t('about.name')}</h1>
              <p className="text-indigo-200 font-medium tracking-wide text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {t('about.location')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-7/12 flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-900/20 text-purple-300 text-sm mb-2 shadow-[0_0_20px_rgba(168,85,247,0.1)] w-fit">
            <Award className="w-4 h-4" />
            <span>{t('about.badge')}</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-2 leading-tight">{t('about.title')}</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
          
          <div className="prose prose-invert prose-lg text-indigo-100/90 mt-4 leading-relaxed text-justify">
            <p className="mb-6">{t('about.description1')}</p>
            <p className="mb-6">
              {t('about.description2')}
            </p>
            <p>
              {t('about.description3')}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-indigo-900/50 pt-8">
            <div>
              <span className="block text-3xl font-serif text-purple-400 mb-1">2</span>
              <span className="text-sm text-indigo-300 uppercase tracking-wider font-semibold">{t('about.experience')}</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-purple-400 mb-1">100+</span>
              <span className="text-sm text-indigo-300 uppercase tracking-wider font-semibold">{t('about.chartsRead')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { Sparkles, MapPin, Award, Star } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen py-24 px-4 relative z-10 overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-40 right-10 opacity-30 animate-pulse text-purple-400">
        <Sparkles className="w-12 h-12" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-20 animate-pulse text-yellow-500">
        <Star className="w-8 h-8" />
      </div>

      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row gap-16 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/30 to-indigo-600/30 rounded-[2rem] blur-2xl -z-10" />
          <div className="relative rounded-[2rem] overflow-hidden border border-indigo-700/50 shadow-2xl shadow-indigo-900/40 group">
            <img
              src="https://i.imgur.com/bFHkjda.png"
              alt="Портрет Дары Якуповой"
              className="w-full h-auto object-cover aspect-[4/5] transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="font-serif text-3xl text-white mb-1">Якупова Дара</h1>
              <p className="text-indigo-200 font-medium tracking-wide text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Эр-Рияд, Саудовская Аравия
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
            <span>Сертифицированный Астролог</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-2 leading-tight">Обо мне</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
          
          <div className="prose prose-invert prose-lg text-indigo-100/90 mt-4 leading-relaxed">
            <p className="mb-6">Привет, меня зовут Дара. Мой путь в астрологию начался более десяти лет назад, когда случайная встреча с моей натальной картой полностью изменила мое мировоззрение. Я поняла, что звезды не предопределяют нашу судьбу; скорее, они предлагают глубокий язык для понимания нашего глубочайшего потенциала, циклических трудностей и уникального кармического пути.</p>
            <p className="mb-6">
              Я специализируюсь на эволюционной и психологической астрологии. Это означает, что мои чтения выходят за рамки простых гороскопов по знаку зодиака. Вместо этого мы погружаемся в богатые сложности вашей натальной карты, исследуя ваш эмоциональный ландшафт, динамику отношений и жизненное предназначение.
            </p>
            <p>
              Моя цель - дать вам силы. Независимо от того, проходите ли вы через трудный переход, ищете ясность в отношении важного жизненного решения или просто хотите лучше понять себя, чтение натальной карты предоставляет космическое зеркало, отражающее блестящее, сложное существо, которым вы на самом деле являетесь.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-indigo-900/50 pt-8">
            <div>
              <span className="block text-3xl font-serif text-purple-400 mb-1">2</span>
              <span className="text-sm text-indigo-300 uppercase tracking-wider font-semibold">года опыта</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-purple-400 mb-1">100+</span>
              <span className="text-sm text-indigo-300 uppercase tracking-wider font-semibold">Карт прочитано</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { Book, Heart, CalendarDays, Compass, ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Разбор личности",
      price: "$120 / 10,000 RR",
      duration: "90 min",
      icon: Compass,
      description: `
      Вы узнаете себя и сможете сами
      Помогать себе при любом "шторме"
      Свои сильные и слабые стороны
        • как обрести баланс энергий
        • тип активности и темперамент
        • узнаете какое впечатление вы производите при знакомстве
        • в чем ваша сила
        • ваши глубинные страхи и как с ними примирится
        • как вам выйти на новый уровень развития и добиться расширения по всем фронтам
        И 2 кратких запроса, например:
        • деньги (как именно ведут себя ваши деньги, стратегия приумножения и в чем может быть ваш
        Side hustle)
        • отношения и любовь (какой у вас тип привязанности, образ партнера, ожидания от отношений)
        • предназначение (та деятельность от которой вы будете ощущать себя на своем месте.
      `,
      features: ["Sun, Moon, & Rising signs", "Major planetary aspects", "House placements", "North Node & Life Purpose"],
    },
    {
      title: "Совместимость",
      price: "$150 / 12,000 RR",
      duration: "",
      icon: CalendarDays,
      description: `
      Данный разбор делается на 2х людей и затем накладывается друг на друга для определения стратегий эффективного взаимодействия
      • темперамент и тип активности
      • какая зона комфорта
      • какие ожидания от отношений
      • какой идеальный образ женщины /
      Мужчины
      • отношение к быту, проявления в социуме, тип мышления
      • "личный бренд" пары
      • точка несогласия, расхождения во взглядах
      `,
      features: ["Current life themes", "Upcoming opportunities", "Navigating challenges", "Timing for major decisions"],
    },
    {
      title: "Соляр",
      price: "$100 / 8,000 RR",
      duration: "90 min",
      icon: Heart,
      description: `Персональный гороскоп на предстоящий год.
        Определение главных тем на год, в какой сфере ожидать изменений, на чем сфокусироваться
        Важно:
        Знать точное время рождения`,
      features: ["Chart overlay analysis", "Communication styles", "Emotional compatibility", "Karmic ties"],
    },
    {
      title: "Разбор ребенка",
      price: "$80 / 6,500 RR",
      duration: "45 min",
      icon: Book,
      description: `
      Какие энергии выделены у ребенка
      • какие слабые слабые стороны и как их
      Проработать
      • базовые потребности и особенности
      Психики ребенка
      • страхи ребенка
      • как ребенок воспринимает информацию
      • зона интересов для изучения и общения
      • как ребенок "видит" своих родителей
      • как ребенок чувствует себя любимым
      `,
      features: ["Year ahead forecast", "Major themes", "Favorable periods", "Challenges to watch for"],
    },
    {
      title: "Событыйность",
      price: "$130 / 11,000 RR",
      duration: "45 min",
      icon: Book,
      description: `
      Расшифровка всех связей домов по вашему сакральному паспорту.
      Узнайте какие сценарии жизни заложены в вашу карту, а также максимальный потенциал вашего воплощения
      С вами не случится того, чего нет в вашей карте
      `,
      features: ["Year ahead forecast", "Major themes", "Favorable periods", "Challenges to watch for"],
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
            Мои Услуги
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-indigo-200 max-w-2xl mx-auto"
          >
            Выберите чтение которое резонирует с вами, и я помогу вам раскрыть тайны вашей натальной карты и направить вас на путь самопознания и роста.
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
                  <span className="block text-2xl font-serif text-white">{service.price}</span>
                  <span className="text-sm text-indigo-300">{service.duration}</span>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-white mb-4 group-hover:text-purple-300 transition-colors">
                {service.title}
              </h2>
              
              <p className="text-indigo-200 mb-6 flex-grow">
                {service.description}
              </p>

              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-indigo-400 font-semibold mb-3">Includes:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-indigo-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="mt-auto w-full py-3 px-4 rounded-lg bg-indigo-950 text-indigo-100 font-medium hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-2 border border-indigo-800 hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
              >
                Выбрать это чтение
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-indigo-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-serif text-white mb-2">Не знаете какое чтение выбрать?</h3>
          <p className="text-indigo-200 mb-6">
            Если это ваш первый раз со мной, я рекомендую начать с разбора личности. Это даст вам глубокое понимание себя и поможет определить, какие аспекты вашей жизни требуют внимания. Если вы хотите узнать о предстоящем году, соляр - отличный выбор. А для понимания динамики в отношениях - совместимость будет идеальной. Если у вас есть конкретные вопросы или вы не уверены, что выбрать, не стесняйтесь связаться со мной для консультации.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 font-medium underline underline-offset-4"
          >
            Свяжитесь со мной для консультации
          </a>
        </div>
      </div>
    </div>
  );
}

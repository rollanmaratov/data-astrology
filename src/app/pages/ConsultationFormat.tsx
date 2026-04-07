import { motion } from "motion/react";
import {
  FileText,
  Video,
  Pointer,
  CreditCard,
  ClipboardList,
  CalendarCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export function ConsultationFormat() {
  const { t } = useTranslation();

  const interactionFormats = (
    t("consultationFormat.interactionFormats", {
      returnObjects: true,
    }) as Array<{ title: string; description: string }>
  ).map((format, index) => ({
    ...format,
    icon: [FileText, Video][index],
  }));
  const workAlgorithms = (
    t("consultationFormat.workAlgorithms", { returnObjects: true }) as Array<{
      title: string;
      description: string;
    }>
  ).map((algo, index) => ({
    ...algo,
    step: index + 1,
    icon: [Pointer, CreditCard, ClipboardList, CalendarCheck][index],
  }));

  return (
    <div className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            {t("consultationFormat.title")}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto" />
        </motion.div>

        {/* Interaction Format */}
        <div className="mb-24">
          <h3 className="text-2xl text-indigo-200 mb-8 text-center font-medium">
            {t("consultationFormat.interactionFormat")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interactionFormats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative p-8 rounded-2xl bg-slate-900/40 border border-indigo-900/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-indigo-950/80 rounded-xl flex items-center justify-center border border-indigo-800/50 mb-6 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all">
                    <format.icon className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </div>
                  <h4 className="text-xl text-white font-medium mb-4">
                    {format.title}
                  </h4>
                  <p className="text-indigo-200/80 leading-relaxed">
                    {format.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Work Algorithm */}
        <div>
          <h3 className="text-2xl text-indigo-200 mb-12 text-center font-medium">
            {t("consultationFormat.workAlgorithm")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workAlgorithms.map((algo, index) => (
              <motion.div
                key={algo.step}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center p-6"
              >
                {/* Connector Line for larger screens */}
                {index < workAlgorithms.length - 1 && (
                  <div className="hidden lg:block absolute top-14 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent z-0" />
                )}

                <div className="relative z-10 w-20 h-20 mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-indigo-950/80 rounded-full border-2 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {algo.step}
                  </div>
                  <algo.icon className="w-8 h-8 text-purple-400  group-hover:text-purple-300 transition-colors" />
                </div>

                <h4 className="text-lg text-white font-medium mb-3">
                  {algo.title}
                </h4>
                <p className="text-sm text-indigo-200/70 leading-relaxed">
                  {algo.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { Sparkles, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const whatsappNumber = "966530205976"; // Dara's Arab number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="py-24 px-4 relative z-10 flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] max-w-md max-h-md bg-purple-900/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[30vw] h-[30vw] max-w-sm max-h-sm bg-indigo-900/30 rounded-full blur-[80px] pointer-events-none" />
      </div>

      <div className="container mx-auto max-w-4xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-900/20 text-purple-300 text-sm mb-4 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            <Sparkles className="w-4 h-4" />
            <span>{t("contact.badge")}</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-indigo-200 max-w-lg mx-auto">
            {t("contact.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="w-full max-w-md bg-slate-900/80 backdrop-blur-md border border-indigo-900/50 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col items-center text-center"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-medium transition-all shadow-[0_0_30px_rgba(22,163,74,0.4)] flex items-center justify-center gap-3 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            {t("contact.cta")}
          </a>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import type { SectionTitleProps } from "../types";

export default function SectionTitle({ text1, text2, text3, textWhy }: SectionTitleProps) {
  return (
    <div className="relative max-w-4xl mx-auto text-center">

      {/* Badge */}
      <motion.span
        className="
          inline-block
          mb-6
          px-5 py-2
          rounded-full
          text-xs
          font-semibold
          tracking-wider
          text-pink-500
          bg-pink-500/10
          border border-pink-500/20
        "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {text1}
      </motion.span>

      {/* Headline */}
      <motion.h2
        className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-semibold
          leading-tight
          tracking-tight
          text-white
        "
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {text2}
      </motion.h2>

      {/* Description */}
      <motion.p
        className="
          mt-6
          text-base
          sm:text-lg
          text-slate-400
          max-w-2xl
          mx-auto
          leading-relaxed
        "
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {text3}
      </motion.p>
  <motion.p
        className="
          mt-4 text-sm sm:text-base
          font-medium uppercase tracking-wide
          text-pink-400
        "
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {textWhy}
      </motion.p>
    </div>
  );
}

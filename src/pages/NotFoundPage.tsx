'use client'
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { HomeIcon, MailIcon } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-center bg-slate-950 text-white">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="max-w-xl"
      >
        <h1 className="text-7xl font-bold bg-linear-to-r from-pink-500 to-pink-300 text-transparent bg-clip-text">
          404
        </h1>

        <p className="mt-4 text-2xl font-semibold">
          Página no encontrada
        </p>

        <p className="mt-3 text-slate-400">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 h-11 rounded-full bg-pink-600 hover:bg-pink-700 transition"
          >
            <HomeIcon size={18} />
            Volver al inicio
          </Link>

          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 h-11 rounded-full border border-pink-900 hover:bg-pink-950/50 transition"
          >
            <MailIcon size={18} />
            Contáctanos
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

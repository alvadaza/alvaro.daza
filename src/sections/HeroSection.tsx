"use client";
import { CheckIcon, ChevronRightIcon, VideoIcon } from "lucide-react";
import TiltedImage from "../components/TiltImage";
import { motion } from "motion/react";

export default function HeroSection() {
  const specialFeatures = [
    "Sin tarjeta de crédito",
    "Garantia de devolución de dinero de 30 días",
    "Creacion paginas web personalizadas",
    "Soporte 24/7",
  ];

  return (
    <div
      id="hero-section"
      className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="absolute top-30 -z-10 left-1/4 size-72 bg-pink-600 blur-[300px]" ></div>
      <motion.a
        href="https://tiendavirtualprotech.netlify.app/"
        className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 text-pink-100 bg-pink-200/15 mb-5"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 320,
          damping: 70,
          mass: 1,
        }}
      >
        <span className="bg-pink-800 text-white text-xs px-3.5 py-1 rounded-full">
          NEW
        </span>
        <p className="flex items-center gap-1">
          <span>Tienda Online </span>
          <ChevronRightIcon
            size={16}
            className="group-hover:translate-x-0.5 transition duration-300"
          />
        </p>
      </motion.a>
      <motion.h1
        className="text-3xl leading-tight sm:text-4xl sm:leading-snug md:text-5xl md:leading-[1.15] font-semibold max-w-2xl text-center px-2"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
      >
        ProTech Equipos y Suministros{" "}
        <span className="move-gradient px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 break-all text-sm sm:text-base">
          www.protechsolucionesplus.com
        </span>
      </motion.h1>
      <motion.p
        className="text-base text-center text-slate-200 max-w-lg mt-6"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 320,
          damping: 70,
          mass: 1,
        }}
      >
        Hola soy Alvaro Daza Holguin soy ingeniero de sistemas, te invito a que
        conozcas más sobre los servicio y el portafolio que ofrecemos. <br />
        <br />
        Estamos ubicados en Bogotá Colombia
      </motion.p>
      <motion.div
        className="flex items-center gap-4 mt-8"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      >
       <a
  href="https://wa.me/573133574711?text=Hola%20quiero%20empezar%20con%20sus%20servicios"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white rounded-full px-7 h-11 transition"
>
  Empieza ahora
</a>

<a
  href="https://youtu.be/5Od4M0KcQOw"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 border border-pink-900 hover:bg-pink-950/50 transition rounded-full px-6 h-11 text-white"
>
  <VideoIcon strokeWidth={1} />
  <span>Ver video</span>
</a>
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-14 mt-12">
        {specialFeatures.map((feature, index) => (
          <motion.p
            className="flex items-center gap-2"
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.3 }}
          >
            <CheckIcon className="size-5 text-pink-600" />
            <span className="text-slate-400">{feature}</span>
          </motion.p>
        ))}
      </div>
      <TiltedImage />
    </div>
  );
}

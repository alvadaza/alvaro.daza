'use client'
import SectionTitle from "../components/SectionTitle"
import { servicesData } from "../data/services"
import { CheckIcon } from "lucide-react"
import { motion } from "motion/react"

export default function ServicesSection() {
  return (
    <div id="pricing" className="px-4 md:px-16 lg:px-24 xl:px-32 mt-10">
      <SectionTitle
        text1="Servicios"
        text2="Nuestro Portafolio"
        text3="Soluciones tecnológicas claras, profesionales y con precios accesibles."
        textWhy="¿Por qué elegir ProTech?"
      />

      <div className="flex flex-wrap items-center justify-center gap-8 mt-20">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className={`
              w-80
              text-left
              border
              border-slate-800
              p-6
              pb-10
              rounded-xl
              ${service.highlighted ? "bg-pink-950/60 relative" : "bg-slate-950"}
            `}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 320,
              damping: 70,
            }}
          >
            {service.highlighted && (
              <span className="absolute -top-3 left-4 px-3 py-1 text-xs rounded-full bg-pink-500 text-white">
                Recomendados
              </span>
            )}

            <h3 className="text-xl font-semibold text-white">
              {service.title}
            </h3>

            <p className="text-pink-400 text-2xl font-semibold mt-3">
              {service.price}
            </p>

            <p className="text-slate-300 text-sm mt-4">
              {service.description}
            </p>

            <ul className="mt-6 space-y-2">
              {service.includes.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-300">
                  <CheckIcon className="size-4 text-pink-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/573133574711"
              target="_blank"
              className={`
                block
                text-center
                mt-8
                py-2.5
                rounded-md
                font-medium
                transition
                ${service.highlighted
                  ? "bg-white text-pink-600 hover:bg-slate-200"
                  : "bg-pink-600 hover:bg-pink-700 text-white"}
              `}
            >
              Consultar por WhatsApp
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

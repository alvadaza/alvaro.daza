import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Diseño y Desarrollo Web",
    description:
      "Creamos páginas web modernas, rápidas y adaptadas a tu negocio para atraer más clientes y aumentar tu presencia digital.",
    image: "/assets/web-removebg.webp",
    action: {
      label: "Hablar por WhatsApp",
      link: "https://wa.me/573133574711?text=Hola%20quiero%20información%20sobre%20sus%20servicios%20de%20diseño%20y%20desarrollo%20web.",
    },
  },
  {
    title: "Mantenimiento de Computadores",
    description:
      "Servicio técnico preventivo y correctivo para garantizar el rendimiento y la seguridad de tus equipos.",
    image: "/assets/computadores.webp",
    action: {
      label: "Solicitar soporte",
      link: "https://wa.me/573133574711?text=Hola%20quiero%20solicitar%20soporte%20técnico%20para%20mantenimiento%20de%20computadores.",},
  },
  {
    title: "Venta de Suministros de Cómputo",
    description:
      "Ofrecemos equipos, accesorios y suministros tecnológicos de marcas reconocidas y alta calidad.",
    image: "/assets/computer-suministro.webp",
    action: {
      label: "Ver catálogo",
      link: "https://tiendavirtualprotech.netlify.app/",
    },
  },
];


export default function Services() {
  return (
    <section id="services" className="relative mt-32 max-w-7xl mx-auto px-6 space-y-32 ">
      <h2 className="text-4xl font-bold text-white text-center mb-16">
        Nuestros Servicios
      </h2>
      
      {/* Glow general */}
      <div className="absolute -z-10 w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full top-0 left-1/2 -translate-x-1/2" />

      {services.map((service, index) => {
        const isReverse = index % 2 !== 0;

        return (
          <motion.div
            key={index}
            className={`
              grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
              ${isReverse ? "lg:flex-row-reverse" : ""}
            `}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            {/* Texto */}
            <div className={`${isReverse ? "lg:order-2" : ""}`}>
              <h3 className="text-3xl font-semibold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                {service.description}
              </p>

              <a
                href={service.action.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 mt-6
                  text-pink-500 font-medium
                  hover:text-pink-400 transition
                "
              >
                {service.action.label}
                <ArrowUpRight className="size-5" />
              </a>
            </div>

            {/* Imagen */}
            <motion.div
  className="
    relative
    flex items-center justify-center
    mt-10 lg:mt-0
    margin-auto
  "
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
>
  {/* Glow controlado */}
  <div className="
    absolute
    inset-0
    bg-pink-600/20
    blur-[120px]
    rounded-full
  " />

  {/* Card / device */}
  <div className="
    relative
    bg-pink-950/50
    border border-pink-600/30
    rounded-3xl
    p-6
    shadow-2xl
    max-w-sm
  ">
    <img
      src={service.image}
      alt={service.title}
      className="
        w-full
        h-auto
        object-contain
        rounded-2xl
      "
    />
  </div>
</motion.div>

          </motion.div>
        );
      })}
    </section>
  );
}

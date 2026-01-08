import { footerData } from "../data/footer";
import { DribbbleIcon, FacebookIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import { motion } from "motion/react";
import type { IFooterLink } from "../types";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { lenisInstance } from "../components/LenisScroll";



export default function Footer() {
    const navigate = useNavigate();

    const handleFooterClick = (href: string) => (e: React.MouseEvent) => {

    // ✅ Si es una página REAL → dejar que React Router navegue
    if (!href.includes("#")) {
        return;
    }

    // ⛔ Solo prevenimos para anclas
    e.preventDefault();

    // Siempre vamos primero al home
    navigate("/");

    // Scroll al inicio
    if (href === "/" || href === "/#hero-section") {
        lenisInstance?.scrollTo(0);
        return;
    }

    // Scroll a secciones
    const id = href.replace("/#", "").replace("#", "");

    setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
            lenisInstance?.scrollTo(target);
        }
    }, 100);
};

    return (
        <footer className="flex flex-wrap justify-center md:justify-between overflow-hidden gap-10 md:gap-20 mt-40 py-6 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500">
            <motion.div className="flex flex-wrap items-start gap-10 md:gap-35"
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <a href="https://protechsolucionesplus.com/" target="_blank" rel="noreferrer">
                    <img className="size-8 aspect-square" src="/assets/icnonopro.png" alt="footer logo" width={32} height={32} />
                </a>
                {footerData.map((section, index) => (
    <div key={index}>
        <p className="text-slate-100 font-semibold">{section.title}</p>
        <ul className="mt-2 space-y-2">
            {section.links.map((link: IFooterLink, index: number) => (
                <li key={index}>
                    <Link
                        to={link.href}
                        onClick={handleFooterClick(link.href)}
                        className="hover:text-pink-600 transition"
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
))}
            </motion.div>
            <motion.div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end"
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <p className="max-w-60">Porque cada cliente merece atención real, sin importar cuántos sean.</p>
                <div className="flex items-center gap-4 mt-3">
                    <a href="https://protechsolucionesplus.com/" target="_blank" rel="noreferrer">
                        <DribbbleIcon className="size-5 hover:text-pink-500" />
                    </a>
                    <a href="https://www.linkedin.com/in/alvaro-daza-bb1747140" target="_blank" rel="noreferrer">
                        <LinkedinIcon className="size-5 hover:text-pink-500" />
                    </a>
                    <a href="https://www.facebook.com/ing.alvaro.daza/" target="_blank" rel="noreferrer">
                        <FacebookIcon className="size-5 hover:text-pink-500" />
                    </a>
                    <a href="https://www.youtube.com/@ingAlvaroDaza" target="_blank" rel="noreferrer">
                        <YoutubeIcon className="size-6 hover:text-pink-500" />
                    </a>
                </div>
                <p className="mt-3 text-center">&copy; {new Date().getFullYear()} <a href="https://protechsolucionesplus.com/">Alvaro Daza</a></p>
            </motion.div>
        </footer>
    );
}
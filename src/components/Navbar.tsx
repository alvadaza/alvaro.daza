import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { navlinks } from "../data/navlinks";
import type { INavLink } from "../types";
import { NavLink, useNavigate } from "react-router-dom";
import { lenisInstance } from "../components/LenisScroll";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavClick = (link: INavLink) => (e: React.MouseEvent) => {
        e.preventDefault(); // ⛔ evita que React Router ignore el cambio

        // 🔹 Siempre ir al home
        navigate("/");

        // 🔹 Cerrar menú móvil
        setIsOpen(false);

        // 🔹 Inicio → subir al top
        if (link.href === "/") {
            lenisInstance?.scrollTo(0);
            return;
        }

        // 🔹 Secciones con #
        if (link.href.includes("#")) {
            const id = link.href.split("#")[1];

            // pequeño delay para asegurar render
            setTimeout(() => {
                const target = document.getElementById(id);
                if (target) {
                    lenisInstance?.scrollTo(target);
                }
            }, 50);
        }
    };

    return (
        <>
            <motion.nav
                className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <a href="/">
                    <img
                        className="h-20 w-auto"
                        src="assets/Protechv.webp"
                        alt="logo"
                        width={130}
                        height={34}
                    />
                </a>

                {/* DESKTOP */}
                <div className="hidden md:flex items-center gap-8">
                    {navlinks.map((link: INavLink) => (
                        <NavLink
                            key={link.name}
                            to={link.href}
                            onClick={handleNavClick(link)}
                            className="hover:text-pink-500 transition"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* MOBILE BUTTON */}
                <button onClick={() => setIsOpen(true)} className="md:hidden">
                    <MenuIcon size={26} />
                </button>
            </motion.nav>

            {/* MOBILE MENU */}
            <div
                className={`fixed inset-0 z-50 bg-black/40 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {navlinks.map((link: INavLink) => (
                    <NavLink
                        key={link.name}
                        to={link.href}
                        onClick={handleNavClick(link)}
                        className="text-white"
                    >
                        {link.name}
                    </NavLink>
                ))}

                <button
                    onClick={() => setIsOpen(false)}
                    className="bg-pink-600 hover:bg-pink-700 text-white rounded-md p-2"
                >
                    <XIcon />
                </button>
            </div>
        </>
    );
}

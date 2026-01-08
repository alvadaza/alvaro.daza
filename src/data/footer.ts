import type { IFooter } from "../types";

export const footerData: IFooter[] = [
    {
        title: "Product",
        links: [
            { name: "Inicio", href: "#hero-section" },
            { name: "Soporte", href: "#contacto" },
            { name: "Precios", href: "#pricing" },
            { name: "Características", href: "#features" },
            { name: "Servicios", href: "#services" },
        ]
    },
    {
        title: "Resources",
        links: [
            { name: "Compañia", href: "#company" },
            { name: "Blogs", href: "#blogs" },
            { name: "Comunidad", href: "#testimonials" },
            { name: "About", href: "#about" },
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy", href: "#privacy" },
            { name: "Terms", href: "#terms" },
        ]
    }
];
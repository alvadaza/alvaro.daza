import type { IFooter } from "../types";

export const footerData: IFooter[] = [
    {
        title: "Producto",
        links: [
            { name: "Inicio", href: "/#hero-section" },
            { name: "Soporte", href: "/#contact" },
            { name: "Precios", href: "/#pricing" },
            { name: "Características", href: "/#features" },
            { name: "Servicios", href: "#services" },
        ]
    },
    {
        title: "Recursos",
        links: [
            { name: "Compañia", href: "/#company" },
            { name: "Blogs", href: "/#blogs" },
            { name: "Comunidad", href: "/#testimonials" },
            { name: "Acerca de", href: "/#features" },
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacidad", href: "/privacidad" },
            { name: "Términos", href: "/terminos" },
        ]
    }
];
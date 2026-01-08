import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../data/testimonial";
import type { ITestimonial } from "../types";
import Marquee from "react-fast-marquee";

export default function TestimonialSection() {
    return (
        <div id="testimonials" className="px-4 md:px-16 lg:px-24 xl:px-32 mt-15">
            <SectionTitle text1="Nuestros Clientes" text2="No te quedes solo con nuestras palabras" text3="Escucha lo que nuestros clientes dicen sobre nosotros. Siempre estamos buscando maneras de mejorar. Si tienes una experiencia positiva con nosotros, deja una reseña." textWhy="" />

            <Marquee className="max-w-5xl mx-auto mt-11" gradient={true} speed={25} gradientColor="#000">
                <div className="flex items-center justify-center py-5 overflow-hidden">
                    {[...testimonialsData, ...testimonialsData].map((testimonial: ITestimonial, index: number) => (
                        <TestimonialCard key={index} index={index} testimonial={testimonial} />
                    ))}
                </div>
            </Marquee>
            <Marquee className="max-w-5xl mx-auto" gradient={true} speed={25} direction="right" gradientColor="#000">
                <div className="flex items-center justify-center py-5 overflow-hidden">
                    {[...testimonialsData, ...testimonialsData].map((testimonial: ITestimonial, index: number) => (
                        <TestimonialCard key={index} index={index} testimonial={testimonial} />
                    ))}
                </div>
            </Marquee>

        </div>
    );
}
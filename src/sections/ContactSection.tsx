'use client'
import SectionTitle from "../components/SectionTitle";
import { ArrowRightIcon, MailIcon, UserIcon } from "lucide-react";
import { motion } from "motion/react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


emailjs.init("f1cXeXqFCX_1rxPyc");

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const message = data.get("message") as string;

  emailjs
    .send(
      "service_vjrfehs",
      "template_huggrbh",
      {
        name,
        email,
        message,
        time: new Date().toLocaleString("es-CO"),
      }
    )
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarnos. Pronto nos comunicaremos contigo.",
        confirmButtonColor: "#ec4899",
      });

      form.reset();
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Ups… algo salió mal",
        text: "No se pudo enviar el mensaje. Intenta nuevamente.",
        confirmButtonColor: "#dc2626",
      });
    });
};




export default function ContactSection() {
    return (
        <div id="contacto" className="px-4 md:px-16 lg:px-24 xl:px-32 mt-10">
            <SectionTitle text1="Contacto" text2="Ponte en contacto con nosotros" text3="¿Listo para hacer crecer tu marca? Conectemos y construyamos algo excepcional juntos."  textWhy=""/>
            <form onSubmit={sendEmail} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto text-slate-300 mt-16 w-full' >
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium'>Te llamas</p>
                    <div className='flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500'>
                        <UserIcon className='size-5' />
                        <input name='name' type="text" placeholder='Introduce tu nombre' className='w-full p-3 outline-none' />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium'>ID de correo electrónico</p>
                    <div className='flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500'>
                        <MailIcon className='size-5' />
                        <input name='email' type="email" placeholder='Introduce tu correo electrónico' className='w-full p-3 outline-none' />
                    </div>
                </motion.div>

                <motion.div className='sm:col-span-2'
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium'>Mensaje</p>
                    <textarea name='message' rows={8} placeholder='Introduce tu mensaje' className='focus:border-pink-500 resize-none w-full p-3 outline-none rounded-lg border border-slate-700' />
                </motion.div>

                <motion.button type='submit' className='w-max flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-10 py-3 rounded-full'
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    Enviar
                    <ArrowRightIcon className="size-5" />
                </motion.button>
            </form>
        </div>
    );
}
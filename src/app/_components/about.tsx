'use client'
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import Image from "next/image";
import { Check, MapPin, ClipboardList, FileText, ShieldCheck } from "lucide-react";
import about1Img from '../../../public/about1.jpeg'
import about2Img from '../../../public/about2.jpeg'

import { motion } from 'motion/react'
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from "@/animations";

const WHATSAPP_URL =
    "https://wa.me/5524992764964?text=" +
    encodeURIComponent("Olá! Gostaria de agendar uma visita para fazer um orçamento de ar-condicionado.");

const differentials = [
    "Instalação segura e técnica, com padrão de qualidade",
    "Teste de estanqueidade e procedimento de vácuo",
    "Testes finais de funcionamento antes da entrega",
    "Do planejamento à entrega, com garantia",
    "Atendimento em Valença e região",
];

const steps = [
    {
        icon: ClipboardList,
        title: "Visita técnica",
        text: "Vamos até você e avaliamos o ambiente.",
    },
    {
        icon: FileText,
        title: "Orçamento",
        text: "Indicamos quantos aparelhos, o modelo ideal e o valor da instalação.",
    },
    {
        icon: ShieldCheck,
        title: "Instalação com garantia",
        text: "Instalamos, testamos tudo e entregamos funcionando.",
    },
];

export function About() {
    return (
        <section id='sobre' className="bg-slate-50 py-24">
            <div className="container mx-auto px-4">
                <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>

                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.35 }}
                        className="relative"
                    >
                        <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-2xl">
                            <Image
                                src={about1Img}
                                alt="Técnico da WC Refrigeração realizando instalação de ar-condicionado"
                                fill
                                quality={90}
                                className="object-cover duration-300 hover:scale-110"
                            />
                        </div>

                        <div className="absolute -bottom-8 right-4 h-40 w-40 overflow-hidden rounded-lg border-4 border-white shadow-xl">
                            <Image
                                src={about2Img}
                                alt="Equipamento de ar-condicionado instalado pela WC Refrigeração"
                                fill
                                quality={90}
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.35 }}
                        className="mt-8 space-y-6"
                    >
                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                            Sobre a WC
                        </span>
                        <h2 className="text-4xl font-bold text-slate-900">
                            Refrigeração e climatização com padrão técnico
                        </h2>

                        <p className="leading-8 text-slate-600">
                            A WC Refrigeração e Climatização cuida de todo o ciclo do seu ar-condicionado:
                            projeto, instalação, manutenção e higienização. Atendemos residências, comércios,
                            empresas, hospitais e laboratórios em Valença e região, sempre com testes,
                            garantia e o cuidado de quem quer deixar o seu conforto em boas mãos.
                        </p>

                        <motion.ul variants={staggerContainer} className="space-y-4">
                            {differentials.map((item) => (
                                <motion.li key={item} variants={fadeUp} className="flex items-center gap-2 text-slate-700">
                                    <Check className="h-5 w-5 shrink-0 text-blue-600" />
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
                            >
                                <WhatsappLogoIcon className="h-5 w-5 text-white" />
                                Contato via WhatsApp
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="#contato"
                                className="flex items-center gap-2 rounded-xl border border-blue-600 px-5 py-3 font-semibold text-blue-600 transition duration-300 hover:bg-blue-600 hover:text-white"
                            >
                                <MapPin className="h-5 w-5" />
                                Área de Atendimento
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Como funciona */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-24"
                >
                    <motion.h3 variants={fadeUp} className="mb-10 text-center text-2xl font-bold text-slate-900 md:text-3xl">
                        Como funciona
                    </motion.h3>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                variants={fadeUp}
                                className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                            >
                                <span className="absolute right-6 top-4 text-5xl font-bold text-blue-600/10">
                                    {index + 1}
                                </span>
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                                    <step.icon className="h-6 w-6" />
                                </div>
                                <h4 className="text-lg font-bold text-slate-800">{step.title}</h4>
                                <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
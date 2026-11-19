'use client'
import Image from "next/image";
import { Check } from "lucide-react";
import about1Img from '../../../public/about1.jpeg'
import about2Img from '../../../public/about2.jpeg'

import { motion } from 'motion/react'
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from "@/animations";

const differentials = [
    "Instalação segura e técnica, com padrão de qualidade",
    "Teste de estanqueidade e procedimento de vácuo",
    "Testes finais de funcionamento antes da entrega",
    "Do planejamento à entrega, com garantia",
    "Atendimento em Valença e região",
];

export function About() {
    return (
        <section id='sobre' className="relative overflow-hidden bg-white py-20 lg:py-24">
            <div className="relative mx-auto w-full max-w-6xl px-4">
                <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14'>

                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.35 }}
                        className="relative mb-8 lg:mb-0"
                    >
                        <div className="relative h-[22rem] w-full overflow-hidden rounded-3xl shadow-2xl sm:h-[25rem] lg:h-[28rem]">
                            <Image
                                src={about1Img}
                                alt="Técnico da WC Refrigeração realizando instalação de ar-condicionado"
                                fill
                                quality={90}
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        <div className="absolute -bottom-8 right-6 h-36 w-36 overflow-hidden rounded-2xl border-4 border-white shadow-xl lg:h-40 lg:w-40">
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
                        className="space-y-5"
                    >
                        <span className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">
                            Sobre a WC
                        </span>
                        <h2 className="text-2xl font-bold leading-tight text-navy-900 sm:text-3xl lg:text-4xl">
                            Refrigeração e climatização com padrão técnico
                        </h2>

                        <div className="space-y-4 text-base leading-7 text-slate-600">
                            <p>
                                A WC Refrigeração e Climatização cuida de todo o ciclo do seu
                                ar-condicionado: projeto, instalação, manutenção e higienização,
                                sempre com padrão técnico e atenção aos detalhes que garantem
                                o funcionamento correto do equipamento.
                            </p>
                            <p>
                                Atendemos residências, comércios, empresas, hospitais e
                                laboratórios na cidade de Valença e região, com testes e garantia em
                                todas as etapas do serviço.
                            </p>
                        </div>

                        <motion.ul variants={staggerContainer} className="space-y-3">
                            {differentials.map((item) => (
                                <motion.li key={item} variants={fadeUp} className="flex items-center gap-3 text-base text-slate-700">
                                    <Check className="h-5 w-5 shrink-0 text-cyan-600" />
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
"use client";

import { services } from "./services";
import { ServiceCard } from "./ServiceCard";

import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/animations";

import { SectionFade } from "@/components/SectionFade";

const WHATSAPP_NUMBER = "5524992764964";

export function Services() {
    return (
        <section id="servicos" className="scroll-mt-30 relative overflow-hidden  bg-gradient-to-br from-white via-ice-50 to-cyan-50 py-12">
              {/* manchas de cor ao fundo */}
              <div className="absolute -top-32 -left-32 h-[290px] w-[290px] rounded-full bg-blue-200/30 blur-3xl" />
              <div className="absolute -bottom-32 -right-32 h-[380px] w-[380px] rounded-full bg-cyan-200/40 blur-3xl" />
              <SectionFade position="top" />
              <SectionFade position="bottom" />
                        

            <div className="mx-auto w-full max-w-6xl px-4">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-10 text-center"
                >
                    <motion.span variants={fadeUp} className="text-2xl font-semibold uppercase tracking-[0.3em] text-cyan-600">
                        Nossos Serviços
                    </motion.span>

                    <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold text-slate-800 md:text-4xl">
                        Tudo para o conforto do seu ambiente
                    </motion.h2>

                    <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-xl text-base space-y-5 leading-7 text-slate-600">
                        Da instalação à manutenção, passando por projeto, infraestrutura e higienização.
                        Atendemos residências, comércios e empresas em Valença e região, com padrão técnico e garantia.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {services.map((service) => (
                     <motion.div key={service.id} variants={fadeUp} className="h-full">
                        <ServiceCard
                                title={service.title}
                                description={service.description}
                                image={service.image}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
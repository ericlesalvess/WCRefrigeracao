"use client";

import { services } from "./services";
import { ServiceCard } from "./ServiceCard";

import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/animations";

const WHATSAPP_NUMBER = "5524992764964";

export function Services() {
    return (
        <section id="servicos" className="scroll-mt-30 bg-slate-50 py-16">
            <div className="container mx-auto px-4">

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-14 text-center"
                >
                    <motion.span variants={fadeUp} className="text-3xl font-semibold uppercase tracking-[0.3em] text-blue-600">
                        Nossos Serviços
                    </motion.span>

                    <motion.h2 variants={fadeUp} className="mt-5 text-3xl font-bold text-slate-800 md:text-5xl">
                        Tudo para o conforto do seu ambiente
                    </motion.h2>

                    <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-2xl leading-8 text-slate-600">
                        Da instalação à manutenção, passando por projeto, infraestrutura e higienização.
                        Atendemos residências, comércios e empresas em Valença e região, com padrão técnico e garantia.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {services.map((service) => (
                        <motion.div key={service.id} variants={fadeUp} className="h-full">
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                image={service.image}
                                button={service.button}
                                icon={service.icon}
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMessage)}`}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
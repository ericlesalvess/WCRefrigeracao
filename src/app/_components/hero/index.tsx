'use client'
import Image from "next/image";
import { motion } from "motion/react";

import { fadeLeft, fadeRight, staggerContainer } from "@/animations";
import { WhatsappLogoIcon, MapPinIcon, ShieldCheckIcon, ClipboardTextIcon } from "@phosphor-icons/react";
import heroTecnico from "../../../../public/tecnico.jpeg";

const WHATSAPP_URL =
        "https://wa.me/5524992764964?text=" +
        encodeURIComponent("Olá! Gostaria de agendar uma visita para fazer um orçamento de ar-condicionado.");

export function Hero() {
        return (
                <section
                        id="inicio"
                        className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 pt-40 pb-20"
                >
                        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-sky-400/10 blur-3xl" />
                        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-sky-400/10 blur-3xl" />

                        <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2"
                        >
                                {/* texto */}
                                <motion.div variants={fadeLeft} className="z-10">

                                        <h1 className="mt-6 text-5xl font-bold leading-tight text-white lg:text-7xl">
                                                Deixe seu conforto em nossas mãos
                                        </h1>

                                        <p className="mt-8 max-w-xl text-lg leading-8 text-blue-100">
                                                Instalação, manutenção e higienização de ar-condicionado para residências,
                                                comércios e empresas em Valença e região. Do planejamento à entrega,
                                                com qualidade, testes e garantia.
                                        </p>

                                        {/* botões */}
                                        <div className="mt-10 flex flex-wrap gap-5">
                                                <motion.a
                                                        href={WHATSAPP_URL}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ scale: 1.04 }}
                                                        whileTap={{ scale: 0.97 }}
                                                        className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-800 shadow-xl"
                                                >
                                                        <WhatsappLogoIcon size={24} weight="fill" className="text-[#25d366]" />
                                                        Agendar Visita e Orçamento
                                                </motion.a>

                                                <motion.a
                                                        href="#servicos"
                                                        whileHover={{ scale: 1.04 }}
                                                        whileTap={{ scale: 0.97 }}
                                                        className="inline-flex items-center rounded-2xl border border-white/40 px-8 py-4 font-semibold text-white backdrop-blur-sm"
                                                >
                                                        Nossos Serviços
                                                </motion.a>
                                        </div>

                                        {/* mini cards */}
                                        <div className="mt-14 flex flex-wrap gap-6">
                                                <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-md">
                                                        <MapPinIcon size={28} weight="fill" className="text-sky-300" />
                                                        <p className="mt-2 text-lg font-bold text-white">Valença e região</p>
                                                        <span className="mt-1 block text-sm text-blue-200">Área de atendimento</span>
                                                </div>

                                                <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-md">
                                                        <ClipboardTextIcon size={28} weight="fill" className="text-sky-300" />
                                                        <p className="mt-2 text-lg font-bold text-white">Visita técnica</p>
                                                        <span className="mt-1 block text-sm text-blue-200">Orçamento no local</span>
                                                </div>

                                                <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-md">
                                                        <ShieldCheckIcon size={28} weight="fill" className="text-sky-300" />
                                                        <p className="mt-2 text-lg font-bold text-white">Com garantia</p>
                                                        <span className="mt-1 block text-sm text-blue-200">Testes e padrão WC</span>
                                                </div>
                                        </div>
                                </motion.div>

                                <motion.div variants={fadeRight} className="relative flex justify-center">
                                        <div className="absolute h-[520px] w-[520px] rounded-full bg-sky-400/10 blur-2xl" />
                                        <Image
                                                src={heroTecnico}
                                                alt="Técnico da WC Refrigeração instalando ar-condicionado"
                                                priority
                                                className="relative z-10 hidden w-full max-w-[650px] object-contain lg:block"
                                        />
                                </motion.div>
                        </motion.div>
                </section>
        );
} 

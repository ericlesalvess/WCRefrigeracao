'use client'

import Image from "next/image";
import { motion } from "motion/react";
import { heroSlides } from "./heroSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { SectionFade } from "@/components/SectionFade";
import { fadeLeft, fadeRight, staggerContainer } from "@/animations";
import {
        WhatsappLogoIcon,
        MapPinIcon,
        ShieldCheckIcon,
        ClipboardTextIcon,
} from "@phosphor-icons/react";

const WHATSAPP_URL =
        "https://wa.me/5524992764964?text=" +
        encodeURIComponent("Olá! Gostaria de agendar uma visita para fazer um orçamento de ar-condicionado.");

const highlights = [
        { icon: MapPinIcon, title: "Valença e região", text: "Área de atendimento" },
        { icon: ClipboardTextIcon, title: "Visita técnica", text: "Orçamento no local" },
        { icon: ShieldCheckIcon, title: "Com garantia", text: "Testes e padrão WC" },
];

export function Hero() {
        return (
                <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-white via-ice-50 to-cyan-50 pt-4 pb-12 sm:pt-16 lg:pt-36 lg:pb-16">
                        {/* manchas de cor ao fundo */}
                        <div className="absolute -top-32 -right-32 h-[380px] w-[380px] rounded-full bg-cyan-200/40 blur-3xl" />
                        <div className="absolute -bottom-32 -left-32 h-[290px] w-[290px] rounded-full bg-blue-200/30 blur-3xl" />
                        <SectionFade position="bottom" />

                        <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 min-[1440px]:grid-cols-2 lg:gap-10"
                        >
                                {/* texto */}
                                <motion.div variants={fadeLeft} className="z-10 w-full">

                                        <h1 className="mt-4 text-4xl font-bold leading-tight text-navy-900 sm:text-5xl lg:text-6xl">
                                                Deixe seu <span className="text-cyan-600">conforto</span> em nossas mãos
                                        </h1>

                                        <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 lg:text-lg">
                                                Instalação, manutenção e higienização de ar-condicionado para residências,
                                                comércios e empresas na cidade de Valença e região. Do planejamento à entrega,
                                                com qualidade, testes e garantia.
                                        </p>

                                        {/* botões */}
                                        <div className="mt-8 flex flex-wrap gap-3">
                                                <motion.a
                                                        href={WHATSAPP_URL}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ scale: 1.04 }}
                                                        whileTap={{ scale: 0.97 }}
                                                        className="inline-flex items-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/30 transition-colors hover:bg-cyan-700 lg:px-8 lg:py-4 lg:text-base"
                                                >
                                                        <WhatsappLogoIcon size={20} weight="fill" />
                                                        Agendar Visita e Orçamento
                                                </motion.a>

                                                <motion.a
                                                        href="#servicos"
                                                        whileHover={{ scale: 1.04 }}
                                                        whileTap={{ scale: 0.97 }}
                                                        className="inline-flex items-center rounded-2xl border-2 border-navy-900/20 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-900 hover:bg-navy-900 hover:text-white lg:px-8 lg:py-4 lg:text-base"
                                                >
                                                        Nossos Serviços
                                                </motion.a>
                                        </div>

                                        {/* mini cards */}
                                        <div className="mt-8 lg:mt-12 grid grid-cols-3 gap-3">
                                                {highlights.map((item) => (
                                                        <div
                                                                key={item.title}
                                                                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                                                        >
                                                                <item.icon size={22} weight="fill" className="text-cyan-600" />
                                                                <p className="mt-1.5 text-sm font-bold text-navy-900">{item.title}</p>
                                                                <span className="block text-xs text-slate-500">{item.text}</span>
                                                        </div>
                                                ))}
                                        </div>
                                </motion.div>

                                {/* imagem / slider de trabalhos (APARECE APENAS EM 1440p+ E FICA OCULTO EM LAPTOPS DE 1024px E MENORES) */}
                                <motion.div variants={fadeRight} className="relative mx-auto hidden min-[1440px]:block w-full max-w-[520px]">

                                        {/* moldura deslocada atrás da foto */}
                                        <div className="absolute -bottom-5 -right-5 h-full w-full rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-3xl rounded-bl-3xl border-2 border-cyan-500/40" />

                                        <div className="relative aspect-[4/3] overflow-hidden rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-3xl rounded-bl-3xl shadow-2xl shadow-navy-900/20 lg:aspect-[4/5]">
                                                <Swiper
                                                        modules={[Autoplay, EffectFade, Pagination]}
                                                        effect="fade"
                                                        fadeEffect={{ crossFade: true }}
                                                        loop
                                                        speed={2000}
                                                        autoplay={{
                                                                delay: 2500,
                                                                pauseOnMouseEnter: true,
                                                                disableOnInteraction: false,
                                                        }}
                                                        pagination={{ clickable: true }}
                                                        style={{
                                                                "--swiper-pagination-color": "#ffffff",
                                                                "--swiper-pagination-bullet-inactive-color": "#ffffff",
                                                                "--swiper-pagination-bullet-inactive-opacity": "0.5",
                                                                "--swiper-pagination-bullet-size": "9px",
                                                                "--swiper-pagination-bullet-horizontal-gap": "5px",
                                                        } as React.CSSProperties}
                                                        className="h-full w-full"
                                                >
                                                        {heroSlides.map((slide, index) => (
                                                                <SwiperSlide key={slide.id}>
                                                                        <div className="relative h-full w-full">
                                                                                <Image
                                                                                        src={slide.image}
                                                                                        alt={slide.alt}
                                                                                        fill
                                                                                        priority={index === 0}
                                                                                        sizes="(min-width: 1440px) 520px, 100vw"
                                                                                        className="object-cover"
                                                                                        style={{ objectPosition: slide.objectPosition ?? "center" }}
                                                                                />

                                                                                {/* degradê para a legenda ficar legível */}
                                                                                <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-transparent to-navy-950/40" />
                                                                        </div>
                                                                </SwiperSlide>
                                                        ))}
                                                </Swiper>
                                        </div>
                                </motion.div>

                        </motion.div>
                </section>
        );
}
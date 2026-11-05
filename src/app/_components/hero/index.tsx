'use client'
import Image from "next/image";
import { motion } from "motion/react";

import { fadeLeft, fadeRight, fadeUp,staggerContainer} from "@/animations";
import { WhatsappLogoIcon, ArrowDownIcon } from "@phosphor-icons/react";
import heroDog from "../../../../public/dog-hero.png"
import { Star } from "@phosphor-icons/react";

export function Hero(){
        return(
                <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 pt-40 pb-20 ">
                        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl"/>
                        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-white/5 blur-3xl"/>

                        <motion.div variants={staggerContainer} initial="hidden" animate="visible"
                                className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

                                {/* texto */}

                                <motion.div variants={fadeLeft} className="z-10">

                                        <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight text-white">
                                                Cuidamos do seu pet como parte da família
                                        </h1>

                                        <p className="mt-8 text-lg leading-8 text-emerald-50 max-w-xl">
                                          Atendimento humanizado, tecnologia de ponta,
                                        consultas, cirurgias, exames e internação em um
                                        ambiente moderno pensado para oferecer conforto
                                        e segurança ao seu melhor amigo.      
                                        </p>

                                  {/* botoẽs */}

                                        <div className="mt-10 flex flex-wrap gap-5" >
                                                <motion.a href="#contato" whileHover={{scale: 1.04}} whileTap={{scale: 0.97 }}
                                                className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-emerald-700 shadow-xl" >
                                                     <WhatsappLogoIcon size={24} weight="fill" />
                                                        Agendar Consulta
                                                </motion.a>
                                                
                                                <motion.a href="#sobre" whileHover={{scale: 1.04}} whileTap={{scale: 0.97 }}
                                                className="inline-flex items-center rounded-2xl border border-white/40 px-8 py-4 font-semibold text-white backdrop-blur-sm">
                                                        Conheça a Clínica
                                                </motion.a>
                                        </div>    

                                  {/* mini cards */}     
                                        <div className="mt-14 flex flex-wrap gap-6">

                                                <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-md">
                                                        <div className="flex items-center gap-2">
                                                        <p className="text-3xl font-bold text-white">
                                                                4.9
                                                        </p>
                                                        
                                                        {/* Estrelinhas */}
                                                        <div className="flex gap-0.5 text-amber-400">
                                                                <Star size={18} weight="fill" />
                                                                <Star size={18} weight="fill" />
                                                                <Star size={18} weight="fill" />
                                                                <Star size={18} weight="fill" />
                                                                <Star size={18} weight="fill" />
                                                        </div>
                                                </div>
                                                <span className="text-emerald-100 text-sm block mt-1">
                                                Avaliações no Google
                                                </span>
                                                </div>
                                                
                                                <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-md">
                                                        <p className="text-3xl font-bold text-white">
                                                           +5 mil
                                                        </p>
                                                        <span className="text-emerald-100 text-sm block mt-1">
                                                           Pets Atendidos
                                                        </span>
                                                </div>

                                                <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-md">
                                                        <p className="text-3xl font-bold text-white">
                                                           24h
                                                        </p>
                                                        <span className="text-emerald-100 text-sm block mt-1">
                                                           Emergência
                                                        </span>
                                                </div>
                        
                                        </div>
                                </motion.div>

                                <motion.div variants={fadeRight} className="relative flex justify-center">
                                        <div className="absolute h-[520px] w-[520px] rounded-full bg-white/10 blur-2xl" ></div>
                                          <Image src={heroDog} alt="Veterinaria" priority className="relative z-10 w-full max-w-[650px] object-contain hidden lg:block" />
                                </motion.div>


                        </motion.div>
                </section>
        )
}
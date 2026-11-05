'use client'
import { staggerContainer, fadeUp } from "@/animations"
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import {motion} from "motion/react"
import {MapCard} from "./MapCard"



export function Cta(){

    return(

    <section id="contato" className=" scroll-mt-15  py-15 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800">
        <div className="container mx-auto px-4">
                <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.2}}
                >
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* TEXTO */}
                        
                            <div>

                                        <motion.span
                                        variants={fadeUp}
                                        className=" text-3xl uppercase tracking-[0.3em] font-semibold text-emerald-100"
                                        >
                                            Agende uma Visita

                                        </motion.span>

                                        <motion.h2
                                        variants={fadeUp}
                                        className=" md:text-2xl mt-5 font-bold text-white leading-light "
                                        >
                                            Seu melhor amigo merece o melhor cuidado.

                                        </motion.h2>

                                        <motion.p
                                        variants={fadeUp}
                                        className="text-emerald-50 mt-3 leading-8 text-2xl max-w-xl"
                                        >
                                            Nossa equipe está pronta para receber você e seu pet
                                            com atendimento humanizado,
                                            estrutura moderna
                                            e profissionais apaixonados pelo bem-estar animal.

                                        </motion.p>

                                        <motion.a
                                        variants={fadeUp}
                                        href="https://wa.me/55SEUNUMERO"
                                        target="_blank"
                                        whileHover={{scale:1.04}}
                                        whileTap={{scale:0.97}}
                                        className="inline-flex mt-10 items-center justify-center gap-3 bg-white text-emerald-700 font-semibold px-10 py-4 rounded-2xl shadow-xl transition-all"
                                        >
                                            <WhatsappLogoIcon className='w-5 h-5' />
                                            Agendar pelo WhatsApp

                                        </motion.a>

              
                            </div>  
                    {/* MAPA */}

                    <motion.div
                    variants={fadeUp}
                    >
                        <MapCard/>
                    </motion.div>
                 </div>

            </motion.div>

        </div>

    </section>
    )
}
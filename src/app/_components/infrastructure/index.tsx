'use client'
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/animations";
import { infrastructure } from "./infrastructure";
import { InfrastructureCard } from "./InfrastructureCard";


export function Infrastructure(){
    return(
         <section id="estrutura" className=" scroll-mt-15  py-12 bg-slate-50">
             <div className="container mx-auto px-4">
                
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}}
                    className="text-center mb-16"
                >
                    <motion.h1
                        variants={fadeUp}
                        className="text-3xl text-emerald-600 uppercase tracking-[0.3em] font-semibold"
                    >
                        Nossa Estrutura
                    </motion.h1>

                    <motion.h2
                        variants={fadeUp}
                        className="text-lg max-w-2xl mx-auto text-slate-900 leading-7 mt-1"
                    >
                        Tecnologia, conforto e segurança
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="max-w-3xl mx-auto mt-1 text-slate-600  leading-7"
                    
                    >
                        Nossa clínica foi planejada para oferecer um ambiente moderno,
                        acolhedor e equipado com tecnologia para garantir o melhor
                        atendimento ao seu pet em todas as etapas do cuidado.
                    </motion.p>


                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true, amount:0.2}}
                        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] mt-5">

                            {infrastructure.map((item,index)=>(
                                <InfrastructureCard
                                    key={item.id}
                                    title={item.title}
                                    image={item.image}
                                    className={
                                        index === 0
                                        ? "lg:col-span-2 lg:row-span-2"
                                        :""
                                    }
                                
                                />                                
                            ))}
                        </motion.div>


                </motion.div>

             </div>

         </section>
    )
}
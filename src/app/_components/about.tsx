'use client'
import {WhatsappLogoIcon} from '@phosphor-icons/react/dist/ssr'
import Image from "next/image";
import { Check, MapPin } from "lucide-react";
import about1Img  from '../../../public/sobre3.jpg'
import about2Img  from '../../../public/sobre4.jpg'

import {motion} from 'motion/react'
import {fadeLeft, fadeRight, fadeUp, staggerContainer} from "@/animations";

export function About (){
    return (
        <section id='sobre' className="bg-stone-50 py-24">
           <div className="container px-4 mx-auto ">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

                <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" 
                 viewport={{
                    once:true, 
                    amount:0.35 
                 }}
                 className="relative">
                 <div className="  relative w-full h-[400px] rounded-xl rounded-3x1 overflow-hidden shadow-2xl">
                    <Image
                        src={about1Img}
                        alt="Foto Cachorro e Gato"
                        fill
                        quality={100}
                        className="object-cover hover:scale-110 duration-300"
                         priority/>
                  </div>
 
                 <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white shadow-xl">
                    <Image
                        src={about2Img}
                        alt="Foto Cachorro e Gato 2"
                        fill
                        quality={100}
                        priority/>
                  </div>

                </motion.div>

                <motion.div variants={fadeRight} initial="hidden" whileInView="visible" 
                 viewport={{
                    once:true, 
                    amount:0.35 
                 }}
                 className="space-y-6 mt-8">
                    <h2 className="text-4xl font-bold text-slate-900">SOBRE</h2>
                    
                    
                    <p className=" text-slate-600 leading-8">Fundada com o compromisso de elevar o padrão da medicina veterinária na região,
                         nossa clínica une conhecimento científico atualizado e infraestrutura hospitalar para lidar com casos de alta complexidade.
                    </p>

                    <motion.ul variants={staggerContainer} className="space-y-4">
                        
                        <motion.li variants={fadeUp} className="flex items-center gap-2">
                            <Check className="text-emerald-600" />
                            Aberto desde 2016
                        </motion.li>
                        <motion.li variants={fadeUp} className="flex items-center gap-2">
                            <Check className="text-emerald-600" />
                             Centro cirúrgico com monitoramento avançado.
                        </motion.li>
                        <motion.li variants={fadeUp} className="flex items-center gap-2">
                            <Check className="text-emerald-600" />
                            🩺 Equipe multidisciplinar com mais de 10 especialistas.
                        </motion.li>
                        <motion.li variants={fadeUp} className="flex items-center gap-2">
                            <Check className="text-emerald-600" />
                             🚑 Emergência 24h
                        </motion.li>
                       
                        

                    </motion.ul>

                    <motion.div variants={fadeUp} className="flex gap-2">
                        
                        <motion.a 
                                whileHover={{
                                    scale:1.03
                                }}
                                whileTap={{
                                    scale:0.97
                                }}
                                        
                                href="#"
                                 className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 w-fit">
                                <WhatsappLogoIcon className='w-5 h-5 text-white '/>
                                     Contato via WhatsApp
                        </motion.a>
                        <motion.a
                            whileHover={{
                                scale:1.03
                            }}
                            whileTap={{
                                scale:0.97
                            }}   
                           href="#"
                            className="border border-emerald-600 text-emerald-600 hover:text-white transition duration-300 px-4 py-2 rounded-xl flex items-center gap-2">
                             <MapPin className='w-5 h-5 text-black'/>
                                Endereço da Loja
                         </motion.a>
                     </motion.div>

                </motion.div>
                
                
              </div>
            </div>

        </section>
    );
}
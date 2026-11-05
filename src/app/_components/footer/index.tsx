"use client"

import { motion } from "motion/react"
import { fadeUp, staggerContainer } from "@/animations"
import { InstagramLogoIcon,FacebookLogoIcon,WhatsappLogoIcon } from "@phosphor-icons/react"

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-16">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-4">

          
          <motion.div className="col-span-2 lg:col-span-1" variants={fadeUp}>
              <h2 className="text-2xl font-bold ">Vet Service</h2>
              <p className="mt-5 text-slate-400 leading-7" >
                Atendimento veterinário humanizado,estrutura moderna e profissionais preaparados para cuidar do seu melhor amigo.
              </p>
          </motion.div>

          <motion.div className="col-span-1" variants={fadeUp}>
            
                <h3 className="font-semibold text-lg">
                   Contato
                </h3>

                <div className="mt-6 space-y-4 text-slate-400" >
                  <p>(21) 99999-9999</p>
                  <p>contato@vetservice.com.br</p>
                  <p>Segunda a Sábado</p>
                  <p>08h às 20h</p>
                </div>

          </motion.div>


          <motion.div className="col-span-1" variants={fadeUp}>

                 <h3 className="font-semibold text-lg" >
                  Endereço
                  </h3>
                 <div className="mt-6 text-slate-400 leading-7">
                      <p>
                      Rua Exemplo, 250
                      </p>
                      <p>
                          Centro
                      </p>
                      <p>
                          São Paulo - SP
                      </p>
                      <p>
                          CEP 20000-000
                      </p>
                 </div>
           </motion.div>

          <motion.div className="col-span-2 lg:col-span-1" variants={fadeUp}>

            <h3 className="font-semibold text-lg ">
              Redes Sociais
            </h3>

            <div className="flex gap-5 mt-6">
               <a 
                  href="https://instagram.com"
                  className="w-11 h-11 px-3 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-all duration-300"
                  >
                    <InstagramLogoIcon size={22}/>
               </a>

               <a 
                  href="https://facebook.com"
                  className="w-11 h-11 px-3 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-all duration-300"
                  
                  >
                  <FacebookLogoIcon size={22}/>  
               </a>

               <a
                    href="https://wa.me/55SEUNUMERO"
                   className="w-11 h-11 px-3 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-all duration-300"
                   >
                <WhatsappLogoIcon size={22}/>
                 </a>

            </div>

          </motion.div>

        </motion.div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 Vet Service. Todos os direitos reservados.
            </p>
            <p className="text-slate-500 text-sm">
                Desenvolvido por Ericles Alves
            </p>
        </div>

      </div>
    </footer>
  )
}
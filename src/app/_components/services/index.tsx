"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import {Pagination,Autoplay,Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { services } from "./services";
import { ServiceSlide } from "./ServiceSlide";

import {motion} from 'motion/react'
import { fadeUp, staggerContainer} from "@/animations";


export function Services(){

    return(

    <section id="servicos" className="scroll-mt-30 bg-slate-50 py-12">

      <div className="container mx-auto  px-4">

        <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once:true,
                    amount:0.2}} 
        className="text-center mb-14">

            <motion.span variants={fadeUp} className="  text-3xl text-emerald-600 uppercase tracking-[0.3em] font-semibold">
                Nossos Serviços
            </motion.span>

            <motion.h2 variants={fadeUp} className="text-lg md:text-5xl font-bold text-slate-800 mt-5">
            Tudo que seu pet precisa em um só lugar
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 max-w-2xl mx-auto mt-3 leading-8">
            Desde as primeiras vacinas até os cuidados na idade avançada.
            Nossa equipe está preparada para oferecer o suporte completo que o seu pet precisa,
            estrutura moderna, tecnologia de ponta e um corpo clínico especializado para garantir diagnósticos precisos e o melhor tratamento.
            </motion.p>  
        </motion.div>
         </div>
        <div className="w-full md:container md:mx-auto md:px-4" >
        <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.1}}
        transition={{delay:0.3}} 
        className="posi-seta relative">
          <Swiper

            style={{
              "--swiper-pagination-color": "#059669",
              "--swiper-pagination-bullet-inactive-color": "#94a3b8",
              "--swiper-pagination-bullet-inactive-opacity": "0.5",
              "--swiper-pagination-bullet-size": "10px", 
              "--swiper-pagination-bullet-horizontal-gap": "6px"
              } as React.CSSProperties}


              modules={[Pagination,Autoplay,Navigation]}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                768:{slidesPerView:2,
                    spaceBetween:20,
                },
                1024:{slidesPerView: 2,
                      spaceBetween:24,
                },
                1280:{slidesPerView: 3,
                      spaceBetween:30,
                },
              }}
              pagination={{ clickable:true}}
              autoplay={{
              delay:5000,
              pauseOnMouseEnter:true,
              disableOnInteraction:false
              }}
              speed={900}
              navigation={{
                  prevEl: '.seta-esquerda',
                  nextEl: '.seta-direita',
              }}
              >
          {

              services.map((service)=>(

              <SwiperSlide key={service.id}>

              <ServiceSlide
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  button={service.button}
                  icon={service.icon}
                  />
              </SwiperSlide>
              ))
          }
          </Swiper>

        {/* botão de seta esquerda */}
       <button className="seta-esquerda absolute -left-7 top-1/2 z-10 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-600 shadow-md transition-all hover:bg-emerald-600 hover:text-white disabled:opacity-50 md:h-14 md:w-14 md:-left-7 xl:-left-7">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

        {/* botão de seta direita */}
          <button className="seta-direita absolute -right-7 top-1/2 z-10 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-600 shadow-md transition-all hover:bg-emerald-600 hover:text-white disabled:opacity-50 md:h-14 md:w-14 md:-right-7 xl:-right-7">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>



        </motion.div>
     </div>
    </section>

    )
}
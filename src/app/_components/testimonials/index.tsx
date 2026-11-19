"use client"
import { motion } from "motion/react"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { testimonials } from "./testimonials";
import { TestimonialCard } from "./TestimonialCard";
import { fadeUp, staggerContainer } from "@/animations";


const isProduction = process.env.NODE_ENV === "production";
const visibleTestimonials = isProduction
    ? testimonials.filter((t) => !t.placeholder)
    : testimonials;

export function Testimonials() {
    if (visibleTestimonials.length === 0) return null;

    return (
        <section id="depoimentos" className="scroll-mt-15 bg-white py-16">
            <div className="mx-auto w-full max-w-6xl px-4">

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-10 text-center"
                >
                    <motion.span variants={fadeUp} className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">
                        Depoimentos
                    </motion.span>
                    <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold text-navy-900 md:text-4xl">
                        Quem confia na WC, recomenda
                    </motion.h2>
                    <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-xl text-base leading-7 text-slate-600">
                        Veja o que os clientes dizem sobre o atendimento, a instalação e o cuidado da nossa equipe.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: 0.3 }}
                >
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={24}
                        loop={visibleTestimonials.length > 3}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{ clickable: true }}
                        style={{
                            "--swiper-pagination-color": "#0891b2",
                            "--swiper-pagination-bullet-inactive-color": "#94a3b8",
                            "--swiper-pagination-bullet-inactive-opacity": "0.5",
                            paddingBottom: "2.5rem",
                        } as React.CSSProperties}
                    >
                        {visibleTestimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id} className="!h-auto py-4">
                                <TestimonialCard
                                    name={testimonial.name}
                                    segment={testimonial.segment}
                                    service={testimonial.service}
                                    text={testimonial.text}
                                    rating={testimonial.rating}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
}
'use client'
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { cardHover } from "@/animations/card";

interface TestimonialCardProps {
    name: string;
    segment: string;
    service: string;
    text: string;
    rating?: number;
}

export function TestimonialCard({ name, segment, service, text, rating }: TestimonialCardProps) {
    return (
        <motion.div
            className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-md"
            variants={cardHover}
            initial="rest"
            whileHover="hover"
        >
            <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-xl font-bold text-white">
                    {name.charAt(0).toUpperCase()}
                </div>

                <div>
                    <h3 className="text-lg font-bold text-navy-900">{name}</h3>
                    <p className="text-sm text-slate-500">{segment} · {service}</p>
                </div>
            </div>

            {rating ? (
                <div className="mt-5 flex gap-1" aria-label={`Nota ${rating} de 5`}>
                    {Array.from({ length: rating }).map((_, index) => (
                        <Star key={index} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
            ) : null}

            <p className="mt-5 min-h-[90px] leading-7 text-slate-600">{text}</p>

            <Quote className="absolute bottom-5 right-5 h-16 w-16 text-cyan-500/10" />
        </motion.div>
    );
}
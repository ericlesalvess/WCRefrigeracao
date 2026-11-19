'use client'
import { motion } from "motion/react"

export function MapCard() {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.25 }}
            className="h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl lg:h-[480px]"
        >
            <iframe
                title="Mapa da região de atendimento da WC Refrigeração em Valença"
                src="https://www.google.com/maps?q=Valen%C3%A7a%2C+RJ&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            />
        </motion.div>
    )
}
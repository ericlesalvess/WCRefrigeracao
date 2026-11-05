'use client'
import {motion} from "motion/react"

export function MapCard(){
    return(
        <motion.div 
            whileHover={{
                y:-8,
                scale:1.01
            }}
            transition={{
                duration:0.25
            }}
        className="bg-white rounded-3xl overflow-hidden h-[420px] shadow-xl border border-slate-200"
        >
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197353585625!2d-46.65906922417646!3d-23.56135447879988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1785281567327!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            />

        </motion.div>
    )
}
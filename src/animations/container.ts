import { Variants } from "motion/react";

export const staggerContainer: Variants ={
    hidden: {},
    visible: {
        transition:{

        staggerChildren: 0.20, //espere um tempo antes de animar o proximo filho
        delayChildren: 0.2 // delay para refinar 

        }
        
    }
}
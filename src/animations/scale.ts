import { Variants } from "motion/react"

export const ScaleIn: Variants = {

    hidden:{
        opacity:0,
        scale:0.92
    },
    visible:{
        opacity:1,
        scale:1,
        transition:{
            duration:0.9

        }
    }
}
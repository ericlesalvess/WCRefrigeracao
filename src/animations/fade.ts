import { Variants } from "motion/react";

export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 18,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7, 
            ease: "easeOut" // Opcional: deixa a animação mais suave
        },
    },
};

export const fadeLeft: Variants ={
    hidden: {
        opacity:0,
        x: -40,
    },
    visible: {
        opacity:1,
        x:0,
        transition: {
            duration:0.7,
        },
    },
};


export const fadeRight: Variants ={
    hidden: {
        opacity:0,
        x: 40,
    },
    visible: {
        opacity:1,
        x:0,
        transition: {
            duration:0.7,
        },
    },
};
import { StaticImageData } from "next/image";

import trabalho1 from "../../../../public/trabalho-1.jpeg";
import trabalho2 from "../../../../public/trabalho-2.jpeg";
import trabalho3 from "../../../../public/trabalho-3.jpeg";
import trabalho4 from "../../../../public/trabalho-4.jpeg";

export interface HeroSlide {
        id: number;
        image: StaticImageData;
        alt: string;
        label: string;           // legenda que aparece em cima da foto
        objectPosition?: string; // ajusta o enquadramento de cada foto
}

export const heroSlides: HeroSlide[] = [
        {
                id: 1,
                image: trabalho1,
                alt: "Instalação de ar-condicionado split em residência",
                label: "Instalação residencial",
        },
        {
                id: 2,
                image: trabalho2,
                alt: "Higienização de ar-condicionado realizada pela WC",
                label: "Higienização",
        },
        {
                id: 3,
                image: trabalho3,
                alt: "Instalação de ar-condicionado em comércio",
                label: "Instalação comercial",
        },
        {
                id: 4,
                image: trabalho4,
                alt: "Manutenção de ar-condicionado realizada pela WC",
                label: "Manutenção",
        },
];
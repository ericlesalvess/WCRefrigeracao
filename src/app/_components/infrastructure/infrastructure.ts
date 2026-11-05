import {StaticImageData } from 'next/image';
import consultorioImg from '../../../../public/consultorio.png';
import cirugiaImg from '../../../../public/cirurgia.png';
import internacaoImg from '../../../../public/internacao.png';

export interface InfrastructureItem{
    id:number;
    title:string;
    image:StaticImageData;
}

export const infrastructure: InfrastructureItem[] = [
    {
        id:1,
        title:"Consultórios Modernos",
        image:consultorioImg
    },

    {
        id:2,
        title:"Centro Cirúrgico",
        image:cirugiaImg
    },

    {
        id:3,
        title:"Internação",
        image:internacaoImg
    }
]
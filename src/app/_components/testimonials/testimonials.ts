import { StaticImageData } from "next/image"
import avatar1 from "../../../../public/avatar1.jpg"
import avatar2 from "../../../../public/avatar2.jpg"
import avatar3 from "../../../../public/avatar5.jpg"
import avatar4 from "../../../../public/avatar4.jpg"
import avatar5 from "../../../../public/avatar5.jpg"


export interface Testimonial{
    id:number;
    tutorName:string;
    pet:string;
    petType:string;
    avatar:StaticImageData;
    text:string;
    rating:number;
}

export const testimonials: Testimonial[] = [
    
    {
        id:1,
        tutorName:"Cristiane",
        pet:"Thor",
        petType:"Cachorro",
        avatar:avatar1,
        rating:5,
        text:"Atendimento maravilhoso! A equipe tratou o Thor com uma paciência incrível. Ele costumava ter muito medo de ir ao veterinário, mas aqui ele se sentiu super em casa. O carinho deles faz toda a diferença."

    },

    
    {
        id:2,
        tutorName:"Eloá",
        pet:"Mel",
        petType:"Gato",
        avatar:avatar2,
        rating:5,
        text:"É muito difícil encontrar uma clínica onde os gatos não fiquem estressados,mas o ambiente de vocês é perfeito. A Dra. foi super cuidadosa com a Mel, respeitando o tempo e o espaço dela. Excelente!"
    },
    {
        id:3,
        tutorName:"João",
        pet:"Caramelo",
        petType:"Cachorro",
        avatar:avatar3,
        rating:5,
        text:"Fiquei muito apreensiva com a cirurgia de castração do Caramelo, mas a equipe me tranquilizou o tempo todo. Me mandaram atualizações e o pós-operatório foi excelente. Recomendo de olhos fechados!"

    },
     {
        id:4,
        tutorName:"Guilherme",
        pet:"Flora",
        petType:"Gato",
        avatar:avatar4,
        rating:5,
        text:"Não tenho palavras para agradecer o cuidado que tiveram com a Mel. Desde a recepção até a consulta, todos foram extremamente atenciosos. Sinto que minha cachorrinha está nas melhores mãos possíveis."

    },
    {
        id:5,
        tutorName:"Jeferson",
        pet:"Rex",
        petType:"Cachorro",
        avatar:avatar5,
        rating:5,
        text:"Precisamos de um atendimento de urgência e fomos recebidos prontamente. A infraestrutura da clínica é fantástica e o diagnóstico foi rápido e preciso. Graças à agilidade da equipe, o Rex já está 100% recuperado."
    },
    












]
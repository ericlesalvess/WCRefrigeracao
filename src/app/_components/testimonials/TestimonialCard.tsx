'use client'
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import {Quote} from "lucide-react";
import { cardHover } from "@/animations/card";


interface TestimonialCardProps{
    tutorName:string;
    pet:string;
    petType:string;
    avatar:StaticImageData;
    text:string;
    rating:number;

}


export function TestimonialCard({tutorName,pet,petType,avatar,text,rating}:TestimonialCardProps){
    return ( 
        <motion.div 
        className=" bg-white rounded-2xl border border-slate-200 shadow-md p-8 h-full relative overflow-hidden"
       variants={cardHover}
       initial="rest"
       whileHover="hover"
        >
            <div className="flex items-center gap-4">
                <Image
                src={avatar}
                alt={tutorName}
                width={72}
                height={72}

                className="rounded-full border-2 border-emerald-500 object-cover"

                />
                <div>
                <h3 className="font-bold text-lg text-slate-900">{tutorName}</h3>
                <p className="text-slate-600">{petType} - {pet}</p>
             </div>
              <div className="ml-auto flex gap-1 mb-5">
                {Array.from({ length: rating}).map((_,index)=>( 
                    <Star  
                        key={index}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                ))}
            </div>
            </div>

            

            <p
             className="text-slate-600 leading-7 mt-6 min-h-[90px]"
            >{text}</p>

            <Quote 
                className="absolute bottom-5 right-5 w-16 h-16 text-emerald-500/10"
            
            />

            
            


        </motion.div>
    )


}


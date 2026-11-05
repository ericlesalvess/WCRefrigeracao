"use client";

import Image, { StaticImageData } from "next/image";

interface ServiceSlideProps{
    title:string;
    description:string;
    image:StaticImageData;
    button:string;
    icon:any;
}

export function ServiceSlide({title,description,image,button,icon:Icon}
:ServiceSlideProps){
    return(

    <div className="relative h-[360px] sm:h-[400px] md:h-[440px] lg:h-[600px] w-full rounded-none md:rounded-3xl overflow-hidden">
        
        <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
        />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />


        <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-10 md:p-12 lg:p-16">
            
            
            <div className="max-w-xl text-white">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-500 flex items-center justify-center mb-4 md:mb-6">
                    <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div className="min-h-[3rem] sm:min-h-[4rem] flex items-start">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                        {title}
                    </h2>
                </div>
            </div>
            
            <div className="max-w-xl text-white">
                <p className=" sm: text-sm sm:text-base md:text-lg leading-6 md:leading-8 text-slate-200 mb-2 line-clamp-3 min-h-[4.5rem] flex items-center">
                    {description}
                </p>
                <button className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold">
                    {button}
                </button>
            </div>

        </div>
    </div>

    )

}
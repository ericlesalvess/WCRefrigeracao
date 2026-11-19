"use client";

import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
    title: string;
    description: string;
    image: StaticImageData;
}

export function ServiceCard({ title, description, image }: ServiceCardProps) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-900/10">

            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
            </div>

            <div className="relative flex flex-1 flex-col p-6 pt-6">
                <h3 className="text-xl font-bold text-slate-800">{title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{description}</p>
            </div>
        </article>
    );
}
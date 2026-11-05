"use client";

import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    image: StaticImageData;
    button: string;
    icon: LucideIcon;
    href: string;
}

export function ServiceCard({ title, description, image, button, icon: Icon, href }: ServiceCardProps) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-900/10">

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

            <div className="relative flex flex-1 flex-col p-6 pt-10">

                {/* ícone sobreposto à foto */}
                <div className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg transition-colors duration-300 group-hover:bg-sky-500">
                    <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-800">{title}</h3>

                <p className="mt-3 flex-1 leading-7 text-slate-600">{description}</p>

                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-800"
                >
                    {button}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
            </div>
        </article>
    );
}
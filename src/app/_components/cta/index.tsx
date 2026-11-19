'use client'
import { staggerContainer, fadeUp } from "@/animations"
import {
    WhatsappLogoIcon,
    PhoneIcon,
    MapPinIcon,
    ClipboardTextIcon,
    FileTextIcon,
    ShieldCheckIcon,
} from "@phosphor-icons/react"
import { motion } from "motion/react"
import { MapCard } from "./MapCard"

const WHATSAPP_URL =
    "https://wa.me/5524992764964?text=" +
    encodeURIComponent("Olá! Gostaria de agendar uma visita para fazer um orçamento de ar-condicionado.")

const steps = [
    { icon: ClipboardTextIcon, title: "Visita técnica", text: "Avaliamos o ambiente no local." },
    { icon: FileTextIcon, title: "Orçamento", text: "Modelo ideal, quantidade de aparelhos e valor." },
    { icon: ShieldCheckIcon, title: "Instalação com garantia", text: "Testes finais antes da entrega." },
]

const contacts = [
    { icon: PhoneIcon, label: "(24) 99276-4964", href: "tel:+5524992764964" },
    { icon: MapPinIcon, label: "Atendimento em Valença e região" },
]

export function Cta() {
    return (
        <section id="contato" className="relative scroll-mt-15 overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-16 lg:py-20" >
            {/* mancha de cor ao fundo */}
            <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative mx-auto w-full max-w-6xl px-4">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="grid items-center gap-12 lg:grid-cols-2">

                        {/* TEXTO */}
                        <div>
                            <motion.span
                                variants={fadeUp}
                                className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300"
                            >
                                Agende uma visita
                            </motion.span>

                            <motion.h2
                                variants={fadeUp}
                                className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl"
                            >
                                Deixe seu conforto em nossas mãos
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className="mt-4 max-w-lg text-base leading-7 text-blue-100"
                            >
                                Chame a WC pelo WhatsApp e agende a visita técnica. Vamos até você,
                                avaliamos o ambiente e passamos o orçamento do início ao fim, com testes e garantia.
                            </motion.p>

                            {/* passos */}
                            <motion.ul variants={staggerContainer} className="mt-6 space-y-3">
                                {steps.map((step, index) => (
                                    <motion.li key={step.title} variants={fadeUp} className="flex items-start gap-3">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                                            <step.icon size={20} weight="fill" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">
                                                {index + 1}. {step.title}
                                            </p>
                                            <span className="text-sm text-blue-200">{step.text}</span>
                                        </div>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            {/* botão */}
                            <motion.a
                                variants={fadeUp}
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-whats-600 px-8 py-3 text-sm font-semibold text-white shadow-xl transition-colors hover:bg-whats-700"
                            >
                                <WhatsappLogoIcon size={20} weight="fill" />
                                Agendar pelo WhatsApp
                            </motion.a>

                            {/* contatos */}
                            <motion.ul variants={fadeUp} className="mt-6 space-y-2">
                                {contacts.map((contact) => (
                                    <li key={contact.label} className="flex items-center gap-2 text-sm text-blue-100">
                                        <contact.icon size={18} weight="fill" className="text-cyan-300" />
                                        {contact.href ? (
                                            <a href={contact.href} className="transition-colors hover:text-white">
                                                {contact.label}
                                            </a>
                                        ) : (
                                            <span>{contact.label}</span>
                                        )}
                                    </li>
                                ))}
                            </motion.ul>
                        </div>

                        {/* MAPA */}
                        <motion.div variants={fadeUp}>
                            <MapCard />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
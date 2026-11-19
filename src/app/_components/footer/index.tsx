"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { fadeUp, staggerContainer } from "@/animations"
import {
  InstagramLogoIcon,
  FacebookLogoIcon,
  WhatsappLogoIcon,
  PhoneIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  ClockIcon,
} from "@phosphor-icons/react"
import logo from "../../../../public/logo.png"
import { menuItems } from "../header/menu"

// ====== DADOS DA EMPRESA ======
// Preencha o que a WC tiver. O que ficar vazio ("") não aparece no rodapé.
const company = {
  phoneLabel: "(24) 99276-4964",
  phoneHref: "tel:+5524992764964",
  whatsappUrl:
    "https://wa.me/5524992764964?text=" +
    encodeURIComponent("Olá! Gostaria de falar com a WC Refrigeração."),
  email: "",       // ex.: "contato@wcrefrigeracao.com.br"
  hours: "Segunda a Sexta, 08h ás 18h",       // ex.: "Segunda a Sexta, 08h às 18h"
  address: "",     // ex.: "Rua Exemplo, 100, Centro"
  instagram: "https://www.instagram.com/wc_refrigeracao_/",   // ex.: "https://instagram.com/wcrefrigeracao"
  facebook: "",    // ex.: "https://facebook.com/wcrefrigeracao"
}

const audiences = ["Residências", "Comércio", "Empresas", "Hospitais e laboratórios"]

export function Footer() {
  const socials = [
    { label: "Instagram", href: company.instagram, icon: InstagramLogoIcon, hover: "hover:bg-cyan-600" },
    { label: "Facebook", href: company.facebook, icon: FacebookLogoIcon, hover: "hover:bg-cyan-600" },
    { label: "WhatsApp", href: company.whatsappUrl, icon: WhatsappLogoIcon, hover: "hover:bg-whats-600" },
  ].filter((social) => social.href)

    return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-8 md:gap-10 lg:grid-cols-4"
        >

          {/* MARCA */}
          <motion.div className="col-span-2 lg:col-span-1" variants={fadeUp}>
            <div className="flex items-center gap-3">
              <Image src={logo} alt="WC Refrigeração e Climatização" width={90} height={90} className="h-auto w-16" />
              <div>
                <span className="block text-base font-bold leading-tight">REFRIGERAÇÃO</span>
                <span className="text-xs uppercase tracking-widest text-sky-400">E Climatização</span>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 ${social.hover}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* NAVEGAÇÃO */}
          <motion.div className="col-span-1" variants={fadeUp}>
            <h3 className="text-base font-semibold">Navegação</h3>
            <ul className="mt-5 space-y-2 text-sm">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-blue-200/80 transition-colors hover:text-sky-400">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTATO */}
          <motion.div className="col-span-1" variants={fadeUp}>
            <h3 className="text-base font-semibold">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm text-blue-200/80">
              <li className="flex items-center gap-2">
                <PhoneIcon size={16} weight="fill" className="shrink-0 text-sky-400" />
                <a href={company.phoneHref} className="transition-colors hover:text-white">
                  {company.phoneLabel}
                </a>
              </li>

              {company.email && (
                <li className="flex items-center gap-2">
                  <EnvelopeSimpleIcon size={16} weight="fill" className="shrink-0 text-sky-400" />
                  <a href={`mailto:${company.email}`} className="break-all transition-colors hover:text-white">
                    {company.email}
                  </a>
                </li>
              )}

              {company.hours && (
                <li className="flex items-center gap-2">
                  <ClockIcon size={16} weight="fill" className="shrink-0 text-sky-400" />
                  <span>{company.hours}</span>
                </li>
              )}

              <li className="flex items-center gap-2">
                <MapPinIcon size={16} weight="fill" className="shrink-0 text-sky-400" />
                <span>{company.address || "Valença e região"}</span>
              </li>
            </ul>
          </motion.div>

          {/* QUEM ATENDEMOS */}
          <motion.div className="col-span-2 lg:col-span-1" variants={fadeUp}>
            <h3 className="text-base font-semibold">Quem atendemos</h3>
            <ul className="mt-5 space-y-2 text-sm text-blue-200/80">
              {audiences.map((audience) => (
                <li key={audience}>{audience}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-xs text-blue-200/60">
            © {new Date().getFullYear()} WC Refrigeração e Climatização. Todos os direitos reservados.
          </p>

        </div>
      </div>
    </footer>
  )
}
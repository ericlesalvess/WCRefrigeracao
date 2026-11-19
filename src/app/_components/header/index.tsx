"use client";

import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import { List } from "@phosphor-icons/react";
import { Snowflake, MessageCircle } from 'lucide-react';
import { menuItems } from "./menu";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";

const WHATSAPP_NUMBER =
  "https://wa.me/5524992764964?text=" +
  encodeURIComponent("Olá! Gostaria de agendar uma visita para fazer um orçamento de ar-condicionado.");

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className=" fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-navy-950/90 text-white backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-4">

        {/* Logo + nome da empresa (shrink-0 impede que o logo seja espremido) */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image 
            src={logo} 
            alt="WC Refrigeração e Climatização" 
            width={120} 
            height={120} 
            className="h-auto w-20 lg:w-24" 
            priority 
          />

          <div className="whitespace-nowrap">
            <span className="block text-sm font-bold leading-tight text-white lg:text-base">
              REFRIGERAÇÃO
            </span>
            <span className="text-[11px] uppercase tracking-widest text-sky-400 lg:text-xs">
              E Climatização
            </span>
          </div>
        </Link>

        {/* Menu desktop/tablet (aparece de md para cima com gap ajustável) */}
        <nav className="hidden items-center gap-4 md:flex lg:gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm text-white/80 transition-colors hover:text-sky-400 lg:text-base"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Ações à direita (Botão WhatsApp + Menu Mobile) */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={WHATSAPP_NUMBER}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 whitespace-nowrap rounded-full bg-cyan-600 px-3.5 py-2 text-xs font-semibold text-white shadow-lg shadow-cyan-900/30 transition-all hover:scale-105 hover:bg-cyan-500 lg:px-4 lg:text-sm"
          >
            <div className="relative flex items-center justify-center">
              <MessageCircle className="h-4 w-4 text-white" />
              <Snowflake className="absolute -bottom-1 -right-1 h-2.5 w-2.5 animate-pulse text-cyan-200" />
            </div>
            <span className="hidden sm:inline">Solicitar Visita</span>
          </a>

          {/* Botão do menu mobile (some a partir de md, sincronizado com o <nav>) */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="flex items-center justify-center rounded-xl p-2 text-white md:hidden"
          >
            <List size={30} />
          </button>
        </div>

      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
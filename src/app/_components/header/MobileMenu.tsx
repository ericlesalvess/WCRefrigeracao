"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { WhatsappLogoIcon, PhoneIcon } from "@phosphor-icons/react";
import logo from "../../../../public/logo.png";
import { menuItems } from "./menu";

const WHATSAPP_URL =
  "https://wa.me/5524992764964?text=" +
  encodeURIComponent("Olá! Gostaria de agendar uma visita para fazer um orçamento de ar-condicionado.");

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);

  // o portal só pode ser criado no navegador (document não existe no servidor)
  useEffect(() => {
    setMounted(true);
  }, []);

  // enquanto o menu está aberto: Esc fecha e a página atrás não rola
  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // fecha o menu e, depois da animação, rola até a seção escolhida
  function goTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* fundo escurecido */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[99] bg-black/60 backdrop-blur-sm xl:hidden"
          />

          {/* painel lateral */}
          <motion.aside
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed right-0 top-0 z-[100] flex h-full w-[85%] max-w-sm flex-col bg-navy-950 text-white shadow-2xl xl:hidden"
          >
            {/* topo: logo + fechar */}
            <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
              <div className="flex items-center gap-2">
                <Image src={logo} alt="WC Refrigeração e Climatização" width={80} height={80} className="h-auto w-16" />
                <div>
                  <span className="block text-sm font-bold leading-tight">REFRIGERAÇÃO</span>
                  <span className="text-[10px] uppercase tracking-widest text-sky-400">E Climatização</span>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Fechar menu"
                className="rounded-xl p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* links */}
            <nav className="flex-1 overflow-y-auto px-5 py-6">
              <ul className="space-y-1">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => goTo(e, item.href)}
                      className="block rounded-xl px-4 py-3 text-lg font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-sky-400"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* ações */}
            <div className="space-y-3 border-t border-white/10 p-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-whats-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-whats-700"
              >
                <WhatsappLogoIcon size={22} weight="fill" />
                Agendar pelo WhatsApp
              </a>

              <a
                href="tel:+5524992764964"
                className="flex items-center justify-center gap-2 text-sm text-blue-200 transition-colors hover:text-white"
              >
                <PhoneIcon size={18} weight="fill" className="text-sky-400" />
                (24) 99276-4964
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
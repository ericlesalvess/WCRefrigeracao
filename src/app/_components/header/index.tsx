"use client";

import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import { motion } from "motion/react";
import { WhatsappLogoIcon } from "@phosphor-icons/react";
import { menuItems } from "./menu";
import { List } from "@phosphor-icons/react";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";


export function Header() {
  const [open, setOpen] = useState(false);
  return (
    
        <header className="fixed top-0 left-0 z-50 w-full bg-white/60 backdrop-blur-3xl border-b border-white/30 shadow-[0_8px_32px_rgba(15,23,42,0.08)] transition-all duration-300">
            
            <div className="container mx-auto flex h-24 items-center justify-between px-4">
                  
              <Link href="/" className="flex items-center gap-3">
                <Image src={logo} alt="Vet Service" width={120} height={120} priority/>

               {/* Logo / Nome da Empresa */}
        <div className="flex items-center gap-3">
         
          <div>
            <span className="text-white font-bold text-lg block leading-tight">WC REFRIGERAÇÃO</span>
            <span className="text-wc-cyan text-xs tracking-widest uppercase">E Climatização</span>
          </div>
        </div>

              </Link>

              
              <nav className="hidden xl:flex items-center gap-10 ">
                  {menuItems.map((item) => (
                          <a
                              key={item.href}
                              href={item.href}
                              className=" text-xl text-slate-800 transition-colors hover:text-emerald-600"
                              >
                              {item.label}
                          </a>
                  ))}
              </nav>

              
              <motion.a
                      href="#contato"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className=" hidden xl:flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-emerald-700"
                      >
                      <WhatsappLogoIcon size={22} weight="fill"
                      />
                      Agendar
              </motion.a>

              <button onClick={() => setOpen(true)}
                className="flex xl:hidden items-center justify-center rounded-xl p-2 text-slate-800"
                >
                  <List size={30} />

              </button>
            </div>
            <MobileMenu open={open}  onClose={() => setOpen(false)} />
        </header>
   );
}
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projetos", href: "/projetos" },
  { name: "Contato", href: "/contato" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-passatempo.png"
            alt="Passatempo Educativo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="hidden font-bold sm:inline-block">Passatempo Educativo</span>
        </Link>
        <nav className="flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild variant="default" size="sm" className="ml-4 bg-[#F48635] hover:bg-[#ED3237]">
            <Link href="/doacao">Doe Agora</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-16 bg-gradient-to-b from-[#F48635]/10 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter text-[#3E4096] mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg text-muted-foreground">
              Estamos aqui para ajudar! Entre em contato conosco através dos canais abaixo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#F48635] mb-6">
                    Informações de Contato
                  </h2>
                  <div className="space-y-4">
                    <a
                      href="tel:+5511997579540"
                      className="flex items-center space-x-3 text-foreground/80 hover:text-[#F48635] transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span>(11) 99757-9540</span>
                    </a>
                    <a
                      href="mailto:passatempo@passatempoeducativo.org.br"
                      className="flex items-center space-x-3 text-foreground/80 hover:text-[#F48635] transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span>passatempo@passatempoeducativo.org.br</span>
                    </a>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-semibold text-foreground mb-4">Redes Sociais</h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="p-2 rounded-full bg-[#3E4096] text-white hover:bg-[#F48635] transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="p-2 rounded-full bg-[#3E4096] text-white hover:bg-[#F48635] transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="p-2 rounded-full bg-[#3E4096] text-white hover:bg-[#F48635] transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#F48635] mb-6">
                    Localização
                  </h2>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                    Mapa será carregado aqui
                  </div>
                  <p className="mt-4 text-foreground/80">
                    Passatempo Educativo - Transformando vidas através da educação e do esporte.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
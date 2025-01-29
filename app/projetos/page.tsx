"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-16 bg-gradient-to-b from-[#F48635]/10 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tighter text-[#3E4096] mb-6">
              Projetos e Objetivos
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              É um projeto que alia a prática e aprendizagem do futebol, através das interfaces deste com a biologia, 
              a física e a história (áreas do conhecimento presentes na grade curricular de ensino de crianças e 
              adolescentes e que podem ser melhor assimiladas através da continuidade do ensino-aprendizagem, tendo 
              o futebol como estratégia e suporte).
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video relative bg-muted">
                      {/* Placeholder para as imagens */}
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        Projeto {index}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-[#3E4096]/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-white shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#F48635] mb-4">Biologia</h3>
              <p className="text-muted-foreground">
                Entenda como o corpo reage durante a prática esportiva e como otimizar seu desempenho através do conhecimento biológico.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-white shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#ED3237] mb-4">Física</h3>
              <p className="text-muted-foreground">
                Descubra os princípios físicos por trás dos movimentos, trajetórias e impactos no futebol.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-white shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#F4DD2B] mb-4">História</h3>
              <p className="text-muted-foreground">
                Explore a rica história do futebol e sua conexão com diferentes culturas e períodos históricos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              Passatempo Educativo
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              24 anos desenvolvendo jovens, crianças e comunidades através de projetos educacionais e esportivos.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/projetos">Conheça Nossos Projetos</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/doacao">Faça uma Doação</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="w-full py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video rounded-lg bg-muted" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                Nossa História
              </h2>
              <p className="text-muted-foreground mb-6">
                A Passatempo Educativo é uma organização não governamental, sem fins lucrativos, 
                que desenvolve projetos nas áreas educacional e esportiva. Atuando há 24 anos, 
                nossos projetos têm como objetivos dar continuidade no processo ensino aprendizagem 
                através de situações práticas com atividades nas escolas, empresas, estudos do meio, 
                visitas monitoradas, oficinas, workshops, palestras, jogos e gincanas dirigidos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premiações Section */}
      <section className="w-full py-20 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Nossas Premiações
            </h2>
            <p className="text-muted-foreground">
              Reconhecimento do nosso trabalho e compromisso com a educação
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Prêmio Itaú Unicef",
              "Melhores ONGs 2021",
              "Melhores ONGs 2022",
              "Certificadora Phomenta"
            ].map((premio, index) => (
              <motion.div
                key={premio}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <Trophy className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold">{premio}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patrocinadores Section */}
      <section className="w-full py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Nossos Patrocinadores
            </h2>
            <p className="text-muted-foreground">
              Empresas que acreditam e apoiam nossa causa
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="w-40 h-20 bg-muted rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
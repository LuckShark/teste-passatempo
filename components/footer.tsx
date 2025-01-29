import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Passatempo Educativo</h3>
            <p className="text-sm text-muted-foreground">
              ONG sem fins lucrativos dedicada ao desenvolvimento de jovens, crianças e comunidades.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <div className="space-y-2">
              <a href="tel:+5511997579540" className="flex items-center text-sm text-muted-foreground hover:text-primary">
                <Phone className="h-4 w-4 mr-2" />
                (11) 99757-9540
              </a>
              <a href="mailto:passatempo@passatempoeducativo.org.br" className="flex items-center text-sm text-muted-foreground hover:text-primary">
                <Mail className="h-4 w-4 mr-2" />
                passatempo@passatempoeducativo.org.br
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Certificações</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Prêmio Itaú Unicef</p>
              <p>Melhores ONGs 2021</p>
              <p>Melhores ONGs 2022</p>
              <p>Certificadora Phomenta</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Passatempo Educativo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
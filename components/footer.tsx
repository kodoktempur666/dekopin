import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer({ className = "" }: { className?: string }) {


  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <Image src="/logo2.png" alt="DEKOPINWIL Logo" width={40} height={40} className="rounded-lg" />
              </div>
              <div>
                <div className="font-bold">DEKOPINWIL</div>
                <div className="text-sm text-gray-400">Jawa Tengah</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dewan Koperasi Indonesia Wilayah Jawa Tengah berkomitmen membangun ekonomi kerakyatan melalui pemberdayaan
              koperasi yang berkelanjutan.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-sky-400">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-sky-400">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-sky-400">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-sky-400">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

         
          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Jl. Pemuda No. 142, Semarang, Jawa Tengah</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(024) 3564789</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@dekopinwiljateng.id</span>
              </div>
            </div>

            
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 DEKOPINWIL Jawa Tengah. Semua hak dilindungi.</p>

          </div>
        </div>
      </div>
    </footer>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Poppins, Noto_Sans } from "next/font/google" // pastikan penamaan kapital dan sesuai
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "DEKOPINWIL Jawa Tengah - Membangun Ekonomi Kerakyatan",
  description:
    "Dewan Koperasi Indonesia Wilayah Jawa Tengah berkomitmen memperkuat peran koperasi sebagai pilar ekonomi kerakyatan melalui pembinaan, pelatihan, dan pengembangan jejaring bisnis yang berkelanjutan.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={poppins.className}>
        <Navbar className={notoSans.className}/>
        <main>{children}</main>
        <Footer className={notoSans.className}/>
      </body>
    </html>
  )
}

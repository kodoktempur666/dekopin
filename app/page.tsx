"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


export default function HomePage() {


  const news = [
    {
      title: "Malam Tirakatan Peringatan Hari Koperasi ke-78 Jawa Tengah Semarak Penuh Warna",
      excerpt: "SEMARANG [Berlianmedia]– Malam Tirakatan/Tasyakuran Peringatan Hari Koperasi (Harkop) ke-78 tingkat Provinsi Jawa Tengah berlangsung meriah dan penuh warna, di Gedung Gradika Bhakti Praja, Provinsi Jawa Tengah, Jumat malam (11/7)",
      date: "11 Juli 2025",
      category: "Tasyakuran",
      image: '/news1.jpg',
    },
    {
      title: "Lapenkop Dekopin Wilayah Jawa Tengah Dilantik, Siap Kawal KDMP",
      excerpt: "SURAKARTA [Berlianmedia]- Siap mengawal jalannya Koperasi Desa/ Kelurahan Merah Putih (KDMP), Lembaga Pendidikan Perkoperasian (Lapenkop) Dewan Koperasi Indonesia Wilayah (Dekopinwil) Provinsi Jawa Tengah secara resmi dilantik di Larisae, Surakarta, Jum’at (25/7).",
      date: "25 Juli 2025",
      category: "Event",
      image: '/news2.jpg',
    },

  ]



  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-sky-100 text-sky-800 hover:bg-sky-200">DEKOPINWIL Jawa Tengah</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Membangun
                  <span className="text-sky-600"> Ekonomi Kerakyatan</span>
                  Bersama Koperasi
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Dewan Koperasi Indonesia Wilayah Jawa Tengah berkomitmen memperkuat peran koperasi sebagai pilar
                  ekonomi kerakyatan melalui pembinaan, pelatihan, dan pengembangan jejaring bisnis yang berkelanjutan.
                </p>
              </div>

            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl transform rotate-3"></div>
              <Image
                src="/home2.jpg"
                alt="DEKOPINWIL Jawa Tengah"
                width={600}
                height={400}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* carousel Section */}
      <section className="relative py-16 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4">
          <Carousel opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}>
            <CarouselContent>
              {/* Slide 1 */}
              <CarouselItem>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      Koperasi Jawa Tengah: Pilar Ekonomi Kerakyatan yang Berdaya
                    </h2>
                    <p className="text-lg text-gray-600">
                      Bersama DEKOPINWIL, kita wujudkan koperasi modern, inklusif, dan adaptif untuk kesejahteraan bersama.
                    </p>
                    <Link href="/profil-dekopinwil.html">
                      <Button className="bg-sky-600 text-white hover:bg-sky-700">
                        Pelajari Lebih Lanjut Tentang Kami
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                  <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/caro.jpg"
                      alt="Koperasi Jawa Tengah"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </CarouselItem>

              {/* Slide 2 */}
              <CarouselItem>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      Tingkatkan Kapasitas SDM Koperasi Anda!
                    </h2>
                    <p className="text-lg text-gray-600">
                      Akses pelatihan terstruktur, e-course interaktif, dan pendampingan ahli melalui Pusat Pelatihan kami.
                    </p>
                    <Link href="/e-learning">
                      <Button className="bg-sky-600 text-white hover:bg-sky-700">
                        Daftar Pelatihan Sekarang
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                  <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/caro.jpg"
                      alt="Pelatihan Koperasi"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </CarouselItem>

              {/* Slide 3 */}
              <CarouselItem>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      Jalin Kemitraan, Perluas Pasar Koperasi Anda!
                    </h2>
                    <p className="text-lg text-gray-600">
                      Temukan peluang business matching dengan mitra strategis dan investor melalui platform Temu Bisnis Online kami.
                    </p>
                    <Link href="/temu-bisnis.html">
                      <Button className="bg-sky-600 text-white hover:bg-sky-700">
                        Ikuti Temu Bisnis Online
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                  <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/caro.jpg"
                      alt="Temu Bisnis Online"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>



      {/* Services Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Profil Singkat</h2>
            <p className="text-xl text-gray-600 mb-8">
              Mengenal DEKOPINWIL Jawa Tengah
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              DEKOPINWIL Jawa Tengah adalah representasi resmi gerakan koperasi di tingkat provinsi, hadir sebagai perpanjangan tangan Dewan Koperasi Indonesia. Kami adalah wadah strategis yang <strong className="text-sky-600">menggerakkan roda perekonomian berbasis koperasi</strong>, memperkuat solidaritas, kemandirian, dan keberlanjutan di setiap langkah pembangunan ekonomi kerakyatan. Dengan komitmen tinggi terhadap prinsip-prinsip koperasi, kami bertekad menjadi jembatan antara koperasi, masyarakat, dan pemerintah, mendorong lahirnya koperasi modern, inklusif, dan adaptif terhadap perkembangan zaman. Jelajahi Struktur Organisasi kami dan kenali lebih dekat Profil Pimpinan yang berdedikasi.
            </p>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white bg-transparent transition-colors duration-300"
              >
                Baca Profil Lengkap Kami
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="hidden md:block">
            {/* Placeholder untuk gambar atau ilustrasi yang relevan */}
            <div className=" h-96 rounded-lg flex items-center justify-center">
              <Image
                src="/dekopin-logo.jpeg"
                alt="Profil DEKOPINWIL"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Berita & Kegiatan Terbaru</h2>
              <p className="text-xl text-gray-600">Update terkini seputar kegiatan dan program DEKOPINWIL Jateng</p>
            </div>
            <Link href="/news">
              <Button
                variant="outline"
                className="border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white bg-transparent"
              >
                Lihat Semua Berita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className=" rounded-t-lg">
                  <Image
                    src={item.image || "/default-news.jpg"}
                    alt="Profil DEKOPINWIL"
                    width={600}
                    height={500}
                    className="rounded-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-sky-100 text-sky-800">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-sky-600 transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">{item.excerpt}</CardDescription>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bergabunglah dengan Komunitas Koperasi Terbesar di Jawa Tengah
          </h2>
          <p className="text-xl text-sky-100 mb-8 leading-relaxed">
            Dapatkan akses ke pelatihan eksklusif, jejaring bisnis yang luas, dan dukungan penuh untuk mengembangkan
            koperasi Anda menuju kesuksesan yang berkelanjutan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href='/membership'>
              <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
                Daftar Keanggotaan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sky-600 bg-transparent"
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Ketua DEKOPINWIL Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sambutan Ketua DEKOPINWIL Jawa Tengah</h2>
            <p className="text-xl text-gray-600 mb-6">
              <strong className="block mb-2">Assalamualaikum Warahmatullahi Wabarakatuh, Salam sejahtera bagi kita semua</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Selamat datang di platform digital DEKOPINWIL Jawa Tengah. Sebagai perpanjangan tangan Dewan Koperasi Indonesia, kami bertekad menjadi garda terdepan dalam memajukan Koperasi Desa Merah Putih dan seluruh koperasi di Jawa Tengah.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Koperasi adalah pilar ekonomi kerakyatan yang tak tergantikan. Di era yang terus berubah ini, kami mendorong setiap koperasi untuk berinovasi, melakukan transformasi digital, dan memperkuat kelembagaan. DEKOPINWIL Jawa Tengah hadir sebagai fasilitator utama, menyediakan program pelatihan, pendampingan, advokasi, serta membuka akses pasar dan permodalan yang luas.
            </p>
            <p
              className="text-xl text-gray-600 mb-8">
              <strong>Wassalamualaikum Warahmatullahi Wabarakatuh</strong>
            </p>
            <p
              className="text-lg text-gray-600 mb-8">
              <strong>Bp. Andang Wahyu Triyanto, SE., MM.</strong>
            </p>
            <p className="text-lg text-gray-900 mb-8">
              <strong>Ketua DEKOPINWIL Jawa Tengah</strong>
            </p>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white bg-transparent transition-colors duration-300 mb-8"
              >
                Baca Profil Lengkap Kami
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>


          </div>
          <div className="hidden md:block text-center mb-8">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/ketua.jpg"
                alt="Profil Ketua DEKOPINWIL"
                width={450}
                height={600}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
          </div>

        </div>
        <div className="hidden md:block max-w-7xl mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengenal Ketua Kami: Sosok Penggerak Koperasi Jawa Tengah</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            <strong>Bp. Andang Wahyu Triyanto, SE., MM.</strong> adalah sosok visioner dan berdedikasi yang memimpin DEKOPINWIL Jawa Tengah dengan semangat tinggi untuk memajukan gerakan koperasi di provinsi ini. Dengan pengalaman panjang di sektor koperasi dan ekonomi rakyat, serta latar belakang pendidikan di bidang manajemen, beliau memiliki pemahaman mendalam tentang tantangan dan potensi koperasi di Jawa Tengah.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Di bawah kepemimpinan beliau, DEKOPINWIL Jawa Tengah terus mendorong inovasi, memperkuat sinergi dengan berbagai pihak, dan berkomitmen penuh untuk memberdayakan Koperasi Desa Merah Putih agar mampu bersaing di era digital. Beliau percaya bahwa dengan kolaborasi dan semangat gotong royong, koperasi akan menjadi kekuatan utama dalam mewujudkan kesejahteraan ekonomi yang inklusif bagi seluruh masyarakat Jawa Tengah.
          </p>
        </div>
      </section>
    </div>
  )
}

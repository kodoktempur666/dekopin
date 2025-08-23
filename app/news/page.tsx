'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs } from "@/components/ui/tabs"
import {
  Calendar,

  ArrowRight,
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Megaphone,
  FileText,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const page = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeTab, setActiveTab] = useState("all")
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchQuery] = useState("")
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [sortBy] = useState("latest")

  const newsCategories = [
    { id: "all", name: "Semua", count: 3, icon: FileText },
    { id: "berita", name: "Berita Terbaru", count: 3, icon: BookOpen },
    { id: "pengumuman", name: "Pengumuman", count: 0, icon: Megaphone },
    { id: "artikel", name: "Artikel & Opini", count: 0, icon: Users },
    { id: "galeri", name: "Galeri Media", count: 0, icon: Award },
    { id: "siaran-pers", name: "Siaran Pers", count: 0, icon: TrendingUp },
  ]

  const featuredNews = [
    {
      id: 4,
      title: "Biaya Pribadi, Dekopinda Kabupaten Tegal Antusias Ikuti PPD I Lapenkop Dekopinwil Jawa Tengah",
      excerpt:
        "SURAKARTA [Berlianmedia]- Dewan Koperasi Indonesia Daerah (Dekopinda) Kabupaten Tegal sangat antusias, dalam mengikuti Pendidikan Pemandu Dasar (PPD) I tentang perkoperasian, yang digelar oleh Lembaga Pendidikan Perkoperasian (Lapenkop) Dekopinwil Jawa Tengah selama dua hari di Kartosuro, Surakarta, Sabtu-Minggu (2-3/8).",
      
      category: "berita",
      date: "2025-07-11",
      author: "Redaksi",
      image: "/news4.jpg",
      featured: true,
    },
    {
      id: 5,
      title: "Lapenkop Dekopin Wilayah Jawa Tengah Dilantik, Siap Kawal KDMP",
      excerpt:
        "SEMARANG [Berlianmedia]- Sukses menggelar Rapat Kerja Daerah (Rakerda), Dewan Koperasi Indonesia Daerah (Dekopinda) Kabupaten Boyolali, menyatakan siap melakukan pendampingan Koperasi Desa/Kelurahan Merah Putih (KDKMP) di wilayahnya.",
      content: "Koperasi Wanita Srikandi Mandiri dari Kabupaten Semarang berhasil meraih penghargaan bergengsi...",
      category: "berita",
      date: "2025-08-23",
      author: "Redaksi",
      image: "/news5.jpg",
      featured: true,
    },
  ]

  const allNews = [

    {
      id: 3,
      title: "Dekopinwil Jawa Tengah Apresiasi Pengurus Lapenkop Sukses Gelar PPD I",
      excerpt:
        "SURAKARTA [Berlianmedia]- Dewan Koperasi Indonesia Wilayah (Dekopinwil) Provinsi Jawa Tengah, memberikan apresiasi yang tinggi terhadap Lembaga Pendidikan Perkoperasian (Lapenkop) Jawa Tengah, yang telah sukses menggelar Pendidikan Pemandu Dasar I selama dua hari di Kartosuro, Surakarta, Sabtu-Minggu (2-3/8).",
      category: "berita",
      date: "2025-08-03",
      author: "Abdul S",
      image: "/news3.jpg",
      tags: ["pendaftaran", "hukum", "pendampingan"],
    },
    {
      id: 4,
      title: "Biaya Pribadi, Dekopinda Kabupaten Tegal Antusias Ikuti PPD I Lapenkop Dekopinwil Jawa Tengah",
      excerpt:
        "SURAKARTA [Berlianmedia]- Dewan Koperasi Indonesia Daerah (Dekopinda) Kabupaten Tegal sangat antusias, dalam mengikuti Pendidikan Pemandu Dasar (PPD) I tentang perkoperasian, yang digelar oleh Lembaga Pendidikan Perkoperasian (Lapenkop) Dekopinwil Jawa Tengah selama dua hari di Kartosuro, Surakarta, Sabtu-Minggu (2-3/8).",
      category: "berita",
      date: "2025-08-03",
      author: "Abdul S",
      image: "/news4.jpg",
      tags: ["pendaftaran", "hukum", "pendampingan"],
    },
    {
      id: 5,
      title: "Lapenkop Dekopin Wilayah Jawa Tengah Dilantik, Siap Kawal KDMP",
      excerpt:
        "SEMARANG [Berlianmedia]- Sukses menggelar Rapat Kerja Daerah (Rakerda), Dewan Koperasi Indonesia Daerah (Dekopinda) Kabupaten Boyolali, menyatakan siap melakukan pendampingan Koperasi Desa/Kelurahan Merah Putih (KDKMP) di wilayahnya.",
      content: "Koperasi Wanita Srikandi Mandiri dari Kabupaten Semarang berhasil meraih penghargaan bergengsi...",
      category: "berita",
      date: "2025-08-23",
      author: "Redaksi",
      image: "/news5.jpg",
      featured: true,
    },

  ]

  const filteredNews = allNews.filter((news) => {
    const matchesCategory = activeTab === "all" || news.category === activeTab
    const matchesSearch =
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedNews = [...filteredNews].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return 0
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }
  return (
    <div className='min-h-screen bg-gradient-to-b from-sky-50 to-white'>
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-sky-400 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12">
            <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6">Berita & Kegiatan</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Kabar Terkini
              <br />
              <span className="text-sky-200">Gerakan Koperasi Jawa Tengah</span>
            </h1>
            <p className="text-xl text-sky-100 mx-auto leading-relaxed">
              Ikuti perkembangan terbaru, capaian inspiratif, dan inisiatif strategis dari DEKOPINWIL Jawa Tengah dan
              seluruh koperasi di provinsi ini.
            </p>
          </div>

        </div>
      </section>
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Berita Utama</h2>
            <Badge className="bg-sky-100 text-sky-800">Featured</Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredNews.map((news) => (
              <Card key={news.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-sky-600 text-white">
                      {newsCategories.find((cat) => cat.id === news.category)?.name}
                    </Badge>
                  </div>

                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(news.date)}
                      </div>

                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-sky-600 transition-colors line-clamp-2">
                    {news.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">{news.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Oleh: <span className="font-medium">{news.author}</span>
                    </div>
                    <Link href={`/news/${news.id}`}>
                      <Button variant="ghost" className="text-sky-600 hover:text-sky-700 p-0">
                        Baca Selengkapnya
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Categories */}
              <div className="lg:w-64 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">

                      Kategori Berita
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {newsCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveTab(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${activeTab === category.id
                            ? "bg-sky-100 text-sky-800 border border-sky-200"
                            : "hover:bg-gray-50 text-gray-700"
                          }`}
                      >
                        <div className="flex items-center">
                          <category.icon className="h-4 w-4 mr-2" />
                          <span className="text-sm font-medium">{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </CardContent>
                </Card>


              </div>

              {/* News Grid */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {activeTab === "all" ? "Semua Berita" : newsCategories.find((cat) => cat.id === activeTab)?.name}
                  </h2>
                  <div className="text-sm text-gray-500">{sortedNews.length} berita ditemukan</div>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {sortedNews.map((news) => (
                    <Card key={news.id} className="group hover:shadow-xl transition-all duration-300">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={news.image || "/placeholder.svg"}
                          alt={news.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-sky-600 text-white text-xs">
                            {newsCategories.find((cat) => cat.id === news.category)?.name}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(news.date)}

                        </div>
                        <CardTitle className="text-lg group-hover:text-sky-600 transition-colors line-clamp-2">
                          {news.title}
                        </CardTitle>
                        <CardDescription className="text-sm line-clamp-2">{news.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-500">{news.author}</div>
                          <Link href={`/news/${news.id}`}>
                            <Button size="sm" variant="ghost" className="text-sky-600 hover:text-sky-700 p-0">
                              Baca
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>


              </div>
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

export default page
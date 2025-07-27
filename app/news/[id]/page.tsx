"use client"

import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  BookOpen,
  Users,
  NewspaperIcon,
} from "lucide-react"
import Image from "next/image"

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  // Mock data - in real app, fetch based on params.id
  const newsArticles = [
    {
      id: 1,
      title: "DEKOPINWIL Jateng Gelar Workshop Legalitas Usaha, Ratusan Koperasi Terbantu",
      excerpt:
        "Prestasi membanggakan diraih DEKOPINWIL Jawa Tengah dalam ajang penghargaan koperasi tingkat nasional yang diselenggarakan oleh Kementerian Koperasi dan UKM RI.",
      content: `<p>
          Acara yang diselenggarakan oleh Dewan Koperasi Indonesia Wilayah (Dekopinwil) Jawa Tengah bekerja sama dengan Dinas Koperasi dan UKM Provinsi Jawa Tengah, menghadirkan berbagai elemen penting dalam dunia perkoperasian.
        </p>
        <br/>
        <p>
          Hadir dalam kesempatan tersebut, para pelaku gerakan koperasi dari berbagai kabupaten/kota, tokoh-tokoh koperasi, perwakilan instansi pemerintah, akademisi, serta pelaku ekonomi UMKM dan hadir pula anggota Komisi B DPRD Jawa Tengah, M Farchan dari Fraksi Partai Solidaritas Indonesia (PSI).
        </p>
        <br/>
        <p>
        Semarak malam tirakatan terasa melalui penampilan budaya, pameran produk koperasi, serta penyampaian refleksi dan harapan bagi masa depan gerakan koperasi di Indonesia, khususnya di Jawa Tengah.
        </p>
        <p>
        Dalam sambutannya, Ketua Dekopinwil Jawa Tengah, Andang Wahyu Triyanto, SE, MM menyampaikan, bahwa koperasi harus terus beradaptasi dengan perubahan zaman dan digitalisasi ekonomi.
        </p>
        <br/>
        <p>
        "Momentum Hari Koperasi ini menjadi ajang refleksi dan konsolidasi gerakan koperasi agar semakin berperan dalam membangun ekonomi rakyat," ujarnya.
        </p>
        <br/>
        <strong >
        Gubernur Jawa Tengah
        </strong >
              <br />
              <br />
      <p>
        Gubernur Jawa Tengah, yang hadir diwakili Asisten Ekonomi dan Pembangunan Dr.A.P. Ir. Sujarwanto Dwiatmoko. M.Si menyampaikan, bahwa penting kolaborasi antara pemerintah, koperasi dan masyarakat, dalam mendorong pertumbuhan ekonomi yang inklusif dan berkeadilan. Ia mengapresiasi semangat dan konsistensi gerakan koperasi, yang selama ini menjadi tulang punggung ekonomi kerakyatan.
      </p>
      <br />
      <p>
        Dikatakan pula, sesuai instruksi presiden tentang implementasi 7 unit usaha untuk meningkatkan geliat ekonomi, di desa-desa maupun kelurahan di Indonesia dengan nama Koperasi Merah Putih.
      </p>
      <br />
      <p>
        "Melalui instruksi Presiden nomor 9 tahun 2025, tentang percepatan pembentukan koperasi desa atau kelurahan dengan nama koperasi merah putih, Presiden memerintahkan bahwa KDMP akan didorong, untuk mengimplementasikan tujuh kegiatan usaha yang dapat meningkatkan geliat ekonomi kerakyatan di desa atau kelurahan dengan memperhatikan potensi desa atau kelurahan," paparnya.
      </p>
      <br />
      <p>
        Diharapkan, lanjut Sujarwanto, kegiatan tujuh usaha tersebut dapat dilaksanakan secara penuh dan optimal, oleh sebab itu pemerintah memberikan fasilitasi berupa kolaborasi KDMP dengan BUMD, BUMN dan pihak swasta berupa akses permodalan untuk kebutuhan sebuah koperasi.
      </p>
      <br />
      <p>
        "Saat ini, di Jawa Tengah telah terbentuk sebanyak 8523 koperasi desa/kelurahan. Sehingga kita (Jawa Tengah) bisa sebagai contoh nasional" imbuhnya.
      </p>
              <br />
        <strong>
          Potong Tumpeng
        </strong>
        <br />
        <br />
        <p>
          Puncak acara, diisi dengan do'a bersama untuk kejayaan koperasi Indonesia, dilanjutkan dengan pemotongan tumpeng sebagai simbol syukur dan harapan bersama untuk kejayaan koperasi, khususnya di Jawa Tengah.
        </p>
        <br />
        <p>
          Potong tumpeng pertama dilakukan oleh Ketua Dekopinwil Provinsi Jawa Tengah Andang Wahyu Triyanto, kemudian diberikan kepada generasi muda koperasi, yaitu Ketua Forum Komunikasi Koperasi Mahasiswa (FKKMI) Jawa Tengah.
        </p>
        <br />
        <p>
          Sedangkan potong tumpeng kedua dilakukan oleh Asisten Ekonomi dan Pembangunan Ir Sujarwanto Dwiatmoko mewakili Gubernur Jawa Tengah dan diberikan kepada perwakilan Koperasi Kelurahan Merah Putih dari Kecamatan Gunungpati, Kota Semarang.
        </p>
        <br />
        <p>
          Seperti disampaikan Ketua Panitia Tirakatan/Tasyakuran Peringatan Hari Koperasi ke-78 tingkat Provinsi Jawa Tengah, Setyo Budi Wibowo di awal sambutannya, bahwa tirakatan/tasyakuran bukan sekadar seremoni, melainkan bentuk penghargaan terhadap peran koperasi yang telah menjadi kekuatan ekonomi rakyat, sejak era perjuangan hingga kini.
        </p>
        <br />
        <p>
          "Kegiatan malam ini, merupakan bentuk rasa syukur kita dan sebagai penghargaan kepada pendiri gerakan koperasi di Indonesia, yang telah menetapkan bahwa tanggal 12 Juli sebagai Hari Koperasi," tandasnya.
        </p>
        <br />
        <p>
          Caption : Ketua Dekopinwil Jawa Tengah, Andang Wahyu Triyanto saat memberikan sambutan di malam Tirakatan/Tasyakuran Peringatan Harkop ke-78 tingkat Provinsi Jawa Tengah, di Gedung Gradika Bhakti Praja, Provinsi Jawa Tengah, Jumat malam (11/7). Foto : Absa
        </p>`,
      category: "berita",
      date: "2024-07-11",
      author: {
        name: "Tim Redaksi",

      },

      image: "/news1.jpg",
      tags: ["penghargaan", "nasional", "prestasi", "inovasi"],
    },
    {
      id: 2,
      title: "Lapenkop Dekopin Wilayah Jawa Tengah Dilantik, Siap Kawal KDMP",
      excerpt:
        "SURAKARTA [Berlianmedia]- Siap mengawal jalannya Koperasi Desa/ Kelurahan Merah Putih (KDMP), Lembaga Pendidikan Perkoperasian (Lapenkop) Dewan Koperasi Indonesia Wilayah (Dekopinwil) Provinsi Jawa Tengah secara resmi dilantik di Larisae, Surakarta, Jum’at (25/7).",
      content: `<p>
          Sesuai dengan Surat Keputusan Keputusan (SK) Pimpinan Dekopinwil Jawa Tengah Nomor : 37/DKPNWL – JATENG/VI/2025, tanggal 24 Juni 2025, tentang Pengangkatan Pengurus Lembaga Pendidikan Perkoperasian Dekopin Wilayah Provinsi Jawa Tengah Masa Jabatan 2025 – 2028, ditunjuk sebagai Direktur Lapenkop adalah Dra. Laili Hidayah Dwi Rini, dibantu oleh 19 pengurus lainnya.
        </p>
        <br/>
        <p>
          Dalam sambutannya, Ketua Dekopin Wilayah Jawa Tengah, Andang Wahyu Triyanto menegaskan, bahwa kedepan tidak perlu lagi berdebat terkait keberadaan Dekopin, karena sudah jelas saat launching KDMP di Kabupaten Klaten, Presiden Prabowo Subianto didampingi oleh Ketua Dekopin Pusat Bambang Hariadi.
        </p>
        <br/>
        <p>
        Artinya, Dekopin Pusat Pimpinan Bambang Hariadi secara tidak langsung sudah diakui oleh Pemerintah Indonesia, melalui pengakuan dari Presiden Prabowo Subianto.
        </p>
        <p>
        “Jadi, tugas Kita sekarang tidak perlu berdebat, tugas Kita sekarang adalah bagaimana menyelesaikan tantangan pemerintah dan melakukan edukasi kepada masyarakat, untuk meningkatkan kapasitas ekonomi dengan wadah koperasi, dengan tujuan untuk pemerataan ekonomi,” tegasnya usai melantik Lapenkop Dekopin Wilayah Jawa Tengah.
        </p>
        <br/>
        <p>
        “Jadi perlunya menjadi lebih produktif dalam memberikan pendidikan perkoperasian. Karena banyaknya keberhasilan, dari produktifitas yang tinggi produktifnya dalam menghasilkan hal yang lebih baik,” pesannya sebelum membuka kegiatan upgrading Pemandu Lapenkop.
        </p>

        <br/>
        <p>
        “Mari kita gandeng masyarakat yang memiliki potensi, untuk pengembangan ekonomi di masyarakat,” imbuhnya.
        </p>
        <br/>
        <strong >
        Sat Set Ubet
        </strong >
              <br />
              <br />
      <p>
        Semboyan Sat Set Ubet, menjadi andalan Direktur Lapenkop Dra. Laili Hidayah Dwi Rini dalam menahkodai Lapenkop Dekopin Wilayah Jawa Tengah, agar lembaga yang dipimpinnya bisa berjalan sesuai harapan bersama dan menghasilkan rupiah.
      </p>
      <br />
      <p>
        Langkah cepat komitmen Lapenkop dimulai dengan menjalankan upgrading atau pendidikan pemantapan para Pemandu Koperasi Lapenkop yang sudah pernah ikut pelatihan dan dilanjutkan dengan Pendidikan Perkoperasian Dasar (PPD) pada tanggal 2-3 Agustus 2025 mendatang, dengan biaya Rp 500 ribu.
      </p>
      <br />
      <p>
        “Jadi, Kami Pengurus Lapenkop Siap berkomitmen bersama-sama mengelola Lapenkop untuk menjadi lebih baik dengan bergerak dengan upgrading, yang dilanjutkan dengan Pendidikan Perkoperasian Dasar (PPD), yang saat ini sudah ada 40 peserta yang sudah mendaftar, dengan biaya sebesar itu, kami rasa ringan dengan hasil yang diperoleh,” terang Laili, usai dilantik.
      </p>
      <br />
      <p>
        Selain itu, Lapenkop juga siap menjalankan pelatihan-pelatihan tematik, yaitu bagaimana mengawali pengelolaan usaha bagi UKM dan bagaimana nantinya bisa terbuka kerjasama yang baik dalam hal pendanaan,” pungkasnya.
      </p>
      <br />
      <p>
        Hadir dalam Pelantikan Pengurus Lapenkop Dekopin Wilayah Jawa Tengah, selain Dinas Koperasi Solo Raya, hadir pula Dekopin Daerah (Dekopinda) Solo Raya.
      </p>
      <br />
      <p>Mulai dari Kabupaten Boyolali, Klaten, Sukoharjo, Karanganyar, Sragen dan Kota Surakarta.
      </p>
       `,
      category: "berita",
      date: "2024-07-11",
      author: {
        name: "Abdul S",
        avatar: "/placeholder.svg?height=40&width=40",
        bio: "Tim redaksi DEKOPINWIL Jawa Tengah yang berdedikasi dalam menyajikan informasi terkini seputar dunia koperasi.",
      },
      readTime: "5 menit",
      views: 2450,
      image: "/news2.jpg",
      tags: ["penghargaan", "nasional", "prestasi", "inovasi"],
    }
  ]

  // Find the specific article based on the ID from params
  const newsArticle = newsArticles.find(article => article.id.toString() === params.id)

  // Handle case where article is not found
  if (!newsArticle) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Artikel tidak ditemukan</h1>
          <p className="text-gray-600">Artikel yang Anda cari tidak dapat ditemukan.</p>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "pelatihan":
        return BookOpen
      case "event":
        return Users
      case "berita":
        return NewspaperIcon
      default:
        return BookOpen
    }
  }

  const CategoryIcon = getCategoryIcon(newsArticle.category)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      {/* <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
          <Link href="/news">
            <Button variant="ghost" className="text-sky-600 hover:text-sky-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Berita
            </Button>
          </Link>
        </div>
      </div> */}

      {/* Article Header */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Badge className="bg-sky-100 text-sky-800 flex items-center">
                <CategoryIcon className="h-3 w-3 mr-1" />
                Berita
              </Badge>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(newsArticle.date)}
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {newsArticle.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">{newsArticle.excerpt}</p>

            <div className="flex items-center justify-between pt-6 border-t">
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-semibold text-gray-900">{newsArticle.author.name}</div>
                  <div className="text-sm text-gray-500">Penulis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="px-4 md:px-6 lg:px-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={newsArticle.image || "/placeholder.svg"}
              alt={newsArticle.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div
                className=" max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: newsArticle.content }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
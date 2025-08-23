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
      id: 3,
      title: "Dekopinwil Jawa Tengah Apresiasi Pengurus Lapenkop Sukses Gelar PPD I",
      excerpt:
        "SURAKARTA [Berlianmedia]- Dewan Koperasi Indonesia Wilayah (Dekopinwil) Provinsi Jawa Tengah, memberikan apresiasi yang tinggi terhadap Lembaga Pendidikan Perkoperasian (Lapenkop) Jawa Tengah, yang telah sukses menggelar Pendidikan Pemandu Dasar I selama dua hari di Kartosuro, Surakarta, Sabtu-Minggu (2-3/8).",
      content: `<p>
        Apresiasi tersebut disampaikan Pimpinan Wakil Ketua Dekopinwil Jateng, Sudarto, di sela-sela pelaksanaan PPD I Perkoperasian di Hotel Assalamah, Kartosuro, Surakarta, Sabtu malam (2/8).
        </p>
        <br/>
        <p>
          “Kami sangat mengapresiasi kinerja Pengurus Lapenkop Dekopin, yang telah sukses dan berhasil menyelenggarakan Pendidikan Pemandu Dasar Perkoperasian selama dua hari. Karena baru seminggu yang lalu dilantik oleh Pimpinan Ketua Dekopinwil, langsung sat set berhasil menggelar PPD dengan peserta hampir seratus orang,” ujarnya salut.
        </p>
        <br/>
        <p>
       Dalam kesempatan itu, disampaikan pula terkait potensi Pemandu Lapenkop dalam melakukan pendampingan terhadap Koperasi Desa Kelurahan Merah Putih (KDLMP) dalam mengelola, sebab Dekopin merupakan lembaga gerakan koperasi satu-satunya di Indonesia yang diakui melalui Undang-undang Perkoperasian dan Peraturan Presiden (Perpres).
        </p>
        <br/>
        <p>
        “Dekopin ini merupakan organisasi gerakan koperasi satu-satunya yang diakui di Indonesia. Itu tertulis di Undang-undang koperasi maupun di Perpres. Oleh sebab itu, ini merupakan potensi para Pemandu dalam melakukan pendampingan ke koperasi merah putih,” ungkapnya di depan peserta PPD I.
        </p>
        <br/>

        <br/>
        <strong >
        Peserta Luar Jawa Tengah
        </strong >
              <br />
              <br />
      <p>
        Sementara Direktur Lapenkop Dekopinwil Dra. Laili Hidayah Dwi Rini menyampaikan, jumlah peserta yang hadir sebanyak 90 orang dan berasal dari berbagai kota di Jawa Tengah maupun di luar Jawa Tengah.
      </p>
      <br />
      <p>
        Pesertanya pun berasal dari berbagai kalangan, tidak hanya pelaku koperasi, organisasi gerakan koperasi, ada dari Staf Sekretariat Dewan (DPRD) hingga akademisi yang hadir mengikuti PPD I tersebut.
      </p>
      <br />
      <p>
        “Peserta tidak hanya dari Jawa Tengah, ada juga dari Jawa Timur, Jakarta dan Yogyakarta. Ada dosen, Profesor, pengurus Dekopinda Salatiga, Kabupaten Tegal dan Dekopin Daerah lain,” terangnya.
      </p>
      <br />
      <p>
        Diterangkan pula, jika nantinya akan ada lagi PPD I tahap dua, yang rencananya akan digelar di Kota Semarang, sebab masih banyak peserta yang akan ikut tapi kuota peserta sudah penuh.
      </p>
      <br />
      <p>
        “Kebetulan masih banyak peserta yang mau ikut PPD I, makanya bulan Agustus ini akan kita selenggarakan lagi PPD I tahap dua, kemudian nantinya kita juga akan menggelar PPD tingkat II, sebagai rencana tindak lanjut (RTL) program pendidikan perkoperasian,” ungkap Direktur Lapenkop Dekopinwil Jateng.
      </p>
      <br />
      <p>Caption : Pimpinan Wakil Ketua Dekopinwil Jateng Sudarto, menyampaikan apresiasinya terhadap Pengurus Lapenkop sukses menggelar PPD I selama dua hari Hotel Assalamah, Kartosuro, Surakarta, Sabtu malam (2/8). Foto : Absa
      </p>
       `,
      category: "berita",
      date: "2025-08-03",
      author: {
        name: "Abdul S",
        avatar: "/placeholder.svg?height=40&width=40",
        bio: "Tim redaksi DEKOPINWIL Jawa Tengah yang berdedikasi dalam menyajikan informasi terkini seputar dunia koperasi.",
      },
      image: "/news3.jpg",
      tags: ["penghargaan", "nasional", "prestasi", "inovasi"],
    },
    {
      id: 4,
      title: "Biaya Pribadi, Dekopinda Kabupaten Tegal Antusias Ikuti PPD I Lapenkop Dekopinwil Jawa Tengah",
      excerpt:
        "SURAKARTA [Berlianmedia]- Dewan Koperasi Indonesia Daerah (Dekopinda) Kabupaten Tegal sangat antusias, dalam mengikuti Pendidikan Pemandu Dasar (PPD) I tentang perkoperasian, yang digelar oleh Lembaga Pendidikan Perkoperasian (Lapenkop) Dekopinwil Jawa Tengah selama dua hari di Kartosuro, Surakarta, Sabtu-Minggu (2-3/8).",
      content: `<p>
        Walaupun, saat mengikuti PPD I tersebut menggunakan dana pribadi jajaran Pengurus, tanpa sponsor ataupun dana hibah dari Pemerintah Kabupaten Tegal.
        </p>
        <br/>
        <p>
          Hal itu disampaikan Ketua Dekopinda Kabupaten Tegal Juang Kristanto, kepada berlianmedia.com usai mengikuti PPD I Perkoperasian, selama dua hari di Hotel Assalamah, Kartosuro, Surakarta, Minggu (3/8).
        </p>
        <br/>
        <p>
       “Materi yang disampaikan Pemandu (Fasilitator) sangat bagus. Materi itu untuk penguatan dan peningkatan pemahaman perkoperasian, agar nantinya jajaran Dekopin bisa ikut mengawal kinerja KDLMP di daerah,” jelasnya.
        </p>
        <p>
        Selain itu, Ketua Dekopinda Kabupaten Tegal juga mengaku merasa puas, selain materi-materi Perkoperasian yang disampaikan Pemandu, begitu pula dengan fasilitas yang diberikan oleh panitia penyelenggara.
        </p>
        <br/>
      <p>
        “Fasilitasnya tidak mengecewakan dan juga sangat bagus. Jadi dengan biaya seperti itu menurut Saya sepadan ya, bahkan relatif murah dengan fasilitas materi perkoperasian dan layanan yang diberikan,” tandas Juang Kristanto.
      </p>
      <br />
      
       `,
      category: "berita",
      date: "2025-08-03",
      author: {
        name: "Abdul S",
        avatar: "/placeholder.svg?height=40&width=40",
        bio: "Tim redaksi DEKOPINWIL Jawa Tengah yang berdedikasi dalam menyajikan informasi terkini seputar dunia koperasi.",
      },
      image: "/news4.jpg",
      tags: ["penghargaan", "nasional", "prestasi", "inovasi"],
    },
        {
      id: 5,
      title: "Sukses Gelar Raker, Dekopinda Kabupaten Boyolali Siap Dampingi KDKMP di Wilayahnya",
      excerpt:
        "SEMARANG [Berlianmedia]- Sukses menggelar Rapat Kerja Daerah (Rakerda), Dewan Koperasi Indonesia Daerah (Dekopinda) Kabupaten Boyolali, menyatakan siap melakukan pendampingan Koperasi Desa/Kelurahan Merah Putih (KDKMP) di wilayahnya.",
      content: `<p>
        “Hal itu sebagai respon adanya KDMP/KKMP, yang dilaunching Presiden Prabowo Subianto di Klaten tanggal 21 Juli lalu, juga sebagai bentuk tanggungjawab organisasi gerakan koperasi satu-satunya di Indonesia, untuk memberikan pendidikan perkoperasian kepada Pengurus KDMP/KKMP di Kabupaten Boyolali,” terang Sri Sumarti, SE kepada Wartawan usai Rakerda, Sabtu (23/8).
        </p>
        <br/>
        <p>
          Dalam proses pendampingan, lanjut Pengurus KSU Swasta Dana Teras, langkah awal ada beberapa Pengurus Dekopinda, yang akan ditunjuk untuk melakukan pemetaan wilayah KDMP/KKMP yang berjumlah 267, bersama unsur terkait.
        </p>
        <br/>
        <p>
       “Di Boyolali inikan ada 261 KDMP dan 6 KKMP. Langkah awal proses pendampingan, ada Pengurus yang ditunjuk untuk melakukan pemetaan wilayah. Kemudian, akan dijadwalkan untuk mengumpulkan KDMP-KKMP, untuk dilakukan pembinaan,” jelasnya.
        </p>
        <p>
       Rakerda yang diselenggarakan di Gedung Dekopinda Kabupaten Boyolali dengan Tema “Sinergi Gerakan Koperasi Kabupaten Boyolali, Mewujudkan Saka Guru Perekonomian Daerah” itu dihadiri pula oleh Jaringan Usaha Koperasi (JUK) Dewan Koperasi Indonesia Wilayah (Dekopinwil) Provinsi Jawa Tengah dan Kepala Dinas Koperasi dan Tenaga Kerja Kabupaten Boyolali Sawitri Daniek Rahayuni, SE, MM didampingi Kepala Bidang Koperasi Tri Widiastuti, SE, MM.
        </p>
        <br/>
      <p>
        Pada kesempatan itu, Kepala Dinas Koperasi dan Tenaga Kerja Kabupaten Boyolali Sawitri Daniek Rahayuni menyampaikan apresiasinya terhadap Rakerda dan mendukung hasil Rakerda Dekopinda Kabupaten Boyolali, yang berupaya untuk melakukan pendampingan terhadap KDMP-KKMP di wilayahnya.
      </p>
      <br />
      
       `,
      category: "Event",
      date: "2025-08-23",
      author: {
        name: "Redaksi",
        avatar: "/placeholder.svg?height=40&width=40",
        bio: "Tim redaksi DEKOPINWIL Jawa Tengah yang berdedikasi dalam menyajikan informasi terkini seputar dunia koperasi.",
      },
      image: "/news5.jpg",
      tags: ["rapat", "nasional", "prestasi", "inovasi"],
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
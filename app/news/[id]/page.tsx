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
    },
    {
      id: 6,
      title: "Dekopinwil Jawa Tengah Kembali Gelar Pendidikan Pemandu Perkoperasian",
      excerpt:
        "SEMARANG [Berlianmedia]- Dewan Koperasi Indonesia Wilayah (Dekopinwil) Jawa Tengah melalui Lembaga Pendidikan Perkoperasian (Lapenkop), kembali menggelar Pendidikan Pemandu Dasar (PPD) I Perkoperasian di Kota Semarang, selama dua hari, 23-24 Agustus 2025.",
      content: `<p>
        “Sebanyak 65 peserta dari berbagai unsur gerakan koperasi dan akademisi mengikuti program ini, mulai dari pengurus, pengawas, pengelola, para dosen hingga kader muda koperasi di Jawa Tengah.
        </p>
        <br/>
        <p>
          Pimpinan Ketua Dekopinwil Jateng Andang Wahyu Triyanto, yang hadir diwakili oleh Pimpinan Wakil Ketua Setyo Budi Wibowo dalam penutupan PPD mengatakan, bahwa PPD I merupakan langkah strategis untuk mencetak kader pemandu koperasi yang kompeten.
        </p>
        <br/>
        <p>
       “Pemandu koperasi adalah ujung tombak dalam menggerakkan organisasi agar berjalan sesuai prinsip dan nilai koperasi. Melalui pendidikan ini, kami berharap lahir generasi baru yang mampu mendampingi koperasi agar semakin sehat, mandiri dan berdaya saing,” ujarnya saat penutupan di Hotel Plaza Semarang, Minggu (24/8).
        </p>
        <p>
      Di tempat yang sama, Direktur Lapenkop Jateng Laili Hidayah Dwi Rini menjelaskan, bahwa materi yang diberikan tidak hanya sebatas teori, tetapi juga praktik dan simulasi.
        </p>
        <br/>
      <p>
        “Peserta dibekali dengan pengetahuan dasar perkoperasian, teknik pemanduan, serta wawasan menghadapi tantangan koperasi di era digital. Dengan begitu, mereka siap menjadi agen perubahan di lingkungannya masing-masing,” katanya.
      </p>
      <br />
      <p>
      Dekopinwil Jateng melalui Lapenkop, menargetkan PPD I menjadi pijakan awal sebelum peserta melanjutkan ke jenjang pendidikan pemandu tingkat lanjut. Program tersebut juga diharapkan, mampu memperkuat ekosistem koperasi di Jawa Tengah agar lebih adaptif dan inovatif.
      </p>
      
       `,
      category: "Event",
      date: "2025-08-24",
      author: {
        name: "Abdul S",
        avatar: "/placeholder.svg?height=40&width=40",
        bio: "Tim redaksi DEKOPINWIL Jawa Tengah yang berdedikasi dalam menyajikan informasi terkini seputar dunia koperasi.",
      },
      image: "/news6.jpg",
      tags: ["rapat", "event", "prestasi", "inovasi"],
    },
    {
      id: 7,
      title: "KPPU Gandeng Dekopinwil Jateng Bahas Percepatan Pembentukan Regulasi Koperasi Desa Merah Putih",
      excerpt:
        "SEMARANG [Berlianmedia]– Komisi Pengawas Persaingan Usaha (KPPU) menggandeng Dewan Koperasi Indonesia Wilayah (Dekopinwil) Jawa Tengah, untuk berdiskusi bersama-sama membuat kajian kebijakan regulasi Koperasi Desa/Kelurahan Merah Putih (KDKMP) di Hotel Kesambi, Kota Semarang, Kamis (4/9).",
      content: `<p>
        Diskusi itu menindaklanjuti Instruksi Presiden Nomor 9 Tahun 2025, yang mengamanatkan percepatan pembentukan koperasi desa sebagai salah satu instrumen penguatan ekonomi kerakyatan. Pemerintah menilai, koperasi dapat menjadi tulang punggung pembangunan ekonomi yang inklusif, terutama di tingkat desa dan kelurahan.
        </p>
        <br/>
        <p>
         Disampaikan oleh Direktur Kebijakan Persaingan KPPU Leliana Mayasari, tujuan dilakukan diskusi dengan Dekopinwil Jateng itu, untuk menggali informasi dan mengkaji apakah regulasi yang dibuat oleh pemerintah terkait Koperasi Desa/Kelurahan Merah Putih akan berdampak dengan persaingan usaha di masyarakat.
        </p>
        <br/>
        <p>
       “Karena KPPU memiliki dua tugas utama, selain penegakan hukum persaingan usaha, juga memberikan saran dan pertimbangan terkait kebijakan pemerintah, yang bersinggungan dengan persaingan usaha. Jika nantinya regulasi itu merugikan masyarakat dalam hal persaingan usaha, maka akan kita peringatkan untuk dilakukan evaluasi perubahan,” jelasnya didampingi analisis Kebijakan Persaingan Ades Wiraputri dan Selvi Magdalena.
        </p>
        <p>
      Sementara itu, Ketua Pimpinan Dekopinwil Jateng Andang Wahyu Triyanto, yang diwakili oleh Wakil Ketua Sudarto menyambut baik agenda diskusi tersebut. Menurutnya, gerakan koperasi di Jawa Tengah siap memberikan masukan strategis, agar kebijakan koperasi desa/kelurahan benar-benar tepat sasaran.
        </p>
        <br/>
      <p>
        “Koperasi desa bukan hanya wadah ekonomi, tetapi juga alat pemberdayaan masyarakat di akar rumput. Kami berharap, kebijakan ini tidak berhenti di tataran regulasi, tetapi bisa diwujudkan dalam bentuk program yang nyata dan bermanfaat,” tegas Sudarto.
      </p>
      <br />
      <p>
     Hingga saat ini, lanjutnya, Dekopin Wilayah Jawa Tengah melalui Lembaga Pendidikan Perkoperasian (Lapenkop) sudah beberapa kali menggelar Pendidikan Pemandu dan Pendamping Koperasi, sebagai langkah untuk meningkatkan kapasitas KDMP dan KKMP agar lebih visible dan bankable.
      </p>
      
       `,
      category: "Event",
      date: "2025-09-04",
      author: {
        name: "Abdul S",
        avatar: "/placeholder.svg?height=40&width=40",
        bio: "Tim redaksi DEKOPINWIL Jawa Tengah yang berdedikasi dalam menyajikan informasi terkini seputar dunia koperasi.",
      },
      image: "/news7.jpg",
      tags: ["rapat", "event", "prestasi", "inovasi"],
    },
    {
      id: 8,
      title: "KPPU Siap Rekomendasikan Lapenkop Dekopin Menjadi Pendamping KDKMP",
      excerpt:
        "SEMARANG [Berlianmedia]- Komisi Pengawas Persaingan Usaha (KPPU) siap merekomendasikan Lembaga Pendidikan Perkoperasian (Lapenkop) ke Pemerintah, untuk bisa ikut berpartisipasi dalam program pendidikan perkoperasian Koperasi Desa/Kelurahan Merah Putih.",
      content: `<p>
        Hal itu disampaikan Direktur Kebijakan Persaingan KPPU Leliana Mayasari, usai diskusi dengan Dewan Koperasi Indonesia Wilayah (Dekopinwil) Jawa Tengah terkait kajian kebijakan regulasi Koperasi Desa/Kelurahan Merah Putih (KDKMP) di Hotel Kesambi, Kota Semarang, Kamis (4/9).
        </p>
        <br/>
        <p>
        “Informasi yang kami dapatkan dari kementerian koperasi itu, untuk pendampingan dan pelatihan untuk nanti yang akan mendampingi KDKMP. Ini Dekopin ini memang sudah saatnya memang harus masuk, untuk melaksanakan fungsinya membina, mendampingi, apalagi Dekopin sudah ada Lapenkop, jadi nantinya bisa selalu bersinergi dalam melakukan pendampingan,” jelasnya, usai diskusi didampingi analisis Kebijakan Persaingan Ades Wiraputri dan Selvi Magdalena.
        </p>
        <br/>
        <p>
       Dikatakan pula, bahwa selain memiliki tugas mengawasi persaingan usaha, KPPU juga memiliki mandat memberikan masukan kepada pemerintah, agar kebijakan yang diambil tetap mendukung terciptanya persaingan usaha yang sehat, terutama dalam hal koperasi desa/kelurahan merah putih.
        </p>
        <p>
      “Melalui kajian ini, KPPU berupaya memastikan agar kebijakan regulasi Koperasi Desa/Kelurahan Merah Putih tidak hanya selaras dengan semangat pemberdayaan ekonomi rakyat, tetapi juga memperhatikan prinsip persaingan usaha yang sehat,” ujar Leliana Mayasari, Direktur Kebijakan Persaingan.
        </p>
        <br/>
      <p>
       Ketua Pimpinan Dekopinwil Jateng Andang Wahyu Triyanto, yang diwakili oleh Wakil Ketua Sudarto menyatakan, bahwa hingga saat ini, Dekopin Wilayah Jawa Tengah melalui Lembaga Pendidikan Perkoperasian (Lapenkop) sudah beberapa kali menggelar Pendidikan Pemandu dan Pendamping Koperasi, sebagai langkah untuk meningkatkan kapasitas KDMP dan KKMP agar lebih visible dan bankable.
      </p>
      <br />
      <p>
      Ketua Pimpinan Dekopinwil Jateng Andang Wahyu Triyanto, yang diwakili oleh Wakil Ketua Sudarto menyatakan, bahwa hingga saat ini, Dekopin Wilayah Jawa Tengah melalui Lembaga Pendidikan Perkoperasian (Lapenkop) sudah beberapa kali menggelar Pendidikan Pemandu dan Pendamping Koperasi, sebagai langkah untuk meningkatkan kapasitas KDMP dan KKMP agar lebih visible dan bankable.
      </p>
      
       `,
      category: "Event",
      date: "2025-09-04",
      author: {
        name: "Abdul S",
        avatar: "/placeholder.svg?height=40&width=40",
        bio: "Tim redaksi DEKOPINWIL Jawa Tengah yang berdedikasi dalam menyajikan informasi terkini seputar dunia koperasi.",
      },
      image: "/news8.jpg",
      tags: ["rapat", "event", "prestasi", "inovasi"],
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
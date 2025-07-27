"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Building2,
  Target,
  Award,
  Calendar,
  TrendingUp,
  BookOpen,
  Shield,
  FileText,
  Heart,
  Handshake,
  Scale,
  Eye,
  CheckCircle,
  Globe,
  University,
  Banknote,
  Building,
} from "lucide-react"

export default function OrganizationProfilePage() {
  const [activeTab, setActiveTab] = useState("about")

  const organizationalStructure = [
    { position: "Ketua Umum", name: "Bp. Andang Wahyu Triyanto, SE., MM." },
    { position: "Sekretaris", name: "Drs. Ahmad Wijaya, Ak., M.M." },
    { position: "Bendahara", name: "H. Suryanto, S.E., M.M." },
    { position: "Ketua Bidang Pendidikan & Pelatihan", name: "Dr. Retno Sari, M.M." },
    { position: "Ketua Bidang Kelembagaan & Advokasi", name: "Prof. Dr. Bambang Sutrisno, S.H." },
    { position: "Ketua Bidang Usaha & Pemasaran", name: "Sarah Putri, S.Kom., M.M." },
    { position: "Ketua Bidang Penelitian & Pengembangan", name: "Dr. Ir. Slamet Riyadi, M.Sc." },
    { position: "Ketua Bidang Humas & Komunikasi", name: "Dra. Maya Sari, M.Kom." },
    { position: "Ketua Bidang Sarana Prasarana", name: "Ir. Agus Prasetyo, M.T." },
  ]

  const legalFoundations = [
    {
      title: "Undang-Undang Nomor 25 Tahun 1992",
      description: "tentang Perkoperasian",
      icon: Scale,
    },
    {
      title: "Peraturan Pemerintah Nomor 7 Tahun 2021",
      description: "tentang Kemudahan, Pelindungan, dan Pemberdayaan Koperasi dan Usaha Mikro, Kecil, dan Menengah",
      icon: Shield,
    },
    {
      title: "Anggaran Dasar dan Anggaran Rumah Tangga",
      description: "Dewan Koperasi Indonesia",
      icon: FileText,
    },
    {
      title: "Peraturan Daerah Provinsi Jawa Tengah",
      description: "terkait pengembangan koperasi",
      icon: Building2,
    },
  ]

  const strategicPartners = [
    {
      category: "Pemerintah Daerah",
      icon: Building2,
      partners: [
        "Dinas Koperasi dan UKM Provinsi Jawa Tengah",
        "Dinas Perdagangan",
        "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP)",
      ],
    },
    {
      category: "Perguruan Tinggi",
      icon: University,
      partners: [
        "Universitas Terbuka",
        "Universitas Diponegoro",
        "Universitas Sebelas Maret",
        "Universitas Negeri Semarang",
      ],
    },
    {
      category: "Lembaga Keuangan",
      icon: Banknote,
      partners: ["Bank Jawa Tengah", "Bank Mandiri", "Bank BRI", "Lembaga Pembiayaan Koperasi"],
    },
    {
      category: "Asosiasi Bisnis",
      icon: Handshake,
      partners: ["KADIN Jawa Tengah", "HIPMI Jawa Tengah", "APINDO Jawa Tengah"],
    },
    {
      category: "Komunitas Koperasi",
      icon: Users,
      partners: ["Jaringan Koperasi Sekunder", "Koperasi Primer Unggulan", "Forum Koperasi Jawa Tengah"],
    },
    {
      category: "Sektor Swasta",
      icon: Building,
      partners: ["PT Telkom Indonesia", "PT Bank Central Asia", "PT Astra International"],
    },
  ]

  const coreValues = [
    {
      icon: Heart,
      title: "Gotong Royong",
      description:
        "Membangun kekuatan bersama melalui semangat kebersamaan dan saling membantu dalam setiap program dan kegiatan",
    },
    {
      icon: TrendingUp,
      title: "Kemandirian",
      description: "Mendorong koperasi untuk mandiri dalam pengelolaan usaha dan pengambilan keputusan strategis",
    },
    {
      icon: Users,
      title: "Kebersamaan",
      description: "Memperkuat solidaritas dan kerjasama antar koperasi untuk mencapai tujuan bersama",
    },
    {
      icon: Scale,
      title: "Keadilan",
      description: "Memastikan distribusi manfaat yang adil dan merata bagi seluruh anggota koperasi",
    },
    {
      icon: Eye,
      title: "Transparansi",
      description: "Menjalankan organisasi dengan keterbukaan informasi dan akuntabilitas publik",
    },
    {
      icon: CheckCircle,
      title: "Akuntabilitas",
      description: "Bertanggung jawab penuh atas setiap program dan penggunaan sumber daya organisasi",
    },
  ]

  const missions = [
    "Meningkatkan kapasitas SDM koperasi melalui pendidikan dan pelatihan berkelanjutan",
    "Mendorong inovasi dan adaptasi teknologi di sektor koperasi",
    "Memfasilitasi akses pasar, permodalan, dan kemitraan strategis bagi koperasi",
    "Melakukan advokasi kebijakan yang berpihak pada pengembangan koperasi",
    "Memperkuat tata kelola organisasi koperasi yang transparan dan akuntabel",
    "Membangun jejaring dan sinergi antar-koperasi serta dengan stakeholder terkait",
  ]

  const roles = [
    {
      title: "Wadah Koordinasi",
      description: "Menyatukan suara dan kepentingan koperasi di Jawa Tengah",
      icon: Users,
    },
    {
      title: "Fasilitator Pengembangan",
      description: "Menyelenggarakan pelatihan, pendampingan, dan bimbingan teknis",
      icon: BookOpen,
    },
    {
      title: "Advokator Kebijakan",
      description: "Memperjuangkan regulasi yang mendukung pertumbuhan koperasi",
      icon: Scale,
    },
    {
      title: "Penghubung Kemitraan",
      description: "Menjembatani koperasi dengan peluang pasar dan permodalan",
      icon: Handshake,
    },
    {
      title: "Pusat Informasi",
      description: "Menyediakan data dan informasi terkini seputar gerakan koperasi",
      icon: Globe,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8 text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg-profile.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-sky-800/80 to-blue-500/80 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6">Profil Organisasi</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            DEKOPINWIL Jawa Tengah
            <br />
            <span className="text-sky-200">Penggerak Ekonomi Kerakyatan</span>
          </h1>
          <p className="text-xl text-sky-100 max-w-4xl mx-auto leading-relaxed">
            Representasi resmi gerakan koperasi di tingkat provinsi yang berperan aktif dalam membangun, membina, serta
            memperkuat koperasi sebagai fondasi utama perekonomian kerakyatan di wilayah Jawa Tengah.
          </p>
        </div>
      </section>


      {/* Main Content */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 lg:w-[600px]">
              <TabsTrigger value="about">Tentang Kami</TabsTrigger>
              <TabsTrigger value="structure">Struktur</TabsTrigger>
              <TabsTrigger value="legal">Dasar Hukum</TabsTrigger>
              <TabsTrigger value="partners">Mitra</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-12">
              {/* About Section */}
              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang DEKOPINWIL Jawa Tengah</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      DEKOPINWIL Jawa Tengah adalah representasi resmi gerakan koperasi di tingkat provinsi, yang
                      berperan aktif dalam membangun, membina, serta memperkuat koperasi sebagai fondasi utama
                      perekonomian kerakyatan di wilayah Jawa Tengah. Dengan komitmen tinggi terhadap nilai-nilai
                      koperasi, kami hadir sebagai jembatan antara koperasi, masyarakat, dan pemerintah.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Kami mengedepankan prinsip kolaborasi dan pemberdayaan dalam setiap gerakan, percaya bahwa
                      koperasi bukan hanya sebagai badan usaha, tetapi juga sebagai kekuatan sosial ekonomi yang mampu
                      menjawab tantangan zaman.
                    </p>
                  </CardContent>
                </Card>

                {/* History */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Calendar className="h-6 w-6 mr-2 text-sky-600" />
                      Sejarah Singkat
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Berdiri sebagai perpanjangan tangan Dewan Koperasi Indonesia, DEKOPINWIL Jawa Tengah telah melalui
                      perjalanan panjang dalam mengawal dan mengembangkan gerakan koperasi di provinsi ini. Sejak tahun
                      1985, kami terus beradaptasi dengan dinamika ekonomi dan sosial, berinovasi dalam program, serta
                      memperluas jangkauan layanan demi kemajuan koperasi dan kesejahteraan masyarakat Jawa Tengah.
                    </p>
                  </CardContent>
                </Card>

                {/* Vision & Mission */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="border-l-4 border-l-sky-600 bg-sky-50">
                    <CardHeader>
                      <CardTitle className="flex items-center text-sky-800">
                        <Target className="h-6 w-6 mr-2" />
                        Visi
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed font-medium">
                        Terwujudnya Koperasi Jawa Tengah yang Modern, Mandiri, Berdaya Saing Global, dan Berkontribusi
                        Signifikan terhadap Kesejahteraan Rakyat
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-600 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="flex items-center text-blue-800">
                        <Award className="h-6 w-6 mr-2" />
                        Misi
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-700">
                        {missions.map((mission, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {mission}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Values */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 text-center">Nilai-Nilai Kami</h3>
                  <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
                    Kami berpegang teguh pada nilai-nilai luhur koperasi yang menjadi akar budaya bangsa, yaitu: Gotong
                    Royong, Kemandirian, Kebersamaan, Keadilan, Transparansi, dan Akuntabilitas. Nilai-nilai ini menjadi
                    landasan dalam setiap program dan interaksi kami.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coreValues.map((value, index) => (
                      <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border-0">
                        <CardContent className="p-6 text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-4 group-hover:bg-sky-600 transition-colors">
                            <value.icon className="h-8 w-8 text-sky-600 group-hover:text-white transition-colors" />
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                          <p className="text-gray-600 text-sm">{value.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Roles & Functions */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 text-center">Peran & Fungsi</h3>
                  <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-8">
                    Melalui berbagai program strategis, pelatihan, serta pendampingan teknis, kami berupaya menciptakan
                    koperasi yang modern, adaptif, dan berdaya saing tinggi. Fokus kami adalah mencetak koperasi yang
                    profesional, inovatif, dan mampu memberikan manfaat nyata bagi anggotanya.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {roles.slice(0, 5).map((role, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center group-hover:bg-sky-600 transition-colors">
                              <role.icon className="h-6 w-6 text-sky-600 group-hover:text-white transition-colors" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 mb-2">{role.title}</h4>
                              <p className="text-gray-600 text-sm">{role.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="structure" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Struktur Organisasi DEKOPINWIL Jawa Tengah
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  DEKOPINWIL Jawa Tengah dipimpin oleh jajaran pengurus yang berdedikasi dan didukung oleh tim
                  profesional di setiap divisi.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {organizationalStructure.map((position, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-sky-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-sky-600 transition-colors">
                        <Users className="h-8 w-8 text-sky-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                        {position.position}
                      </h3>
                      <p className="text-gray-600 text-sm">{position.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="legal" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Landasan Hukum Operasional Kami</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Operasional DEKOPINWIL Jawa Tengah berlandaskan pada peraturan perundang-undangan yang berlaku,
                  memastikan setiap langkah kami sesuai dengan koridor hukum dan memberikan kepastian bagi seluruh
                  stakeholder.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {legalFoundations.map((legal, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center group-hover:bg-sky-600 transition-colors">
                          <legal.icon className="h-6 w-6 text-sky-600 group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                            {legal.title}
                          </h3>
                          <p className="text-gray-600">{legal.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="partners" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Jejaring Kemitraan Kami</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Kami percaya bahwa kolaborasi adalah kunci keberhasilan. DEKOPINWIL Jawa Tengah menjalin kemitraan
                  strategis dengan berbagai pihak untuk memperkuat ekosistem koperasi.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {strategicPartners.map((category, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                    <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50">
                      <CardTitle className="flex items-center text-sky-800">
                        <category.icon className="h-6 w-6 mr-2" />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-2">
                        {category.partners.map((partner, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-sky-600 rounded-full mr-3"></div>
                            {partner}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>


    </div>
  )
}

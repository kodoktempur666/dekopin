import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Award, BarChart3, BookOpen, Building2,  Megaphone, Scale, Search, Target, TrendingUp, Users } from 'lucide-react'
import React from 'react'

const page = () => {

    const divisions = [
        {
            id: "pendidikan",
            name: "Divisi Pendidikan dan Pelatihan",
            icon: BookOpen,
            color: "bg-blue-500",
            description: "Fokus pada peningkatan kapasitas SDM koperasi melalui berbagai diklat dan e-course.",
            tujuan: "Mencetak SDM koperasi yang kompeten dan adaptif terhadap perubahan zaman.",
            programUnggulan: [
                "Diklat Terstruktur (nilai-nilai, jati diri, business plan)",
                "Diklat Tematik (SWOT, pemasaran digital, literasi keuangan)",
                "Pelatihan Pemandu/Pelatih Koperasi",
                "Kerjasama Peningkatan SDM Koperasi dengan PT (Pola UT)",
            ],
            output: "Peningkatan kompetensi manajerial, digital, dan kewirausahaan SDM koperasi.",
            ketua: "Dr. Siti Nurhaliza, M.M.",
            anggota: ["Budi Santoso, S.E.", "Rina Wijayanti, M.Pd.", "Ahmad Fauzi, S.Kom."],
            stats: { peserta: "2,500+", program: "25", sertifikat: "1,800+" },
        },
        {
            id: "kelembagaan",
            name: "Divisi Kelembagaan dan Advokasi",
            icon: Scale,
            color: "bg-green-500",
            description:
                "Memperkuat fondasi hukum dan tata kelola koperasi, serta mengadvokasi kebijakan yang berpihak pada koperasi.",
            tujuan: "Memastikan koperasi beroperasi sesuai hukum dan memiliki lingkungan regulasi yang kondusif.",
            programUnggulan: [
                "Pembekalan Advokasi & Pendampingan Hukum",
                "Penyusunan Rekomendasi Kebijakan Pro-Koperasi",
                "Fasilitasi Penyelesaian Sengketa Koperasi",
            ],
            output: "Peningkatan literasi hukum, mitigasi risiko hukum, dan kebijakan yang mendukung koperasi.",
            ketua: "Prof. Dr. Bambang Sutrisno, S.H., M.H.",
            anggota: ["Dewi Sartika, S.H.", "Agus Priyanto, S.H., M.H.", "Lisa Permata, S.H."],
            stats: { kasus: "150+", kebijakan: "12", konsultasi: "500+" },
        },
        {
            id: "usaha",
            name: "Divisi Usaha dan Pemasaran",
            icon: TrendingUp,
            color: "bg-purple-500",
            description:
                "Mendorong pengembangan usaha, perluasan akses pasar, dan fasilitasi kemitraan strategis bagi koperasi.",
            tujuan: "Meningkatkan daya saing dan volume transaksi produk koperasi.",
            programUnggulan: [
                "Penyelenggaraan Event Temu Bisnis Online",
                "Info Produk Unggulan Koperasi Merah Putih (Katalog Online)",
                "Pendampingan Akses Permodalan & Literasi Keuangan",
            ],
            output: "Peningkatan kemitraan, akses pasar, dan omzet penjualan koperasi.",
            ketua: "Ir. Wahyu Setiawan, M.M.",
            anggota: ["Sri Mulyani, S.E.", "Dedi Kurniawan, S.E., M.M.", "Fitri Handayani, S.E."],
            stats: { kemitraan: "200+", produk: "156", omzet: "15M+" },
        },
        {
            id: "litbang",
            name: "Divisi Penelitian dan Pengembangan",
            icon: Search,
            color: "bg-orange-500",
            description: "Melakukan riset, analisis, dan inovasi untuk mendukung pengembangan koperasi berbasis data.",
            tujuan: "Menyediakan data akurat dan rekomendasi strategis untuk pengambilan keputusan.",
            programUnggulan: [
                "Penyusunan Database Profil dan Potensi Koperasi Unggulan",
                "Kajian Tren Ekonomi & Dampaknya pada Koperasi",
                "Pengembangan Model Bisnis Koperasi Inovatif",
            ],
            output: "Tersedianya data komprehensif, rekomendasi kebijakan berbasis data, dan model inovasi.",
            ketua: "Dr. Eng. Rudi Hartono, M.T.",
            anggota: ["Maya Sari, M.Si.", "Eko Prasetyo, S.T., M.T.", "Indah Lestari, M.Kom."],
            stats: { penelitian: "35", database: "2,500+", inovasi: "18" },
        },
        {
            id: "humas",
            name: "Divisi Hubungan Masyarakat dan Komunikasi",
            icon: Megaphone,
            color: "bg-pink-500",
            description:
                "Membangun citra positif, menyebarkan informasi, dan menjalin komunikasi efektif dengan stakeholder.",
            tujuan: "Meningkatkan visibilitas dan pemahaman publik tentang peran DEKOPINWIL dan koperasi.",
            programUnggulan: [
                "Penyediaan & Pembuatan Website dan Media Sosial (IG, FB, TikTok, dll.)",
                "Pembekalan TI sebagai Media Informasi Publik",
                "Penyelenggaraan Event Peringatan Hari Koperasi Nasional",
            ],
            output: "Peningkatan jangkauan informasi, citra positif, dan partisipasi masyarakat.",
            ketua: "Dra. Sari Dewi Kusuma, M.Kom.",
            anggota: ["Andi Wijaya, S.Sos.", "Putri Maharani, S.I.Kom.", "Yoga Pratama, S.Kom."],
            stats: { followers: "50K+", konten: "1,200+", engagement: "85%" },
        },
        {
            id: "sarpras",
            name: "Divisi Sarana Prasarana",
            icon: Building2,
            color: "bg-teal-500",
            description:
                "Mengelola dan mengoptimalkan sarana dan prasarana internal DEKOPINWIL untuk mendukung efisiensi operasional.",
            tujuan: "Memastikan DEKOPINWIL memiliki fasilitas dan infrastruktur yang memadai.",
            programUnggulan: [
                "Pengurusan Status dan Legalitas Gedung/Kantor DEKOPINWIL",
                "Penguatan SDM & Sarpras Sekretariat DEKOPINWIL",
                "Pemeliharaan Rutin Aset Organisasi",
            ],
            output: "Kepastian hukum aset, efisiensi operasional, dan lingkungan kerja yang kondusif.",
            ketua: "Ir. Joko Susilo, M.T.",
            anggota: ["Hendra Gunawan, S.T.", "Ratna Sari, S.E.", "Budi Prasetyo, A.Md."],
            stats: { aset: "2.5M+", fasilitas: "15", maintenance: "100%" },
        },
    ]
    return (
        <div className='min-h-screen bg-gradient-to-b from-sky-50 to-white'>
            <section className="relative py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-blue-700">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center text-white">
                        <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6">Program Kerja 2024</Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Visi dalam Aksi:
                            <span className="block text-sky-200">Program Kerja Divisi Kami</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-sky-100 max-w-4xl mx-auto leading-relaxed mb-8">
                            DEKOPINWIL Jawa Tengah beroperasi melalui berbagai divisi strategis, masing-masing dengan fokus program
                            kerja yang jelas dan terukur. Setiap divisi bekerja keras untuk mewujudkan visi kami dalam mengembangkan
                            koperasi yang modern, mandiri, dan berdaya saing.
                        </p>

                    </div>
                </div>
            </section>

            <section className='py-20 px-4 md:px-6 lg:px-8 bg-sky-50'>
                <div className='max-w-7xl mx-auto'>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Detail Program Kerja Setiap Divisi</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Eksplorasi mendalam program-program strategis yang dijalankan setiap divisi
                        </p>
                    </div>

                    <div className='space-y-6'>
                        {divisions.map((division) => (
                            <div key={division.id} className="grid lg:grid-cols-3 gap-8">
                                {/* Division Info */}
                                <div className="lg:col-span-2 space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <div className="flex items-center gap-4 mb-4">
                                                {/* <div className={`p-3 ${division.color} rounded-lg`}>
                                                    <division.icon className="h-6 w-6 text-white" />
                                                </div> */}
                                                <div>
                                                    <CardTitle className="text-2xl">{division.name}</CardTitle>
                                                    <CardDescription className="text-lg">{division.description}</CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            {/* Tujuan */}
                                            <div>
                                                <h4 className="font-semibold text-lg mb-2 flex items-center">
                                                    <Target className="h-5 w-5 mr-2 text-sky-600" />
                                                    Tujuan Divisi
                                                </h4>
                                                <p className="text-gray-600 bg-sky-50 p-4 rounded-lg">{division.tujuan}</p>
                                            </div>

                                            {/* Program Unggulan */}
                                            <div>
                                                <h4 className="font-semibold text-lg mb-4 flex items-center">
                                                    <Award className="h-5 w-5 mr-2 text-sky-600" />
                                                    Program Unggulan
                                                </h4>
                                                <div className="space-y-3">
                                                    {division.programUnggulan.map((program, idx) => (
                                                        <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                                            <div className="w-6 h-6 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                                                                {idx + 1}
                                                            </div>
                                                            <span className="text-gray-700">{program}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Output & Outcome */}
                                            <div>
                                                <h4 className="font-semibold text-lg mb-2 flex items-center">
                                                    <BarChart3 className="h-5 w-5 mr-2 text-sky-600" />
                                                    Output & Outcome
                                                </h4>
                                                <p className="text-gray-600 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                                                    {division.output}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Team & Schedule */}
                                <div className="space-y-6">
                                    {/* Team Info */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center">
                                                <Users className="h-5 w-5 mr-2 text-sky-600" />
                                                Tim Divisi
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                <div>
                                                    <div className="font-semibold text-sky-600">Ketua Divisi</div>
                                                    <div className="text-gray-700">{division.ketua}</div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-sky-600 mb-2">Anggota Tim</div>
                                                    <div className="space-y-1">
                                                        {division.anggota.map((anggota, idx) => (
                                                            <div key={idx} className="text-gray-700 text-sm">
                                                                • {anggota}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>


                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </section>
        </div>
    )
}

export default page
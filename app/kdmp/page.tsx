'use client'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Building2, CheckCircle, CircleCheckBig, Handshake, Shield, TrendingUp, Users } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaWhatsapp } from "react-icons/fa";



interface Phase {
    id: number;
    title: string;
    period: string;
    description: string;
    color: string;
}


const page = () => {



    const phases: Phase[] = [
        {
            id: 1,
            title: "Bulan 1-3",
            period: "Fase Persiapan",
            description: "Legalitas lengkap, proposal bisnis siap, pengurus memahami dasar koperasi dan manajemen.",
            color: "bg-blue-500"
        },
        {
            id: 2,
            title: "Bulan 4-6",
            period: "Fase Implementasi Awal",
            description: "Pinjaman disetujui, dana awal cair, dokumen dan perjanjian lengkap.",
            color: "bg-green-500"
        },
        {
            id: 3,
            title: "Bulan 7-12",
            period: "Fase Operasional",
            description: "Bisnis beroperasi, angsuran masa tenggang lancar, sistem operasional dan keuangan berjalan baik.",
            color: "bg-orange-500"
        },
        {
            id: 4,
            title: "Bulan 13+",
            period: "Fase Pertumbuhan",
            description: "Angsuran penuh dibayar konsisten, koperasi profitable dan berkelanjutan, tata kelola kuat, risiko terkendali.",
            color: "bg-purple-500"
        }
    ];

    return (
        <div className='h-min-screen bg-gray-50'>
            {/* Hero Section */}
            <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 md:space-y-8">
                            <div className="space-y-4">
                                <Badge className="bg-white/20 text-white hover:bg-white/30">KDMP/KKMP</Badge>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                    Kerangka Kerja Pendampingan
                                    <span className="text-sky-200"> Komprehensif</span>
                                    <br />
                                    KDMP/KKMP
                                </h1>
                                <p className="text-lg md:text-xl text-sky-100 leading-relaxed">
                                    Satu Tahun Menuju Kemandirian: Membekali pengurus koperasi dengan
                                    keterampilan, memfasilitasi pinjaman, mendukung operasional, dan
                                    memastikan profitabilitas.
                                </p>
                            </div>

                            {/* Mobile: Vertical Stack, Desktop: Flex Wrap */}
                            <div className='mt-6 md:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-4'>
                                <Badge className='flex items-center gap-2 border-green-500 bg-green-500 text-sm md:text-base text-white hover:bg-green-300 '>
                                    <CircleCheckBig size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                                    <span className="text-left">Membekali keterampilan pengurus.</span>
                                </Badge>
                                <Badge className='flex items-center gap-2 border-green-500 bg-green-500 text-sm md:text-base text-white hover:bg-green-300'>
                                    <CircleCheckBig size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                                    <span className="text-left">Memfasilitasi pengajuan pinjaman.</span>
                                </Badge>
                                <Badge className='flex items-center gap-2 border-green-500 bg-green-500 text-sm md:text-base text-white hover:bg-green-300 '>
                                    <CircleCheckBig size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                                    <span className="text-left">Mendukung operasional bisnis.</span>
                                </Badge>
                                <Badge className='flex items-center gap-2 border-green-500 bg-green-500 text-sm md:text-base text-white hover:bg-green-300 '>
                                    <CircleCheckBig size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                                    <span className="text-left">Memastikan kemampuan membayar angsuran.</span>
                                </Badge>
                                <Badge className='flex items-center gap-2 border-green-500 bg-green-500 text-sm md:text-base text-white hover:bg-green-300'>
                                    <CircleCheckBig size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                                    <span className="text-left">Mencapai profitabilitas.</span>
                                </Badge>
                            </div>
                        </div>

                        <div className="relative mt-8 lg:mt-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl transform rotate-3"></div>
                            <Image
                                src="/meet.jpg"
                                alt="Temu Bisnis Online Platform"
                                width={600}
                                height={500}
                                className="relative rounded-3xl shadow-2xl w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-sky-50 to-white'>
                <div className='flex flex-col justify-center items-center space-y-6'>
                    <h1 className='text-4xl font-bold'>Parameter Pinjaman
                    </h1>
                    <Card className="border-blue-200 w-full">
                        <CardHeader>

                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                                <span className="font-medium">Tingkat Suku Bunga/Margin/Bagi Hasil</span>
                                <span className="font-bold text-blue-700">6% per tahun</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                                <span className="font-medium">Jangka Waktu Maksimal</span>
                                <span className="font-bold text-blue-700">72 bulan</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                                <span className="font-medium">Masa Tenggang (Grace Period)</span>
                                <span className="font-bold text-blue-700">6-8 bulan</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <section className=" bg-white">
                <div className=' mx-auto '>
                    <div className='grid grid-cols-1 md:grid-cols-5'>
                        {/* Top-left section */}
                        <div className='overflow-hidden col-span-1'>
                            <Image
                                src='/phase1.png'
                                alt='A mother and son looking at a tablet together'
                                className='object-cover object-top'
                                width={400}
                                height={300}
                            />
                        </div>

                        {/* Top-right section */}
                        <div className='flex flex-col overflow-hidden col-span-4 justify-start  bg-sky-50 p-8'>
                            <h2 className='mb-4 text-3xl font-bold'>
                                Fase 1: Persiapan & Peningkatan Kapasitas Awal
                            </h2>
                            <strong>Waktu: Bulan 1-3</strong>
                            <ul className='list-disc pl-5 mt-10 space-y-2'>
                                <li>
                                    <p className='text-sm font-bold'>Bulan 1: Identifikasi Potensi & Fondasi Koperasi</p>
                                    <p className='text-base '>Analisis SWOT, pemetaan desa, penentuan bisnis inti, pelatihan dasar koperasi, dan pengurusan legalitas.</p>
                                </li>
                                <li>
                                    <p className='text-sm font-bold'>Bulan 2-3: Perencanaan Bisnis & Keuangan Dasar</p>
                                    <p className='text-base '>Penyusunan proposal bisnis, manajemen keuangan dasar, manajemen operasional dasar, dan pembukuan sederhana.</p>
                                </li>
                            </ul>
                            <div className="mt-10 flex justify-start">
                                <a href="https://wa.me/6281228797795" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:bg-sky-700 hover:text-white text-base px-5 py-2.5"
                                    >
                                        <FaWhatsapp size={24} />
                                        Konsultasi Sekarang!
                                    </Button>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-5'>

                        {/* Bottom-left section */}
                        <div className='flex flex-col col-span-4 justify-start  bg-white p-8'>
                            <h2 className='mb-4 text-3xl font-bold'>
                                Fase 2: Pengajuan Pinjaman & Pencairan Awal
                            </h2>
                            <strong>Waktu: Bulan 4-6</strong>
                            <ul className='list-disc pl-5 mt-10 space-y-2'>
                                <li>
                                    <p className='text-sm font-bold'>Bulan 4: Finalisasi Dokumen</p>
                                    <p className='text-base '>Review proposal bisnis, penyesuaian persyaratan bank, dan pengumpulan dokumen pendukung.</p>
                                </li>
                                <li>
                                    <p className='text-sm font-bold'>Bulan 5: Proses di Bank</p>
                                    <p className='text-base '>Pengajuan usulan pinjaman, pendampingan penilaian, koordinasi dengan bank, dan persetujuan kepala daerah.</p>
                                </li>
                                <li>
                                    <p className='text-sm font-bold'>Bulan 6: Pencairan Dana</p>
                                    <p >Penandatanganan perjanjian pinjaman, surat kuasa, penyampaian OM-SPAN TKD, dan pencairan dana awal</p>
                                </li>
                            </ul>
                            <div className="mt-10 flex justify-start">
                                <a href="https://wa.me/6281228797795" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:bg-sky-700 hover:text-white text-base px-5 py-2.5"
                                    >
                                        <FaWhatsapp size={24} />
                                        Konsultasi Sekarang!
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Bottom-right section */}
                        <div className='overflow-hidden col-span-1'>
                            <Image
                                src="/phase2.png"
                                alt='A person holding a phone with an SMS from a government agency'
                                className='h-full w-full object-cover object-bottom'
                                width={400}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
                <div className=' mx-auto '>
                    <div className='grid grid-cols-1 md:grid-cols-5'>
                        {/* Top-left section */}
                        <div className='overflow-hidden col-span-1'>
                            <Image
                                src='/phase3.png'
                                alt='A mother and son looking at a tablet together'
                                className='object-cover object-top'
                                width={400}
                                height={300}
                            />
                        </div>

                        {/* Top-right section */}
                        <div className="flex flex-col overflow-hidden col-span-4 justify-start bg-sky-50 p-8 rounded-lg">
                            <h2 className="mb-4 text-3xl font-bold">
                                Fase 3: Set Up Bisnis & Angsuran Masa Tenggang
                            </h2>
                            <strong>Waktu: Bulan 7-12</strong>
                            <ul className="list-disc pl-5 mt-10 space-y-2">
                                <li>
                                    <p className="text-sm font-bold">Bulan 7-8: Set Up Bisnis</p>
                                    <p className="text-base">
                                        Pencairan dana belanja modal, operasional bisnis, pelatihan pemasaran, dan manajemen SDM.
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm font-bold">Bulan 9-12: Pemantauan & Angsuran Masa Tenggang</p>
                                    <p className="text-base">
                                        Pembayaran bunga bulanan, monitoring kinerja, pencatatan keuangan, dan pelatihan lanjutan.
                                    </p>
                                </li>
                            </ul>

                            {/* Tombol WhatsApp */}
                            <div className="mt-10 flex justify-start">
                                <a href="https://wa.me/6281228797795" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:bg-sky-700 hover:text-white text-base px-5 py-2.5"
                                    >
                                        <FaWhatsapp size={24} />
                                        Konsultasi Sekarang!
                                    </Button>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2'>

                        {/* Bottom-left section */}
                        <div className='flex flex-col  col-span-1 overflow-hidden justify-center bg-sky-200 p-8'>
                            <div className='flex flex-col'>
                                <h2 className='mb-4 text-3xl font-bold'>
                                    Fase 4: Angsuran Penuh & Keberlanjutan Jangka Panjang
                                </h2>
                                <strong>Waktu: Bulan 13 dan seterusnya
                                </strong>
                                <div className="mt-10 flex justify-start">
                                    <a href="https://wa.me/6281228797795" target="_blank" rel="noopener noreferrer">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:bg-sky-700 hover:text-white text-base px-5 py-2.5"
                                        >
                                            <FaWhatsapp size={24} />
                                            Konsultasi Sekarang!
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden col-span-1 bg-sky-100 '>
                            <ul className='list-disc pl-5 ml-5 space-y-2 p-10'>
                                <li>
                                    <p className='text-sm font-bold'>Pembayaran Angsuran Penuh
                                    </p>
                                    <p className='text-base '>Pembayaran pokok dan bunga bulanan, pemantauan status, pengelolaan arus kas, koordinasi dengan Bank.
                                    </p>
                                </li>
                                <li>
                                    <p className='text-sm font-bold'>Peningkatan Profitabilitas
                                    </p>
                                    <p className='text-base '>Diversifikasi modal, inovasi produk, ekspansi pasar, dan tata kelola terorganisir.
                                    </p>
                                </li>
                                <li>
                                    <p className='text-sm font-bold'>Mitigasi Risiko & Penanganan Masalah
                                    </p>
                                    <p >Prosedur dukungan pemerintah, strategi penanganan pinjaman bermasalah, sistem peringatan dini, rencana kontinjensi.
                                    </p>
                                </li>
                                <li>
                                    <p className='text-sm font-bold'>Pembangunan Kapasitas Berkelanjutan
                                    </p>
                                    <p>Pelatihan lanjutan, mentoring, pelibatan generasi muda, dan transfer knowledge antar koperasi.
                                    </p>
                                </li>
                                <li>
                                    <p className='text-sm font-bold'>Pelaporan Keuangan Standar
                                    </p>
                                    <p>Pelaporan Keuangan Standar
                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </section>

            <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Target Akhir</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Pencapaian yang diharapkan dari program pendampingan komprehensif
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="font-bold text-lg text-green-800 mb-2">Angsuran Konsisten</h3>
                                <p className="text-green-700 text-sm">Koperasi mampu membayar angsuran penuh secara konsisten.</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-lg text-blue-800 mb-2">Bisnis Tumbuh & Profit</h3>
                                <p className="text-blue-700 text-sm">Bisnis koperasi tumbuh dan menghasilkan profit berkelanjutan.</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <Building2 className="h-8 w-8 text-purple-600" />
                                </div>
                                <h3 className="font-bold text-lg text-purple-800 mb-2">Tata Kelola Kuat</h3>
                                <p className="text-purple-700 text-sm">Koperasi memiliki tata kelola yang kuat dan berkelanjutan.</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <Shield className="h-8 w-8 text-orange-600" />
                                </div>
                                <h3 className="font-bold text-lg text-orange-800 mb-2">Risiko Diminimalkan</h3>
                                <p className="text-orange-700 text-sm">Risiko gagal bayar diminimalkan melalui pemantauan ketat.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="py-20 px-4 md:px-6 lg:px-8 bg-sky-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Solusi Mengatasi Tantangan Utama</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Pendekatan komprehensif untuk mengatasi tantangan yang sering dihadapi koperasi
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="border-red-200">
                            <CardHeader>
                                <CardTitle className="text-red-700 flex items-center gap-2">
                                    Personil Tidak Menguasai Bisnis
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">
                                    Pendampingan intensif, learning by doing, penggunaan teknologi sederhana, penyederhanaan proses, dan
                                    pendampingan berkelanjutan.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-yellow-200">
                            <CardHeader>
                                <CardTitle className="text-yellow-700 flex items-center gap-2">
                                    Dibentuk Buru-buru
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">
                                    Kerangka kerja terstruktur, memastikan koperasi hidup, tahapan jelas, pembangunan fondasi kuat, dan
                                    fokus keberlanjutan.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-200">
                            <CardHeader>
                                <CardTitle className="text-blue-700 flex items-center gap-2">
                                    Tidak Bisa Membuat Bisnis Plan
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">
                                    Modul pelatihan khusus, pendampingan langsung, bimbingan langkah demi langkah, template proven, dan
                                    review berkelanjutan.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-green-200">
                            <CardHeader>
                                <CardTitle className="text-green-700 flex items-center gap-2">
                                    Tidak Bisa Menjalankan Bisnis
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">
                                    Pendampingan operasional intensif, implementasi praktis, manajemen SDM, pemantauan rutin, identifikasi
                                    masalah dini, solusi cepat, dan efisiensi.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kunci Sukses: Kolaborasi Strategis</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Keberhasilan jangka panjang, keberlanjutan operasional, profitabilitas berkelanjutan, dan kemandirian
                            koperasi
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="text-center border-sky-200 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-8 w-8 text-sky-600" />
                                </div>
                                <h3 className="font-bold text-lg text-sky-800 mb-2">Koperasi</h3>
                                <p className="text-sky-700 text-sm">Komitmen dan partisipasi aktif.</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <Handshake className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="font-bold text-lg text-green-800 mb-2">Pendamping</h3>
                                <p className="text-green-700 text-sm">Expertise dan pendampingan intensif.</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <Building2 className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-lg text-blue-800 mb-2">Bank</h3>
                                <p className="text-blue-700 text-sm">Dukungan finansial dan penilaian objektif.</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <Shield className="h-8 w-8 text-purple-600" />
                                </div>
                                <h3 className="font-bold text-lg text-purple-800 mb-2">Pemerintah Daerah</h3>
                                <p className="text-purple-700 text-sm">Regulasi dan dukungan kebijakan.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-16 px-4 bg-sky-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            Indikator Keberhasilan
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2">
                            Kerangka kerja ini menekankan kolaborasi antara koperasi, pendamping, Bank, dan pemerintah daerah untuk keberhasilan dan keberlanjutan
                            KDMP/KKMP.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical Line - Hidden on mobile, visible on desktop */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>

                        {/* Mobile Vertical Line - Left aligned on mobile */}
                        <div className="md:hidden absolute left-6 top-0 h-full w-0.5 bg-gray-300"></div>

                        {phases.map((phase, index) => (
                            <div key={phase.id} className="relative mb-8 md:mb-12 last:mb-0">
                                {/* Timeline Node - Desktop centered, Mobile left aligned */}
                                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 flex items-center justify-center">
                                    <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full ${phase.color} flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-lg`}>
                                        {phase.id}
                                    </div>
                                </div>

                                {/* Content - Full width on mobile, alternating on desktop */}
                                <div className={`flex items-center pl-16 md:pl-0 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                                        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 border-l-4 border-gray-200 hover:shadow-lg transition-shadow duration-300">
                                            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                                                {phase.title}
                                            </h3>
                                            <h4 className="text-sm md:text-md font-semibold text-gray-600 mb-3">
                                                {phase.period}
                                            </h4>
                                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                                {phase.description}
                                            </p>
                                        </div>
                                    </div>
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
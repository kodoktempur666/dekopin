'use client'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Building2, CheckCircle, CircleOff, Download, HandCoins, Handshake, Presentation, Scale, ScrollText, Shield, TrendingUp, Users } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaWhatsapp } from "react-icons/fa";



interface Phase {
    id: number;
    title: string;
    period?: string;
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

    const layanan: Phase[] = [
        {
            id: 1,
            title: "Proposal Usaha Bankable",
            description: `
            <p>
               ✅ Format proposal standar Bank BRI
            </p>
             <p>
               ✅ Kelengkapan dokumen lengkap
            </p>
             <p>
               ✅ Presentasi meyakinkan untuk approval
            </p>
             <p>
               ✅ Review berkali-kali hingga sempurna
            </p>

            `,
            color: "bg-blue-500"
        },
        {
            id: 2,
            title: "Analisa Potensi Usaha Realistis",
            description: `
            <p>
               ✅ Survey mendalam potensi ekonomi desa
            </p>
             <p>
               ✅ Identifikasi peluang bisnis tersembunyi
            </p>
             <p>
               ✅ Pemetaan kompetitor detail
            </p>
             <p>
               ✅ Positioning strategy yang tepat
            </p>

            `,
            color: "bg-green-500"
        },
        {
            id: 3,
            title: "Analisa Kelayakan Usaha (Feasibility Study)",
            description: `
            <p>
               ✅ Studi kelayakan untuk setiap jenis gerai
            </p>
             <p>
               ✅ ROI analysis dan break-even point
            </p>
             <p>
               ✅ Risk assessment dan mitigasi
            </p>

            `,
            color: "bg-orange-500"
        },
        {
            id: 4,
            title: "Analisa Keuangan & Skema Pengembalian Pinjaman",
            description: `
            <p>
               ✅ Cash flow projection 3-5 tahun
            </p>
             <p>
               ✅ Simulasi cicilan yang aman
            </p>
             <p>
               ✅ Strategi pengelolaan cash flow
            </p>

            `,
            color: "bg-purple-500"
        },
        {
            id: 5,
            title: "Setup Bisnis Awal",
            description: `
            <p>
               ✅ Standard Operating Procedures (SOP)
            </p>
             <p>
               ✅ Sistem manajemen operasional
            </p>
             <p>
               ✅ Digitalisasi dan sistem informasi
            </p>

            `,
            color: "bg-blue-500"
        },
        {
            id: 6,
            title: "Pemilihan Jenis Usaha yang Profitable",
            description: `
            <p>
               ✅ Prioritas dari 7 jenis gerai KDMP
            </p>
             <p>
               ✅ Analisa margin keuntungan per gerai
            </p>
             <p>
               ✅ Strategi diversifikasi yang aman
            </p>

            `,
            color: "bg-green-500"
        },
        {
            id: 7,
            title: "Pemilihan Segmen Market yang Tepat",
            description: `
            <p>
               ✅ Target market analysis
            </p>
             <p>
               ✅ Customer profiling dan behavior
            </p>
             <p>
               ✅ Market sizing dan penetration strategy
            </p>

            `,
            color: "bg-orange-500"
        },
        {
            id: 8,
            title: "Strategi Menjangkau Target Market",
            description: `
            <p>
               ✅ Marketing mix untuk setiap gerai
            </p>
             <p>
               ✅ Channel distribution yang efektif
            </p>
             <p>
               ✅ Customer acquisition strategy
            </p>

            `,
            color: "bg-purple-500"
        },
        {
            id: 9,
            title: "Pendampingan Implementasi",
            description: `
            <p>
               ✅ Monitoring setup operasional
            </p>
             <p>
               ✅ Troubleshooting masalah awal
            </p>
             <p>
               ✅ Quality control proses bisnis
            </p>

            `,
            color: "bg-blue-500"
        },
        {
            id: 10,
            title: "Rencana Alokasi Dana Pinjaman",
            description: `
            <p>
               ✅ Budget allocation yang optimal
            </p>
             <p>
               ✅ Capital expenditure vs operational expenditure
            </p>
             <p>
               ✅ Reserve fund dan emergency planning
            </p>

            `,
            color: "bg-green-500"
        },
    ];

    return (
        <div className='h-min-screen bg-gray-50'>
            {/* Hero Section */}
            <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 md:space-y-8">
                            <div className="space-y-4">
                                <Badge className="bg-white/20 text-white hover:bg-white/30">KDMP</Badge>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                    Pendampingan Bisnis

                                    <br />
                                    <span className="text-sky-200"> KDMP</span>
                                </h1>
                                <p className="text-lg md:text-xl text-sky-100 leading-relaxed">
                                    Akses Permodalan untuk Pengembangan Ekonomi Desa
                                </p>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdO2YuOaS2aAEfoHlOTQ9Vc0rb8xJL-0AJZOkTQghKvIK0QSA/viewform" target="_blank" rel="noopener noreferrer">

                                    <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100  mt-7">
                                        Daftar Pendampingan
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                            </div>

                            {/* Mobile: Vertical Stack, Desktop: Flex Wrap */}
                            {/* <div className='mt-6 md:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-4'>
                                <Badge className='flex items-center gap-2 border-orange-500 bg-orange-500 text-sm md:text-base text-white hover:bg-orange-400 '>
                                    <Webhook size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                                    <span className="text-left">Banyak koperasi gagal karena salah pilih jenis usaha</span>
                                </Badge>
                                <Badge className='flex items-center gap-2 border-orange-500 bg-orange-500 text-sm md:text-base text-white hover:bg-orange-400 '>
                                    <Webhook size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                                    <span className="text-left">Proposal tidak bankable dan ditolak bank</span>
                                </Badge>
                                <Badge className='flex items-center gap-2 border-orange-500 bg-orange-500 text-sm md:text-base text-white hover:bg-orange-400 '>
                                    <Webhook size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                                    <span className="text-left">Manajemen keuangan buruk hingga macet cicilan</span>
                                </Badge>
                                <Badge className='flex items-center gap-2 border-orange-500 bg-orange-500 text-sm md:text-base text-white hover:bg-orange-400 '>
                                    <Webhook size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                                    <span className="text-left">Tidak ada analisa market yang realistis</span>
                                </Badge>
                                <Badge className='flex items-center gap-2 border-orange-500 bg-orange-500 text-sm md:text-base text-white hover:bg-orange-400'>
                                    <Webhook size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                                    <span className="text-left">Setup operasional yang tidak efisien</span>
                                </Badge>
                            </div> */}
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
                    <h1 className='text-4xl font-bold'>Mengapa 80% Koperasi Desa Gagal?
                    </h1>
                    <Card className="border-blue-200 w-2/3">
                        <CardHeader>

                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Badge className='flex items-center gap-2 p-3 border-red-500 bg-red-500 text-sm md:text-base text-white hover:bg-red-400'>
                                <CircleOff size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                                <span className="text-left">Banyak koperasi gagal karena salah pilih jenis usaha</span>
                            </Badge>
                            <Badge className='flex items-center gap-2 p-3 border-blue-500 bg-blue-500 text-sm md:text-base text-white hover:bg-blue-400'>
                                <ScrollText size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                                <span className="text-left">Proposal tidak bankable dan ditolak bank</span>
                            </Badge>
                            <Badge className='flex items-center gap-2 p-3 border-green-500 bg-green-500 text-sm md:text-base text-white hover:bg-green-400'>
                                <HandCoins size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                                <span className="text-left">Manajemen keuangan buruk hingga macet cicilan</span>
                            </Badge>
                            <Badge className='flex items-center gap-2 p-3 border-yellow-500 bg-yellow-500 text-sm md:text-base text-white hover:bg-yellow-400'>
                                <Presentation size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                                <span className="text-left">Tidak ada analisa market yang realistis</span>
                            </Badge>
                            <Badge className='flex items-center gap-2 p-3 border-purple-500 bg-purple-500 text-sm md:text-base text-white hover:bg-purple-400'>
                                <Handshake size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                                <span className="text-left">Setup operasional yang tidak efisien</span>
                            </Badge>
                        </CardContent>
                    </Card>
                    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8'>
                        <div className='flex flex-col gap-1'>
                            <h2 className="text-sky-600 font-bold text-3xl lg:text-4xl leading-tight">SOLUSI</h2>
                            <h2 className="text-sky-600 font-bold text-3xl lg:text-4xl leading-tight">TERBUKTI KAMI</h2>
                        </div>
                        <div className="lg:max-w-2xl">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Pendampingan Intensif <span className="font-semibold text-sky-600">1 Bulan</span> dengan metodologi teruji untuk memastikan koperasi Anda memilih usaha yang profitable, proposal 100% bankable, dan sistem operasional yang sehat sejak awal.
                            </p>
                            <div className="mt-4 inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg border border-green-200">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                <span className="font-semibold">Tingkat keberhasilan approval bank 95%!</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="py-8 md:py-16 px-4 bg-sky-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            10 Fokus Layanan Unggulan Kami
                        </h2>

                    </div>

                    <div className="relative">
                        {/* Vertical Line - Hidden on mobile, visible on desktop */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>

                        {/* Mobile Vertical Line - Left aligned on mobile */}
                        <div className="md:hidden absolute left-6 top-0 h-full w-0.5 bg-gray-300"></div>

                        {layanan.map((phase, index) => (
                            <div key={phase.id} className="relative mb-8 md:mb-12 last:mb-0">
                                {/* Timeline Node - Desktop centered, Mobile left aligned */}
                                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 flex items-center justify-center">
                                    <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full ${phase.color} flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-lg`}>
                                        {phase.id}
                                    </div>
                                </div>

                                {/* Content - Full width on mobile, alternating on desktop */}
                                <div className={`flex items-center pl-16 md:pl-0 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-left' : 'md:pl-8 md:text-left'}`}>
                                        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 border-l-4 border-gray-200 hover:shadow-lg transition-shadow duration-300">
                                            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                                                {phase.title}
                                            </h3>

                                            <div
                                                className=" max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
                                                dangerouslySetInnerHTML={{ __html: phase.description }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className=" bg-white">
                <div className=' mx-auto '>
                    <div className="text-center pb-5">
                        <h1 className="text-4xl font-bold relative inline-block pt-10 pb-2">
                            Metodologi Pendampingan 1 Bulan
                            <span className="block w-20 h-1 bg-blue-600 mx-auto mt-3"></span>
                        </h1>
                    </div>


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
                            <h2 className="mb-4 text-2xl sm:text-3xl md:text-3xl font-bold">
                                DIAGNOSTIC & SELECTION
                            </h2>

                            <ul className="list-disc pl-5 mt-10 space-y-2">
                                <li >
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Audit keuangan desa 3 tahun
                                    </p>
                                    <span className="block w-20 h-1 bg-green-600 mt-3"></span>
                                </li>
                                <li>
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Survey potensi ekonomi mendalam
                                    </p>
                                    <span className="block w-20 h-1 bg-green-600 mt-3"></span>

                                </li>
                                <li>
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Assessment kapasitas pengurus
                                    </p>
                                    <span className="block w-20 h-1 bg-green-600 mt-3"></span>

                                </li>
                                <li>
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Market research komprehensif
                                    </p>
                                    <span className="block w-20 h-1 bg-green-600 mt-3"></span>

                                </li>
                                <li>
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Workshop pemilihan gerai prioritas
                                    </p>
                                    <span className="block w-20 h-1 bg-green-600 mt-3"></span>

                                </li>
                            </ul>

                            <div className="mt-10 flex justify-start">
                                <Card className="text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:bg-sky-700 hover:text-white text-base px-5 py-2.5">
                                    Output: Selected Business Portfolio + Feasibility Report
                                </Card>
                                {/* <a href="https://wa.me/6281228797795" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:bg-sky-700 hover:text-white text-base px-5 py-2.5"
                                    >
                                        <FaWhatsapp size={24} />
                                        Konsultasi Sekarang!
                                    </Button>
                                </a> */}
                            </div>

                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-5'>

                        {/* Bottom-left section */}
                        <div className='flex flex-col col-span-4 justify-start  bg-white p-8'>
                            <h2 className='mb-4 text-3xl font-bold'>
                                BANKABLE PROPOSAL DEVELOPMENT
                            </h2>
                            {/* <strong>Waktu: Bulan 4-6</strong> */}
                            <ul className="list-disc pl-5 mt-10 space-y-2">
                                <li >
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Market analysis detail per gerai
                                    </p>
                                    <span className="block w-20 h-1 bg-yellow-600 mt-3"></span>
                                </li>
                                <li>
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Kompetitor benchmarking
                                    </p>
                                    <span className="block w-20 h-1 bg-yellow-600 mt-3"></span>

                                </li>
                                <li>
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Financial modeling scenarios
                                    </p>
                                    <span className="block w-20 h-1 bg-yellow-600 mt-3"></span>

                                </li>
                                <li>
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Risk analysis & mitigation
                                    </p>
                                    <span className="block w-20 h-1 bg-yellow-600 mt-3"></span>

                                </li>
                                <li>
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Compilation proposal BRI
                                    </p>
                                    <span className="block w-20 h-1 bg-yellow-600 mt-3"></span>

                                </li>
                            </ul>

                            <div className="mt-10 flex justify-start">
                                <Card className="text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:bg-sky-700 hover:text-white text-base px-5 py-2.5">
                                    Output: Complete Bankable Proposal + Legal Documents
                                </Card>
                                {/* <a href="https://wa.me/6281228797795" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:bg-sky-700 hover:text-white text-base px-5 py-2.5"
                                    >
                                        <FaWhatsapp size={24} />
                                        Konsultasi Sekarang!
                                    </Button>
                                </a> */}
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
                                src='/phase4.jpg'
                                alt='A mother and son looking at a tablet together'
                                className='object-cover object-top'
                                width={400}
                                height={300}
                            />
                        </div>

                        {/* Top-right section */}
                        <div className="flex flex-col overflow-hidden col-span-4 justify-start bg-sky-50 p-8 rounded-lg">
                            <h2 className="mb-4 text-3xl font-bold">
                                COMMUNITY APPROVAL
                            </h2>
                            {/* <strong>Waktu: Bulan 7-12</strong> */}
                            <ul className="list-disc pl-5 mt-10 space-y-2">
                                <li >
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Sosialisasi ke pengurus desa
                                    </p>
                                    <span className="block w-20 h-1 bg-blue-600 mt-3"></span>
                                </li>
                                <li>
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Preparation materials Musdes
                                    </p>
                                    <span className="block w-20 h-1 bg-blue-600 mt-3"></span>

                                </li>
                                <li>
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Stakeholder alignment
                                    </p>
                                    <span className="block w-20 h-1 bg-blue-600 mt-3"></span>

                                </li>
                                <li>
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Facilitation Musyawarah Desa
                                    </p>
                                    <span className="block w-20 h-1 bg-blue-600 mt-3"></span>

                                </li>
                                <li>
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Documentation & follow-up
                                    </p>
                                    <span className="block w-20 h-1 bg-blue-600 mt-3"></span>

                                </li>
                            </ul>
                            {/* Tombol WhatsApp */}
                            <div className="mt-10 flex justify-start">
                                <Card className="text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:bg-sky-700 hover:text-white text-base px-5 py-2.5">
                                    Output: Official Musdes Approval + Village Endorsement
                                </Card>
                                {/* <a href="https://wa.me/6281228797795" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:bg-sky-700 hover:text-white text-base px-5 py-2.5"
                                    >
                                        <FaWhatsapp size={24} />
                                        Konsultasi Sekarang!
                                    </Button>
                                </a> */}
                            </div>
                        </div>

                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-5'>
                        <div className="flex flex-col overflow-hidden col-span-4 justify-start bg-sky-50 p-8 rounded-lg">
                            <h2 className="mb-4 text-3xl font-bold">
                                BANK SUBMISSION
                            </h2>
                            {/* <strong>Waktu: Bulan 7-12</strong> */}
                            <ul className="list-disc pl-5 mt-10 space-y-2">
                                <li >
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Final document quality control
                                    </p>
                                    <span className="block w-20 h-1 bg-green-600 mt-3"></span>
                                </li>
                                <li>
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Bank submission dengan pendampingan
                                    </p>
                                    <span className="block w-20 h-1 bg-green-600 mt-3"></span>

                                </li>
                                <li>
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        Presentation coaching
                                    </p>
                                    <span className="block w-20 h-1 bg-green-600 mt-3"></span>

                                </li>
                                <li>
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        SOP development operasional
                                    </p>
                                    <span className="block w-20 h-1 bg-green-600 mt-3"></span>

                                </li>
                                <li>
                                    <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                        System setup & launch strategy
                                    </p>
                                    <span className="block w-20 h-1 bg-green-600 mt-3"></span>

                                </li>
                            </ul>
                            {/* Tombol WhatsApp */}
                            <div className="mt-10 flex justify-start">
                                <Card className="text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:bg-sky-700 hover:text-white text-base px-5 py-2.5">
                                    Output: Bank Submission + Operational Framework
                                </Card>
                                {/* <a href="https://wa.me/6281228797795" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:bg-sky-700 hover:text-white text-base px-5 py-2.5"
                                    >
                                        <FaWhatsapp size={24} />
                                        Konsultasi Sekarang!
                                    </Button>
                                </a> */}
                            </div>
                        </div>
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


                    </div>
                    {/* <div className='grid grid-cols-1 md:grid-cols-2'>

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
                    </div> */}
                </div>

            </section>

            <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Deliverables Lengkap Yang Anda Terima</h2>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <ScrollText className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="font-bold text-lg text-green-800 mb-2">Strategic Documents</h3>
                                <ul className="list-disc text-start pl-5 mt-10 space-y-2">
                                    <li>
                                        <p className="text-lg">
                                            Comprehensive Feasibility Study
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-lg">
                                            Bankable Business Plan
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-lg">
                                            Financial Model & Projections
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-lg">
                                            Market Analysis Report
                                        </p>
                                    </li>

                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <Scale className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-lg text-blue-800 mb-2">Legal & Compliance</h3>
                                <ul className="list-disc text-start pl-5 mt-10 space-y-2">
                                    <li>
                                        <p className="text-lg">
                                            Complete Legal Package
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-lg">
                                            Musdes Documentation
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-lg">
                                            Bank Submission Package
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-lg">
                                            Compliance Checklist
                                        </p>
                                    </li>

                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <Building2 className="h-8 w-8 text-purple-600" />
                                </div>
                                <h3 className="font-bold text-lg text-purple-800 mb-2">Operational Framework</h3>
                                <ul className="list-disc text-start pl-5 mt-10 space-y-2">
                                    <li>
                                        <p className="text-lg">
                                            Multi-Gerai SOP Manual
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-lg">
                                            Financial Management System
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-lg">
                                            Performance Dashboard
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-lg">
                                            Risk Management Guide
                                        </p>
                                    </li>

                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <Shield className="h-8 w-8 text-orange-600" />
                                </div>
                                <h3 className="font-bold text-lg text-orange-800 mb-2">Implementation Support</h3>
                                <ul className="list-disc text-start pl-5 mt-10 space-y-2">
                                    <li>
                                        <p className="text-lg">
                                            Staff Training Materials
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-lg">
                                            Marketing Kit
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-lg">
                                            Launch Strategy Guide
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-lg">
                                            Post-Launch Monitoring Tools
                                        </p>
                                    </li>

                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-blue-700">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Siap Menjadi kdmp / kkmp yang Sukses?
                    </h2>
                    <p className="text-xl text-sky-100 mb-8 leading-relaxed">
                        Mengapa KDMP / KKMP berpotensi Gagal?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdO2YuOaS2aAEfoHlOTQ9Vc0rb8xJL-0AJZOkTQghKvIK0QSA/viewform" target="_blank" rel="noopener noreferrer">

                            <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
                                Daftar Pendampingan
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </a>

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
                        <a
                            href="/PENDAMPINGAN KDMP 1 BULAN - 8 SEPTEMBER.pdf"
                            download
                            className="inline-flex items-center justify-center"
                        >
                            <Button
                                size="lg"
                                className="bg-green-500 text-white hover:bg-green-400"
                            >
                                <Download />
                                Download Proposal
                            </Button>
                        </a>

                    </div>
                    <p className="text-xl text-sky-100 mb-8 leading-relaxed mt-10">
                        <span className='font-bold text-xl'>PROMO KHUSUS KOPERASI BARU:</span>  Hanya 5 koperasi merah putih per bulan | Dapatkan bonus consultation 6 bulan FREE
                    </p>
                </div>
            </section>
            {/* <section className="py-20 px-4 md:px-6 lg:px-8 bg-sky-50">
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
            </section> */}

            {/* <section className="py-8 md:py-16 px-4 bg-sky-100">
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
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>

                        <div className="md:hidden absolute left-6 top-0 h-full w-0.5 bg-gray-300"></div>

                        {phases.map((phase, index) => (
                            <div key={phase.id} className="relative mb-8 md:mb-12 last:mb-0">
                                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 flex items-center justify-center">
                                    <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full ${phase.color} flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-lg`}>
                                        {phase.id}
                                    </div>
                                </div>

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
            </section> */}
        </div>

    )
}

export default page
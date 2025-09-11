'use client'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Brain, Building2, CircleDivideIcon,  Clock, CreditCard, Download, FileText,  Handshake, Hotel,  Scale, Speech,  Users } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaWhatsapp } from "react-icons/fa";



const page = () => {


    const manfaat = [
        "Pengetahuan komprehensif KDMP A-Z",
        "Networking dengan praktisi & bank",
        "Tools siap pakai",
        "Dukungan berkelanjutan",
        "Peluang pendanaan langsung ke bank",
    ]

    const fasilitas = [
        "Modul regulasi KDMP (hard & soft copy)",
        "Template proposal bisnis",
        "Checklist & contoh proposal lolos bank",
        "Video tutorial & konsultasi follow-up",
        "Sertifikat resmi peserta",
        "Konsumsi full selama acara",
    ]


    const cardData = [
        {
            title: "Dasar hukum & regulasi KDMP",
            icon: Scale,
            bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
            borderColor: "border-blue-300",
            iconColor: "text-blue-600"
        },
        {
            title: "Kriteria debitur & persyaratan",
            icon: Users,
            bgColor: "bg-gradient-to-br from-green-100 to-green-200",
            borderColor: "border-green-300",
            iconColor: "text-green-600"
        },
        {
            title: "Peran & fungsi stakeholder",
            icon: Building2,
            bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
            borderColor: "border-purple-300",
            iconColor: "text-purple-600"
        },
        {
            title: "Proposal bisnis berbasis Data & AI",
            icon: Brain,
            bgColor: "bg-gradient-to-br from-pink-100 to-pink-200",
            borderColor: "border-pink-300",
            iconColor: "text-pink-600"
        },
        {
            title: "Prosedur & penilaian kredit bank",
            icon: CreditCard,
            bgColor: "bg-gradient-to-br from-amber-100 to-amber-200",
            borderColor: "border-amber-300",
            iconColor: "text-amber-600"
        },
        {
            title: "BMC, SOP, regulasi & kelayakan usaha",
            icon: FileText,
            bgColor: "bg-gradient-to-br from-teal-100 to-teal-200",
            borderColor: "border-teal-300",
            iconColor: "text-teal-600"
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
                                        Daftar Sekarang
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                                <p className="text-sm md:text-sm text-sky-100 leading-relaxed">
                                    Kuota terbatas hanya 35 peserta!
                                </p>
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

            <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Mengapa Wajib Ikut?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <Card className="text-center border-sky-200 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-8 w-8 text-sky-600" />
                                </div>
                                <h3 className="font-bold text-lg text-sky-800 mb-2">Untuk Kepala Desa</h3>
                                <ul className="list-disc text-start pl-5 mt-10 space-y-2">
                                    <li >
                                        <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                            Otoritas persetujuan kredit KDMP
                                        </p>
                                        <span className="block w-20 h-1 bg-sky-600 mt-3"></span>
                                    </li>
                                    <li>
                                        <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                            Wajib melakukan kajian proposal bisnis (Permendes 10/2025)
                                        </p>
                                        <span className="block w-20 h-1 bg-sky-600 mt-3"></span>

                                    </li>
                                    <li>
                                        <p className="text-lg sm:text-lg md:text-2xl font-bold">
                                            Penanggung jawab keberlanjutan ekonomi desa
                                        </p>
                                        <span className="block w-20 h-1 bg-sky-600 mt-3"></span>

                                    </li>

                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <Handshake className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="font-bold text-lg text-green-800 mb-2">Untuk Pengurus Koperasi</h3>
                                <ul className="list-disc pl-5 mt-10 space-y-2">
                                    <li >
                                        <p className="text-lg text-left sm:text-lg md:text-2xl font-bold">
                                            Penyusun proposal bisnis sesuai standar Bank
                                        </p>
                                        <span className="block w-20 h-1 bg-green-600 mt-3"></span>
                                    </li>
                                    <li>
                                        <p className="text-lg text-left sm:text-lg md:text-2xl font-bold">
                                            Penanggung jawab keuangan & pelaporan

                                        </p>
                                        <span className="block w-20 h-1 bg-green-600 mt-3"></span>

                                    </li>
                                    <li>
                                        <p className="text-lg text-left sm:text-lg md:text-2xl font-bold">
                                            Penghubung utama dengan anggota & stakeholder
                                        </p>
                                        <span className="block w-20 h-1 bg-green-600 mt-3"></span>

                                    </li>

                                </ul>
                            </CardContent>
                        </Card>


                    </div>
                </div>
            </section>

            <section className='bg-sky-50'>
                <div className='grid grid-cols-1 md:grid-cols-2'>

                    <div className='flex flex-col  col-span-1 overflow-hidden justify-center bg-sky-200 p-8'>
                        <div className='flex flex-col'>
                            <h2 className='mb-4 text-5xl font-bold'>
                                Materi Inti
                            </h2>

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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-50 ">
                        {cardData.map((card, index) => {
                            const IconComponent = card.icon;
                            return (
                                <div
                                    key={index}
                                    className={`${card.bgColor} ${card.borderColor} border-2 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300  cursor-pointer group`}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className={`${card.iconColor} bg-white p-3 rounded-lg shadow-md  transition-transform duration-300`}>
                                            <IconComponent size={28} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-gray-800 leading-tight group-hover:text-gray-900 transition-colors duration-300">
                                                {card.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="mt-4 h-1 bg-white rounded-full opacity-30"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-sky-50 mb-10 px-4 sm:px-6 lg:px-12 py-10">
                <h2 className="mb-6 text-center text-3xl sm:text-4xl font-bold text-gray-800">
                    Fasilitas & Manfaat
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Card 1 */}
                    <Card className="border-l-4 border-l-green-600 bg-green-50 p-4 sm:p-6 lg:p-8">
                        <CardHeader className="p-0 mb-4">
                            <CardTitle className="flex items-center text-green-800 text-xl font-semibold">
                                <Users className="h-6 w-6 mr-2" />
                                Fasilitas Peserta
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <ul className="space-y-2 text-gray-700">
                                {fasilitas.map((mission, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                        {mission}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card className="border-l-4 border-l-blue-600 bg-blue-50 p-4 sm:p-6 lg:p-8">
                        <CardHeader className="p-0 mb-4">
                            <CardTitle className="flex items-center text-blue-800 text-xl font-semibold">
                                <Speech className="h-6 w-6 mr-2" />
                                Manfaat Utama
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <ul className="space-y-2 text-gray-700">
                                {manfaat.map((mission, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                        {mission}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>


            <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-blue-700">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Detail Kegiatan
                    </h2>

                    <div className="space-y-6 text-left">
                        <div className="flex items-center  text-base sm:text-lg md:text-xl text-sky-100">
                            <div className="w-10 flex mr-3 justify-center flex-shrink-0">
                                <Hotel className="h-8 w-8 text-yellow-300 font-bold stroke-[2.5]" />
                            </div>
                            <div className="flex-1">
                                <span className="font-semibold">Tempat:</span>{" "}
                                Dekopinda (Dewan Koperasi Indonesia Daerah)
                            </div>
                        </div>

                        <div className="flex items-center  text-base sm:text-lg md:text-xl text-sky-100">
                            <div className="w-10 flex mr-3 justify-center flex-shrink-0">
                                <Clock className="h-8 w-8 text-orange-400 font-bold stroke-[2.5]" />
                            </div>
                            <div className="flex-1">
                                <span className="font-semibold">Waktu:</span>{" "}
                                Sehari Penuh (08.00 – 16.00 WIB)
                            </div>
                        </div>

                        <div className="flex items-center text-base sm:text-lg md:text-xl text-sky-100">
                            <div className="w-10 flex mr-3 justify-center flex-shrink-0">
                                <Users className="h-8 w-8 text-pink-300 font-bold stroke-[2.5]" />
                            </div>
                            <div className="flex-1">
                                <span className="font-semibold">Target Peserta:</span>{" "}
                                Minimal 35 orang
                            </div>
                        </div>

                        {/* <div className="flex items-center  text-base sm:text-lg md:text-xl text-sky-100">
                            <div className="w-10 flex mr-3 justify-center flex-shrink-0">
                                <CircleDivideIcon className="h-8 w-8 text-green-400 font-bold stroke-[2.5]" />
                            </div>
                            <div className="flex-1">
                                <span className="font-semibold">Investasi:</span>{" "}
                                Rp 500.000 / Peserta
                            </div>
                        </div> */}
                    </div>


                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                        <a href="https://wa.me/6281228797795" target="_blank" rel="noopener noreferrer">
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:bg-sky-700 hover:text-white text-base px-5 py-2.5"
                            >
                                <FaWhatsapp size={24} className="mr-2" />
                                Konsultasi Sekarang!
                            </Button>
                        </a>

                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdO2YuOaS2aAEfoHlOTQ9Vc0rb8xJL-0AJZOkTQghKvIK0QSA/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
                                Daftar Pendampingan
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </a>

                        <a
                            href="/PENDAMPINGAN KDMP 1 BULAN - 8 SEPTEMBER.pdf"
                            download
                            className="inline-flex items-center justify-center"
                        >
                            <Button size="lg" className="bg-green-500 text-white hover:bg-green-400">
                                <Download className="mr-2" />
                                Download Proposal
                            </Button>
                        </a>
                    </div>

                    {/* <p className="text-xl text-sky-100 leading-relaxed mt-10">
                        <span className="font-bold text-xl">PROMO KHUSUS KOPERASI BARU:</span>{" "}
                        Hanya 5 koperasi merah putih per bulan | Dapatkan bonus consultation 6 bulan FREE
                    </p> */}
                    <p className="text-xl text-sky-100 leading-relaxed mt-10">
                        {/* <span className="font-bold text-xl">PROMO KHUSUS KOPERASI BARU:</span>{" "} */}
                        Kesempatan ini hanya datang sekali. Jangan biarkan desa Anda tertinggal.
                    </p>
                </div>
            </section>





        </div>

    )
}

export default page
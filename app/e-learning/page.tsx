"use client"


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {  Clock,  Download, CircleCheckBig, Check, FileText, Calendar, MapPin, Wifi, } from "lucide-react"
import Image from "next/image"

export default function ELearningPage() {

    const courses = [
        {
            id: 1,
            title: 'Diklat Terstruktur: Fondasi & Mindset Kewirausahaan Koperasi',
            description:
                'Pelajari nilai-nilai inti koperasi, bangun mindset entrepreneur, dan kuasai dasar penyusunan business plan yang solid.',
            module: [
                'Fondasi Koperasi: Sejarah, Filosofi, Nilai & Prinsip, Peran Anggota & Pengurus',
                'Mindset Kewirausahaan Koperasi: Identifikasi Peluang, Manajemen Risiko Dasar',
                'Penyusunan Business Plan Sederhana: Komponen, Workshop Praktis, Studi Kasus',
            ],

        },
        {
            id: 2,
            title: 'Diklat Tematik: Analisis & Pemanfaatan Teknologi',
            description:
                'Asah kemampuan analisis usaha Anda dengan SWOT dan manfaatkan teknologi digital untuk keuangan dan pemasaran produk koperasi.',
            module: [
                'Analisis SWOT untuk Koperasi Desa: Konsep, Workshop Praktis, Perumusan Strategi',
                'Literasi Keuangan Digital Koperasi: Pencatatan Keuangan, Fintech, Pelaporan Dasar.',
                'Pemasaran Produk Lokal Berbasis Digital: Media Sosial, E-commerce, Fotografi Produk, Branding',
                'Manajemen Risiko Usaha Koperasi: Identifikasi & Mitigasi Risiko, Rencana Kontingensi',
                'Pengembangan Produk & Inovasi: Identifikasi Kebutuhan Pasar, Proses Inovasi'
            ],

        },


    ]

    const downloadableMaterials = [
        {
            id: 1,
            name: 'Handout Fondasi Kewirausahaan Koperasi',
            description: 'Ringkasan materi dasar kewirausahaan koperasi.',
            link: '/downloads/handout-fondasi-kewirausahaan.pdf',
        },
        {
            id: 2,
            name: 'Lembar Kerja Penyusunan Business Plan',
            description: 'Panduan langkah demi langkah untuk menyusun rencana bisnis sederhana.',
            link: '/downloads/lembar-kerja-business-plan.docx',
        },
        {
            id: 3,
            name: 'Panduan Praktis Manajemen Keuangan Koperasi',
            description: 'Tips dan trik praktis pengelolaan keuangan untuk koperasi.',
            link: '/downloads/panduan-manajemen-keuangan.pdf',
        },
        {
            id: 4,
            name: 'Studi Kasus Koperasi Sukses "Maju Bersama"',
            description: 'Analisis mendalam studi kasus koperasi yang berhasil.',
            link: '/downloads/studi-kasus-maju-bersama.pdf',
        },
    ]

    const trainingEvents = [
        {
            id: 1,
            title: 'Diklat Kewirausahaan Koperasi Tingkat Dasar',
            date: '15 Agustus 2025',
            time: '09:00 - 16:00 WIB',
            location: 'Gedung Balai Koperasi, Semarang',
            topic: 'Fondasi & Mindset Kewirausahaan',
            type: 'Offline',
        },
        {
            id: 2,
            title: 'Webinar Manajemen Keuangan Koperasi',
            date: '22 Agustus 2025',
            time: '14:00 - 16:00 WIB',
            location: 'Online (Zoom Meeting)',
            topic: 'Pengelolaan Keuangan Efektif',
            type: 'Online',
        },
        
    ]





    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className='bg-gradient-to-r from-sky-600 to-blue-700 py-20 text-white md:py-24'>
                <div className='container mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                    <div className='grid items-center gap-12 lg:grid-cols-2'>
                        {/* Left Content */}
                        <div className='space-y-8'>
                            <div className='space-y-4'>
                                <Badge className='bg-white/20 text-sm text-white hover:bg-white/30 md:text-base'>
                                    Pusat Pelatihan & Pembelajaran Koperasi (LMS)
                                </Badge>
                                <h1 className='text-4xl font-bold leading-tight md:text-5xl lg:text-6xl'>
                                    Pembelajaran Fleksibel,{' '}
                                    <span className='text-sky-200'>Hasil Maksimal</span>
                                </h1>
                                <p className='text-lg leading-relaxed text-sky-100 md:text-xl'>
                                    Nikmati pengalaman belajar yang interaktif dan fleksibel. Akses
                                    materi kapan saja, di mana saja, sesuai dengan kecepatan Anda.
                                    Setiap e-course dilengkapi dengan video, kuis, dan studi kasus
                                    yang relevan.
                                </p>
                            </div>
                            {/* Features Badges (for larger screens) */}
                            <div className='mt-8 hidden flex-wrap gap-4 lg:flex'>
                                <Badge className='flex items-center gap-2 border-green-500 bg-green-500 text-base text-white hover:bg-green-300'>
                                    <CircleCheckBig size={20} />
                                    Video Pembelajaran Berkualitas Tinggi
                                </Badge>
                                <Badge className='flex items-center gap-2 border-green-500 bg-green-500 text-base text-white hover:bg-green-300'>
                                    <CircleCheckBig size={20} />
                                    Kuis Interaktif untuk Menguji Pemahaman
                                </Badge>
                                <Badge className='flex items-center gap-2 border-green-500 bg-green-500 text-base text-white hover:bg-green-300'>
                                    <CircleCheckBig size={20} />
                                    Forum Diskusi Online
                                </Badge>
                                <Badge className='flex items-center gap-2 border-green-500 bg-green-500 text-base text-white hover:bg-green-300'>
                                    <CircleCheckBig size={20} />
                                    Studi Kasus Nyata Koperasi Sukses
                                </Badge>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className='relative'>
                            {/* Background shape */}
                            <div className='absolute inset-0 z-0 transform rounded-3xl bg-gradient-to-r from-sky-400 to-blue-500 lg:rotate-3' />
                            <Image
                                src='/lms.jpg'
                                alt='E-Learning Platform'
                                width={600}
                                height={500}
                                className='relative z-10 w-full rounded-3xl shadow-2xl'
                            />
                        </div>
                    </div>

                    {/* Features Badges (for smaller screens) */}
                    <div className='mt-12 flex flex-wrap justify-center gap-4 lg:hidden'>
                        <Badge className='flex items-center gap-2 border-green-500 bg-green-500 text-center text-sm text-white hover:bg-green-300 md:text-base'>
                            <CircleCheckBig size={16} />
                            Video Pembelajaran Berkualitas Tinggi
                        </Badge>
                        <Badge className='flex items-center gap-2 border-green-500 bg-green-500 text-center text-sm text-white hover:bg-green-300 md:text-base'>
                            <CircleCheckBig size={16} />
                            Kuis Interaktif untuk Menguji Pemahaman
                        </Badge>
                        <Badge className='flex items-center gap-2 border-green-500 bg-green-500 text-center text-sm text-white hover:bg-green-300 md:text-base'>
                            <CircleCheckBig size={16} />
                            Forum Diskusi Online
                        </Badge>
                        <Badge className='flex items-center gap-2 border-green-500 bg-green-500 text-center text-sm text-white hover:bg-green-300 md:text-base'>
                            <CircleCheckBig size={16} />
                            Studi Kasus Nyata Koperasi Sukses
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4 md:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Categories */}


                        {/* Courses Grid */}
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Katalog Diklat</h2>

                            </div>

                            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                                {courses.map((course) => (
                                    <Card
                                        key={course.id}
                                        className='group transform overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl'
                                    >
                                        <div className='relative aspect-video overflow-hidden rounded-t-lg bg-gradient-to-br from-sky-100 to-blue-100'>
                                            {/* Placeholder for image or video thumbnail */}
                                            <div className='absolute inset-0 flex items-center justify-center'>
                                                <Image
                                                    src='/lms.jpg'
                                                    alt={course.title}
                                                    width={300}
                                                    height={300}
                                                    className='h-full w-full object-cover'
                                                />
                                            </div>

                                        </div>
                                        <CardHeader className='p-6'>
                                            <div className='mb-2 flex items-start justify-between'>
                                                <CardTitle className='text-xl font-semibold text-gray-900 group-hover:text-sky-600 transition-colors duration-300'>
                                                    {course.title}
                                                </CardTitle>

                                            </div>
                                            <CardDescription className='text-sm text-gray-600'>
                                                {course.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className='p-6 pt-0'>
                                            <h4 className='mb-3 text-base font-semibold text-gray-700'>
                                                Modul :
                                            </h4>
                                            <ul className='space-y-2 text-sm text-gray-700 mb-20'>
                                                {course.module.map((item, index) => (
                                                    <li key={index} className='flex items-center'>
                                                        <Check className='mr-2 h-4 w-4 text-green-500' />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className='absolute bottom-4 w-[140px]'>
                                                <a
                                                    href=''
                                                    className='inline-block w-full rounded-sm bg-blue-600  py-3 text-center font-medium text-white transition-colors hover:bg-blue-700'
                                                >
                                                    Mulai Belajar
                                                </a>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-blue-700">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Tingkatkan Kompetensi Anda: Pusat Pelatihan & Pembelajaran Koperasi
                    </h2>
                    <p className="text-xl text-sky-100 mb-8 leading-relaxed">
                        DEKOPINWIL Jawa Tengah berkomitmen penuh untuk mencetak SDM koperasi yang profesional, inovatif, dan berdaya saing. Melalui Learning Management System (LMS) ini, Anda dapat mengakses berbagai modul pelatihan, e-course interaktif, dan materi pendukung yang dirancang khusus untuk kemajuan koperasi Anda
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
                            Masuk/Daftar Akun LMS
                        </Button>

                    </div>
                </div>
            </section>
            <section className='bg-gray-50 py-16 px-4 md:px-6 lg:px-8'>
                <div className='container mx-auto max-w-7xl'>
                    <div className='mb-12 text-center'>
                        <h2 className='mb-4 text-4xl font-bold text-gray-800 md:text-5xl'>
                            Perkaya Wawasan Anda dengan Materi Lengkap
                        </h2>
                        <p className='text-lg text-gray-600 md:text-xl'>
                            Unduh handout, lembar kerja, panduan praktis, dan studi kasus yang
                            dapat Anda gunakan sebagai referensi dan alat bantu dalam mengelola
                            koperasi Anda.
                        </p>
                    </div>

                    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {downloadableMaterials.map((material) => (
                            <div
                                key={material.id}
                                className='flex flex-col justify-between rounded-lg bg-white p-6 text-center shadow-md transition-shadow duration-300 hover:shadow-lg'
                            >
                                {/* Konten Atas */}
                                <div className='flex flex-col items-center flex-grow'>
                                    <FileText className='mb-4 h-12 w-12 text-red-500' />
                                    <h3 className='mb-2 text-lg font-semibold text-gray-800'>
                                        {material.name}
                                    </h3>
                                    <p className='mb-4 text-sm text-gray-600'>{material.description}</p>
                                </div>

                                {/* Tombol Unduh */}
                                <div className='mt-auto pt-4'>
                                    <a
                                        href={material.link}
                                        download
                                        className='inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700'
                                  
                                    >
                                        <Download className='mr-2 h-5 w-5' /> Unduh
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className="">
                <div className=' mx-auto '>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        {/* Top-left section */}
                        <div className='overflow-hidden '>
                            <Image
                                src='/artic.png'
                                alt='A mother and son looking at a tablet together'
                                className='h-full w-full object-cover object-top'
                                width={400}
                                height={300}
                            />
                        </div>

                        {/* Top-right section */}
                        <div className='flex flex-col justify-center  bg-gray-100 p-8'>
                            <h2 className='mb-4 text-3xl font-bold'>
                                Lacak Kemajuan Anda, Raih Pengakuan!
                            </h2>
                            <p className='text-gray-700'>
                                Sistem kami memungkinkan Anda untuk memantau kemajuan belajar secara real-time. Setelah menyelesaikan seluruh modul, Anda akan mendapatkan sertifikat digital sebagai bukti kompetensi Anda
                            </p>

                        </div>

                        {/* Bottom-left section */}
                        <div className='flex flex-col justify-center  bg-gray-100 p-8'>
                            <h2 className='mb-4 text-3xl font-bold'>
                                Jejaring Belajar Aktif
                            </h2>
                            <p className='text-gray-700'>
                                Terhubung dengan sesama pengurus dan anggota koperasi dari seluruh Jawa Tengah. Berbagi pengalaman, bertanya, dan diskusikan tantangan serta solusi bersama para ahli di forum kami
                            </p>

                        </div>

                        {/* Bottom-right section */}
                        <div className='overflow-hidden '>
                            <Image
                                src="/artic.png"
                                alt='A person holding a phone with an SMS from a government agency'
                                className='h-full w-full object-cover object-bottom'
                                width={400}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-white py-16 px-4 md:px-6 lg:px-8'>
                <div className='container mx-auto max-w-7xl'>
                    <div className='mb-12 text-center'>
                        <h2 className='mb-4 text-4xl font-bold text-gray-800 md:text-5xl'>
                            Kalender Pelatihan Mendatang
                        </h2>
                        <p className='text-lg text-gray-600 md:text-xl'>
                            Lihat jadwal lengkap pelatihan tatap muka dan sesi webinar yang akan
                            datang di berbagai karesidenan di Jawa Tengah.
                        </p>
                    </div>

                    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {trainingEvents.map((event) => (
                            <Card
                                key={event.id}
                                className='flex flex-col rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg'
                            >
                                <CardHeader className='pb-4'>
                                    <CardTitle className='text-xl font-semibold text-gray-900'>
                                        {event.title}
                                    </CardTitle>
                                    <CardDescription className='text-sm text-gray-600'>
                                        Topik: {event.topic}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className='flex-grow space-y-3 p-6 pt-0'>
                                    <div className='flex items-center text-sm text-gray-700'>
                                        <Calendar className='mr-2 h-4 w-4 text-blue-500' />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className='flex items-center text-sm text-gray-700'>
                                        <Clock className='mr-2 h-4 w-4 text-blue-500' />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className='flex items-center text-sm text-gray-700'>
                                        {event.type === 'Offline' ? (
                                            <MapPin className='mr-2 h-4 w-4 text-blue-500' />
                                        ) : (
                                            <Wifi className='mr-2 h-4 w-4 text-blue-500' />
                                        )}
                                        <span>{event.location}</span>
                                    </div>
                                </CardContent>
                                <div className='p-6 pt-0'>
                                    <span
                                        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${event.type === 'Offline'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-purple-100 text-purple-800'
                                            }`}
                                    >
                                        {event.type}
                                    </span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

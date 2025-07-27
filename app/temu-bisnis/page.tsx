import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, CalendarIcon, Clock, Download, FileText, MapPin, MessageSquare, Phone, Video } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
const page = () => {

    const upcomingSessions = [
        {
            id: 1,
            title: "Sektor Pangan Olahan & Minuman",
            date: "2025-08-15",
            time: "09:00 - 12:00 WIB",
            participants: 45,
            maxParticipants: 60,
            description: "Temu bisnis khusus untuk koperasi yang bergerak di bidang pengolahan pangan dan minuman",
            sector: "Pangan",
            status: "open",
            image: "/meet.jpg",
        },
        {
            id: 2,
            title: "Akses Permodalan untuk Koperasi UMKM",
            date: "2025-08-20",
            time: "13:00 - 16:00 WIB",
            participants: 38,
            maxParticipants: 50,
            description: "Pertemuan dengan lembaga keuangan dan investor untuk akses permodalan",
            sector: "Keuangan",
            status: "open",
            image: "/meet.jpg",
        },
        {
            id: 3,
            title: "Koperasi Pertanian & Agribisnis Modern",
            date: "2025-08-25",
            time: "09:00 - 12:00 WIB",
            participants: 52,
            maxParticipants: 70,
            description: "Networking untuk koperasi pertanian dengan teknologi modern dan sustainable farming",
            sector: "Pertanian",
            status: "open",
            image: "/meet.jpg",
        },
        {
            id: 4,
            title: "Ekspor-Impor & Perdagangan Internasional",
            date: "2025-08-30",
            time: "14:00 - 17:00 WIB",
            participants: 25,
            maxParticipants: 40,
            description: "Peluang ekspor produk koperasi dan kemitraan perdagangan internasional",
            sector: "Perdagangan",
            status: "open",
            image: "/meet.jpg",
        },
    ]

    const cooperatives = [
        {
            id: 1,
            name: "Koperasi Srikandi Mandiri",
            sector: "Kerajinan & Fashion",
            products: ["Batik Tulis", "Tas Rajut", "Aksesoris Tradisional"],
            partnership: "Mencari distributor dan investor",
            location: "Semarang",

            image: "/koperasi.webp",
            description: "Koperasi wanita yang fokus pada produk kerajinan dan fashion tradisional dengan sentuhan modern",
        },
        {
            id: 2,
            name: "Koperasi Tani Sejahtera",
            sector: "Pertanian Organik",
            products: ["Beras Organik", "Sayuran Hidroponik", "Pupuk Kompos"],
            partnership: "Mencari buyer dan teknologi pertanian",
            location: "Magelang",

            image: "/koperasi.webp",
            description: "Koperasi pertanian yang menerapkan sistem organik dan teknologi modern",
        },
        {
            id: 3,
            name: "Koperasi Maju Bersama",
            sector: "Pengolahan Pangan",
            products: ["Keripik Singkong", "Dodol Tradisional", "Kopi Bubuk"],
            partnership: "Mencari distributor nasional",
            location: "Solo",

            image: "/koperasi.webp",
            description: "Koperasi pengolahan makanan tradisional dengan standar modern dan kemasan menarik",
        },
        {
            id: 4,
            name: "Koperasi Digital Nusantara",
            sector: "Teknologi & Digital",
            products: ["Aplikasi Mobile", "Website Koperasi", "Sistem POS"],
            partnership: "Mencari klien dan investor teknologi",
            location: "Semarang",

            image: "/koperasi.webp",
            description: "Koperasi yang bergerak di bidang teknologi digital untuk mendukung transformasi koperasi lain",
        },
    ]

    const partners = [
        {
            id: 1,
            name: "PT Mitra Investama",
            type: "Investor",
            sector: "Multi Sektor",
            partnership: "Investasi modal dan pendampingan bisnis",

            image: "/pabrik.webp",
            description: "Perusahaan investasi yang fokus pada pengembangan UMKM dan koperasi",
        },
        {
            id: 2,
            name: "CV Distributor Nusantara",
            type: "Distributor",
            sector: "Pangan & Minuman",
            partnership: "Distribusi produk ke seluruh Indonesia",
            image: "/pabrik.webp",
            description: "Jaringan distribusi terpercaya dengan jangkauan nasional untuk produk pangan",
        },
        {
            id: 3,
            name: "Bank Koperasi Mandiri",
            type: "Lembaga Keuangan",
            sector: "Perbankan",
            partnership: "Kredit usaha dan layanan perbankan",
            image: "/pabrik.webp",
            description: "Bank yang khusus melayani kebutuhan finansial koperasi dan UMKM",
        },
        {
            id: 4,
            name: "PT Teknologi Maju",
            type: "Technology Partner",
            sector: "Teknologi",
            partnership: "Digitalisasi dan sistem manajemen",
            services: "ERP, POS, E-commerce",
            image: "/pabrik.webp",
            description: "Penyedia solusi teknologi untuk modernisasi operasional koperasi",
        },
    ]



    const downloadableMaterials = [
        {
            id: 1,
            name: 'Panduan Menyusun Business Plan Singkat',
            description: 'Ringkasan materi dasar kewirausahaan koperasi.',
            link: '/downloads/handout-fondasi-kewirausahaan.pdf',
        },
        {
            id: 2,
            name: 'Template Presentasi Investor',
            description: 'Panduan langkah demi langkah untuk menyusun rencana bisnis sederhana.',
            link: '/downloads/lembar-kerja-business-plan.docx',
        },
        {
            id: 3,
            name: 'Video: Tips Sukses Pitching',
            description: 'Tips dan trik praktis pengelolaan keuangan untuk koperasi.',
            link: '/downloads/panduan-manajemen-keuangan.pdf',
        },

    ]

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }
    return (
        <div className='h-min-screen bg-gray-50'>
            {/* Hero Section */}
            <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <Badge className="bg-white/20 text-white hover:bg-white/30">Temu Bisnis Online</Badge>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                    Perluas Jaringan,
                                    <span className="text-sky-200"> Tingkatkan Transaksi:</span>
                                    <br />
                                    Temu Bisnis Online Kami!
                                </h1>
                                <p className="text-xl text-sky-100 leading-relaxed">
                                    DEKOPINWIL Jawa Tengah menghadirkan platform Temu Bisnis Online, sebuah inovasi untuk mempertemukan
                                    Koperasi Desa Merah Putih dengan calon mitra bisnis, investor, dan pembeli potensial dari berbagai
                                    sektor. Ini adalah kesempatan emas untuk menjalin kemitraan strategis, memperluas pasar, dan mendorong
                                    pertumbuhan usaha Anda tanpa batasan geografis.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
                                    Daftar Temu Bisnis Mendatang
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>

                            </div>

                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl transform rotate-3"></div>
                            <Image
                                src="/meet.jpg"
                                alt="Temu Bisnis Online Platform"
                                width={600}
                                height={500}
                                className="relative rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-20 px-4 md:px-6 lg:px-8'>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Kemudahan Berinteraksi dalam Genggaman
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Platform kami dilengkapi dengan fitur penjadwalan pertemuan yang intuitif. Anda dapat mengajukan
                        permintaan pertemuan langsung dengan mitra yang Anda inginkan dan melakukan diskusi di ruang pertemuan
                        virtual yang aman dan profesional.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: CalendarIcon,
                            title: "Sistem Penjadwalan Otomatis",
                            description: "Atur pertemuan dengan mudah menggunakan sistem kalender terintegrasi",
                        },
                        {
                            icon: Clock,
                            title: "Notifikasi Pengingat Pertemuan",
                            description: "Dapatkan reminder otomatis sebelum sesi temu bisnis dimulai",
                        },
                        {
                            icon: Video,
                            title: "Integrasi Video Conference",
                            description: "Langsung terhubung dengan Google Meet/Zoom tanpa ribet",
                        },
                        {
                            icon: MessageSquare,
                            title: "Fitur Chat Selama Pertemuan",
                            description: "Komunikasi real-time dengan chat dan file sharing",
                        },
                    ].map((feature, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 border-0 bg-white text-center"
                        >
                            <CardHeader>
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-4 mx-auto group-hover:bg-sky-600 transition-colors">
                                    <feature.icon className="h-8 w-8 text-sky-600 group-hover:text-white transition-colors" />
                                </div>
                                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="py-20 px-4 md:px-6 lg:px-8 bg-sky-50" space-y-8>
                <div className="flex-3">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Profil Koperasi Siap Kemitraan</h2>
                        <div className="text-sm text-gray-500">{cooperatives.length} koperasi ditemukan</div>
                    </div>


                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {cooperatives.map((coop) => (

                            <Card key={coop.id} className="group hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                <div className="aspect-video relative overflow-hidden">
                                    <Image
                                        src={coop.image || "/placeholder.svg"}
                                        alt={coop.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-sky-600 text-white">{coop.sector}</Badge>
                                    </div>
                                </div>

                                <CardHeader>
                                    <CardTitle className="text-xl group-hover:text-sky-600 transition-colors">
                                        {coop.name}
                                    </CardTitle>
                                    <CardDescription className="text-sm">{coop.description}</CardDescription>
                                </CardHeader>

                                <CardContent className="flex flex-col justify-between flex-grow space-y-4">
                                    <div className="space-y-2">
                                        <div className="text-sm">
                                            <span className="font-medium">Produk Unggulan:</span>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                {coop.products.map((product, index) => (
                                                    <Badge key={index} variant="secondary" className="text-xs">
                                                        {product}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="text-sm">
                                            <span className="font-medium">Kebutuhan Kemitraan:</span> {coop.partnership}
                                        </div>
                                        <div className="flex items-center justify-between text-sm text-gray-600">
                                            <div className="flex items-center">
                                                <MapPin className="h-4 w-4 mr-1" />
                                                {coop.location}
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        variant="outline"
                                        className="border-sky-600 text-sky-600 hover:bg-sky-50 bg-transparent mt-4"
                                    >
                                        <Phone className="h-4 w-4 mr-2" />
                                        Hubungi Koperasi
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className='py-20 px-4 md:px-6 lg:px-8 bg-white'>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Temukan Mitra & Investor Potensial Anda
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Bagi perusahaan, investor, atau buyer yang mencari produk berkualitas dan mitra terpercaya, jelajahi
                        direktori kami. DEKOPINWIL Jawa Tengah telah mengkurasi profil mitra potensial yang siap berkolaborasi
                        dengan koperasi.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {partners.map((partner) => (
                        <Card
                            key={partner.id}
                            className="group hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                        >
                            <CardHeader className="text-center">
                                <div className="w-20 h-16 mx-auto mb-4 relative overflow-hidden rounded-lg">
                                    <Image
                                        src={partner.image || "/placeholder.svg"}
                                        alt={partner.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardTitle className="text-lg group-hover:text-sky-600 transition-colors">
                                    {partner.name}
                                </CardTitle>
                                <div className="flex justify-center gap-2">
                                    <Badge className="bg-sky-100 text-sky-800">{partner.type}</Badge>
                                    <Badge variant="secondary">{partner.sector}</Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="flex flex-col justify-between flex-grow space-y-4">
                                <div className="space-y-2 text-sm">
                                    <p className="text-sm text-gray-600">{partner.description}</p>
                                    <div>
                                        <span className="font-medium">Jenis Kemitraan:</span> {partner.partnership}
                                    </div>


                                    {partner.services && (
                                        <div>
                                            <span className="font-medium">Layanan:</span> {partner.services}
                                        </div>
                                    )}

                                </div>
                                <Button className="w-full bg-sky-600 hover:bg-sky-700 mt-auto">
                                    <Phone className="h-4 w-4 mr-2" />
                                    Hubungi Mitra
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>


            <section className="py-20 px-4 md:px-6 lg:px-8 bg-sky-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Kalender Temu Bisnis Online
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Lihat jadwal sesi temu bisnis virtual yang akan datang. Setiap sesi akan fokus pada sektor atau tema
                        tertentu untuk memaksimalkan relevansi pertemuan.
                    </p>
                </div>

                <div className="grid gap-8">
                    <div className="w-full max-w-5xl mx-auto">
                        <div className="space-y-6">
                            {upcomingSessions.map((session) => (
                                <Card
                                    key={session.id}
                                    className="group hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex flex-col md:flex-row">
                                        {/* Gambar */}
                                        <div className="md:w-32 md:h-24 h-48 relative overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                                            <Image
                                                src={session.image || "/placeholder.svg"}
                                                alt={session.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Konten */}
                                        <div className="flex-1 p-6">
                                            <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors mb-1">
                                                        {session.title}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm mb-2">{session.description}</p>
                                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                                        <div className="flex items-center">
                                                            <CalendarIcon className="h-4 w-4 mr-1" />
                                                            {formatDate(session.date)}
                                                        </div>
                                                        <div className="flex items-center">
                                                            <Clock className="h-4 w-4 mr-1" />
                                                            {session.time}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Sektor & Slot */}
                                                <div className="text-left md:text-right">
                                                    <Badge className="bg-sky-100 text-sky-800 mb-1">
                                                        {session.sector}
                                                    </Badge>

                                                </div>
                                            </div>

                                            {/* Tombol */}
                                            <div className="flex justify-end">
                                                <Button className="bg-sky-600 hover:bg-sky-700 whitespace-nowrap">
                                                    Daftar Sesi Ini
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-gray-50 py-16 px-4 md:px-6 lg:px-8'>
                <div className='container mx-auto max-w-7xl'>
                    <div className='mb-12 text-center'>
                        <h2 className='mb-4 text-4xl font-bold text-gray-800 md:text-5xl'>
                            Bekali Diri Anda untuk Kesuksesan Pitching!
                        </h2>
                        <p className='text-lg text-gray-600 md:text-xl'>
                            Kami menyediakan panduan dan template khusus untuk membantu koperasi menyusun proposal bisnis yang menarik dan teknik presentasi yang efektif di hadapan calon mitra atau investor
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
                                src='/meet.jpg'
                                alt='A mother and son looking at a tablet together'
                                className='h-full w-full object-cover object-top'
                                width={400}
                                height={300}
                            />
                        </div>

                        {/* Top-right section */}
                        <div className='flex flex-col justify-center  bg-gray-100 p-8'>
                            <h2 className='mb-4 text-3xl font-bold'>
                                Tindak Lanjut Kemitraan Anda
                            </h2>
                            <p className='text-gray-700'>
                                Setelah sesi temu bisnis, manfaatkan forum ini untuk berdiskusi, berbagi feedback, dan mendapatkan dukungan dalam menindaklanjuti potensi kemitraan yang telah terjalin
                            </p>
                            <Button className='mt-4 bg-sky-600 hover:bg-sky-700 text-white'>
                                Bergabung dengan Forum Diskusi
                            </Button>
                        </div>

                        {/* Bottom-left section */}
                        
                    </div>
                </div>
            </section>

        </div>
    )
}

export default page
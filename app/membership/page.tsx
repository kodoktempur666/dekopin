'use client'
import { useState } from 'react'
import {
    BookOpen,
    Users,
    Award,
    Star,
    CheckCircle,
    ArrowRight,
    Play,
    Clock,
    Globe,
    Shield,
    Zap,
    UserPlus,
    Gift,
    Phone,
    Mail,
    X,
} from "lucide-react"
import Image from "next/image"
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const page = () => {

    const [activeTab, setActiveTab] = useState("membership")
    const [selectedPlan, setSelectedPlan] = useState("premium")

    const membershipBenefits = [
        {
            icon: BookOpen,
            title: "Akses Penuh E-Course & Modul Pelatihan",
            description: "Seluruh materi pembelajaran di LMS dapat diakses tanpa batas dengan update konten terbaru",
        },
        {
            icon: Users,
            title: "Pendampingan Prioritas",
            description: "Kesempatan mendapatkan pendampingan lebih intensif dari tim ahli kami",
        },
        {
            icon: Globe,
            title: "Jejaring Koperasi Luas",
            description: "Terhubung dengan ribuan koperasi dan stakeholder di Jawa Tengah",
        },
        {
            icon: Award,
            title: "Sertifikasi Kompetensi",
            description: "Pengakuan resmi atas keahlian yang Anda peroleh dengan sertifikat terakreditasi",
        },
        {
            icon: Zap,
            title: "Informasi Eksklusif",
            description: "Akses awal ke peluang bisnis, program pemerintah, dan regulasi terbaru",
        },
        {
            icon: Gift,
            title: "Diskon Khusus",
            description: "Potongan harga untuk event atau workshop berbayar hingga 50%",
        },
    ]

    const membershipPlans = [
        {
            id: "basic",
            name: "Anggota Dasar",
            price: "Gratis",
            period: "Selamanya",
            description: "Cocok untuk pemula yang ingin mengenal dunia koperasi",
            features: [
                "Akses 5 modul dasar koperasi",
                "Forum diskusi komunitas",
                "Newsletter bulanan",
                "Webinar gratis (terbatas)",
                "Sertifikat partisipasi",
            ],
            limitations: [
                "Tidak termasuk modul advanced",
                "Tidak ada pendampingan personal",
                "Akses terbatas ke event premium",
            ],
            popular: false,
            buttonText: "Daftar Gratis",
            buttonVariant: "outline" as const,
        },
        {
            id: "premium",
            name: "Anggota Premium",
            price: "Rp 299.000",
            period: "per tahun",
            description: "Paket lengkap untuk pengembangan kompetensi maksimal",
            features: [
                "Akses penuh ke semua e-course (50+ modul)",
                "Pendampingan personal dari mentor ahli",
                "Konsultasi bisnis unlimited",
                "Prioritas dalam event dan workshop",
                "Sertifikat kompetensi terakreditasi",
                "Akses ke database koperasi nasional",
                "Diskon 50% untuk semua event berbayar",
                "Materi eksklusif dan case study",
                "Live session dengan pakar industri",
                "Networking dengan 2000+ anggota",
            ],
            limitations: [],
            popular: true,
            buttonText: "Bergabung Sekarang",
            buttonVariant: "default" as const,
        },
    ]

    const faqs = [
        {
            question: "Bagaimana cara mengakses e-course setelah mendaftar?",
            answer:
                "Setelah pendaftaran berhasil dan akun Anda diverifikasi, Anda akan menerima email konfirmasi dengan link aktivasi. Login ke platform LMS kami menggunakan email dan password yang telah didaftarkan, kemudian Anda dapat langsung mengakses semua course sesuai dengan paket keanggotaan Anda.",
        },
        {
            question: "Apakah ada biaya untuk menjadi anggota?",
            answer:
                "Kami menyediakan dua pilihan keanggotaan: Anggota Dasar (gratis) dengan akses terbatas ke modul dasar, dan Anggota Premium (Rp 299.000/tahun) dengan akses penuh ke semua fitur dan manfaat eksklusif. Investasi ini sangat terjangkau dibandingkan nilai manfaat yang Anda dapatkan.",
        },
        {
            question: "Apakah sertifikat yang diberikan diakui?",
            answer:
                "Ya, semua sertifikat yang kami berikan telah terakreditasi dan diakui secara resmi oleh Dewan Koperasi Indonesia dan Kementerian Koperasi dan UKM RI. Sertifikat ini dapat digunakan untuk pengembangan karir dan memenuhi persyaratan kompetensi di bidang koperasi.",
        },
        {
            question: "Bagaimana jika saya mengalami masalah teknis saat belajar?",
            answer:
                "Tim support teknis kami siap membantu Anda 24/7 melalui live chat, email (support@dekopinwiljateng.id), atau WhatsApp (0812-3456-7890). Kami juga menyediakan panduan lengkap dan video tutorial untuk membantu Anda menggunakan platform dengan optimal.",
        },
        {
            question: "Berapa lama masa berlaku keanggotaan premium?",
            answer:
                "Keanggotaan Premium berlaku selama 1 tahun sejak tanggal aktivasi. Anda akan mendapat notifikasi 30 hari sebelum masa berlaku habis untuk perpanjangan. Selama masa aktif, Anda dapat mengakses semua konten tanpa batas.",
        },
        {
            question: "Bisakah saya upgrade dari anggota dasar ke premium?",
            answer:
                "Tentu saja! Anda dapat upgrade kapan saja dengan membayar selisih biaya yang sudah diproporsikan. Semua progress belajar Anda akan tetap tersimpan dan Anda langsung mendapat akses ke fitur premium.",
        },
    ]

    const registrationSteps = [
        {
            step: 1,
            title: "Isi Formulir",
            description: "Lengkapi formulir pendaftaran online dengan data yang akurat",
            icon: UserPlus,
        },
        {
            step: 2,
            title: "Verifikasi",
            description: "Tim kami akan memverifikasi data Anda dalam 1x24 jam",
            icon: Shield,
        },
        {
            step: 3,
            title: "Akses Penuh",
            description: "Setelah terverifikasi, nikmati semua fitur dan manfaat keanggotaan",
            icon: CheckCircle,
        },
    ]
    return (
        <div className='min-h-screen bg-gray-50'>
            <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <Badge className="bg-white/20 text-white hover:bg-white/30">E-Course & Membership</Badge>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                    Dapatkan Lebih Banyak dengan
                                    <span className="text-sky-200"> Keanggotaan Kami!</span>
                                </h1>
                                <p className="text-xl text-sky-100 leading-relaxed">
                                    Keanggotaan DEKOPINWIL Jawa Tengah membuka pintu menuju berbagai kesempatan eksklusif untuk
                                    pengembangan pribadi dan kemajuan koperasi Anda. Kami hadir untuk mendukung setiap langkah Anda menuju
                                    kesuksesan.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
                                    Daftar Sekarang
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>

                            </div>

                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl transform rotate-3"></div>
                            <Image
                                src="/e-course.png"
                                alt="E-Learning Platform"
                                width={600}
                                height={500}
                                className="relative rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-sky-50 to-white'>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Keuntungan Eksklusif Anggota</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Dengan menjadi anggota, Anda akan mendapatkan akses ke berbagai manfaat yang dirancang khusus untuk
                        kemajuan koperasi Anda
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {membershipBenefits.map((benefit, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 border-0 bg-white text-center"
                        >
                            <CardHeader>
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-4 mx-auto group-hover:bg-sky-600 transition-colors">
                                    <benefit.icon className="h-8 w-8 text-sky-600 group-hover:text-white transition-colors" />
                                </div>
                                <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Membership Plans */}
                <div className="space-y-8">
                    <div className="text-center mt-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Pilih Paket Keanggotaan yang Sesuai
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Kami menyediakan beberapa pilihan keanggotaan untuk memenuhi kebutuhan yang beragam
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {membershipPlans.map((plan) => (
                            <Card
                                key={plan.id}
                                className={`relative overflow-hidden transition-all duration-300 ${plan.popular
                                    ? "border-sky-500 shadow-xl scale-105 bg-gradient-to-br from-sky-50 to-blue-50"
                                    : "border-gray-200 hover:shadow-lg bg-white"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 bg-sky-600 text-white px-4 py-1 text-sm font-semibold">
                                        Terpopuler
                                    </div>
                                )}
                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                                    <div className="space-y-2">
                                        <div className="text-4xl font-bold text-sky-600">
                                            {plan.price}
                                            {plan.price !== "Gratis" && <span className="text-lg text-gray-500">/{plan.period}</span>}
                                        </div>
                                        <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-gray-900 flex items-center">
                                            Fitur Termasuk:
                                        </h4>
                                        <ul className="space-y-2">
                                            {plan.features.map((feature, index) => (
                                                <li key={index} className="flex items-start text-sm text-gray-700">
                                                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {plan.limitations.length > 0 && (
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-gray-900">Keterbatasan:</h4>
                                            <ul className="space-y-2">
                                                {plan.limitations.map((limitation, index) => (
                                                    <li key={index} className="flex items-start text-sm text-gray-500">
                                                        {/* <div className="w-4 h-4 border border-gray-300 rounded mr-2 mt-0.5 flex-shrink-0">
                                                           
                                                        </div> */}
                                                        <X color='red' className='h-4 w-4 mr-2 mt-0.5 flex-shrink' />
                                                        {limitation}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <Button
                                        className={`w-full ${plan.popular ? "bg-sky-600 hover:bg-sky-700 text-white" : "bg-transparent"
                                            }`}
                                        variant={plan.buttonVariant}
                                        size="lg"
                                        onClick={() => setSelectedPlan(plan.id)}
                                    >
                                        {plan.buttonText}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className='py-12 '>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Langkah Mudah Menjadi Anggota</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Bergabunglah dengan komunitas koperasi terbesar di Jawa Tengah dalam 3 langkah mudah
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {registrationSteps.map((step) => (
                        <Card key={step.step} className="text-center group hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-4 group-hover:bg-sky-600 transition-colors">
                                    <step.icon className="h-8 w-8 text-sky-600 group-hover:text-white transition-colors" />
                                </div>
                                <div className="text-2xl font-bold text-sky-600 mb-2">Langkah {step.step}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <Button
                        size="lg"
                        variant="outline"

                        className=" text-white  hover:text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:bg-gray-100 text-xl"
                    >
                        Daftar Sekarang!
                    </Button>
                </div>

            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
                        <p className="text-xl text-gray-600">
                            Temukan jawaban atas pertanyaan umum seputar e-course dan keanggotaan
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-sky-600">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-4">Masih ada pertanyaan lain?</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 bg-transparent">
                                <Phone className="h-4 w-4 mr-2" />
                                Hubungi Kami
                            </Button>
                            <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 bg-transparent">
                                <Mail className="h-4 w-4 mr-2" />
                                Email Support
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}

export default page
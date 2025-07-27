
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Briefcase, CheckCircle, Coffee, ExternalLink, Factory, Leaf, MapPin, Palette, Phone,  Shirt, Star, Users } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const page = () => {

    const products = [
        {
            id: 1,
            name: "Kopi Robusta Karesidenan Kedu",
            description:
                "Kopi robusta pilihan dari lereng pegunungan Karesidenan Kedu, diolah secara tradisional untuk menghasilkan aroma kuat dan cita rasa khas. Cocok untuk penikmat kopi sejati.",
            category: "pangan",
            image: "/kopi.avif",
            cooperative: {
                name: "Koperasi Kopi Jaya Mandiri",
                location: "Karesidenan Kedu, Kabupaten Temanggung",
                phone: "(0293) 491234",
                email: "info@kopijayamandiri.co.id",
                instagram: "@kopijayamandiri",
                shopee: "kopi-jaya-mandiri-official",
            },
            details: {
                certifications: ["PIRT", "Halal", "Organik"],
                uniqueness: "Proses roasting tradisional, kemasan ramah lingkungan",
                rawMaterial: "100% biji kopi lokal Temanggung",
                capacity: "500 kg/bulan",
                price: "Rp 85.000/kg",
            },
            rating: 4.8,
            reviews: 124,
            featured: true,
        },
        {
            id: 2,
            name: "Keripik Singkong 'Maknyus'",
            description:
                "Keripik singkong renyah dengan berbagai varian rasa yang telah menembus pasar ekspor. Dibuat dari singkong pilihan dengan teknologi modern namun tetap mempertahankan cita rasa tradisional.",
            category: "pangan",
            image: "/kopi.avif",
            cooperative: {
                name: "Koperasi Makanan Tradisional Nusantara",
                location: "Karesidenan Banyumas, Kabupaten Purwokerto",
                phone: "(0281) 635789",
                email: "maknyus@tradisionalnusantara.id",
                instagram: "@maknyus_official",
                tokopedia: "maknyus-keripik-official",
            },
            details: {
                certifications: ["PIRT", "Halal", "SNI"],
                uniqueness: "Ekspor ke 5 negara, 12 varian rasa unik",
                rawMaterial: "Singkong lokal Banyumas grade A",
                capacity: "2 ton/bulan",
                price: "Rp 25.000/pack",
            },
            rating: 4.9,
            reviews: 256,
            featured: true,
        },
        {
            id: 3,
            name: "Batik Tulis Lasem Heritage",
            description:
                "Batik tulis asli Lasem dengan motif tradisional yang diwariskan turun-temurun. Setiap lembar dikerjakan dengan penuh ketelitian oleh pengrajin berpengalaman puluhan tahun.",
            category: "kerajinan",
            image: "/kopi.avif",
            cooperative: {
                name: "Koperasi Batik Lasem Sejahtera",
                location: "Karesidenan Semarang, Kabupaten Rembang",
                phone: "(0295) 691456",
                email: "batiklasem@sejahtera.co.id",
                instagram: "@batiklasemsejahtera",
                facebook: "BatikLasemSejahtera",
            },
            details: {
                certifications: ["Warisan Budaya", "Hak Cipta Motif"],
                uniqueness: "Motif eksklusif Lasem, pewarna alami",
                rawMaterial: "Kain katun premium, pewarna alam",
                capacity: "200 lembar/bulan",
                price: "Rp 350.000 - Rp 1.500.000",
            },
            rating: 4.7,
            reviews: 89,
            featured: false,
        },
        {
            id: 4,
            name: "Sayuran Organik Hidroponik",
            description:
                "Sayuran segar hasil budidaya hidroponik tanpa pestisida. Tersedia berbagai jenis sayuran daun dan buah dengan kualitas premium untuk konsumen yang peduli kesehatan.",
            category: "pertanian",
            image: "/kopi.avif",
            cooperative: {
                name: "Koperasi Tani Modern Sejahtera",
                location: "Karesidenan Surakarta, Kabupaten Boyolali",
                phone: "(0276) 321987",
                email: "tanimodern@sejahtera.id",
                instagram: "@tanimodernsejahtera",
                whatsapp: "081234567890",
            },
            details: {
                certifications: ["Organik", "Good Agricultural Practice"],
                uniqueness: "Sistem hidroponik NFT, panen setiap hari",
                rawMaterial: "Bibit unggul, nutrisi organik",
                capacity: "1 ton/minggu",
                price: "Rp 15.000 - Rp 35.000/kg",
            },
            rating: 4.6,
            reviews: 167,
            featured: false,
        },
        {
            id: 5,
            name: "Tas Rajut Eceng Gondok",
            description:
                "Tas ramah lingkungan dari eceng gondok yang diolah menjadi produk fashion berkualitas tinggi. Desain modern dengan sentuhan tradisional yang cocok untuk berbagai acara.",
            category: "kerajinan",
            image: "/kopi.avif",
            cooperative: {
                name: "Koperasi Kerajinan Alam Lestari",
                location: "Karesidenan Pekalongan, Kabupaten Batang",
                phone: "(0285) 391234",
                email: "alamlestari@kerajinan.id",
                instagram: "@alamlestari_craft",
                etsy: "alam-lestari-indonesia",
            },
            details: {
                certifications: ["Eco-Friendly", "Fair Trade"],
                uniqueness: "Bahan ramah lingkungan, desain kontemporer",
                rawMaterial: "Eceng gondok kering, pewarna alami",
                capacity: "300 pcs/bulan",
                price: "Rp 125.000 - Rp 450.000",
            },
            rating: 4.8,
            reviews: 203,
            featured: true,
        },

    ]

    const categories = [
        { id: "all", name: "Semua Kategori", icon: Briefcase, count: 156 },
        { id: "pangan", name: "Pangan Olahan", icon: Coffee, count: 45 },
        { id: "kerajinan", name: "Kerajinan Tangan", icon: Palette, count: 38 },
        { id: "pertanian", name: "Pertanian & Perkebunan", icon: Leaf, count: 32 },
        { id: "tekstil", name: "Tekstil & Fashion", icon: Shirt, count: 25 },
        { id: "jasa", name: "Jasa", icon: Users, count: 16 },
    ]

    const successStories = [
        {
            id: 1,
            title: "Dari Kebun ke Meja Makan: Kisah Keripik Singkong 'Maknyus' yang Mendunia",
            excerpt:
                "Bagaimana sebuah koperasi kecil di Purwokerto berhasil mengekspor keripik singkong ke 5 negara dan meraih omzet miliaran rupiah...",
            image: "/koperasi.webp",
            cooperative: "Koperasi Makanan Tradisional Nusantara",
            achievement: "Ekspor ke 5 negara",

        },
        {
            id: 2,
            title: "Revolusi Hijau: Transformasi Petani Tradisional Menjadi Pionir Hidroponik",
            excerpt:
                "Perjalanan inspiratif Koperasi Tani Modern Sejahtera dalam mengadopsi teknologi hidroponik dan meningkatkan pendapatan anggota hingga 300%...",
            image: "/koperasi.webp",
            cooperative: "Koperasi Tani Modern Sejahtera",
            achievement: "Peningkatan pendapatan 300%",

        },
        {
            id: 3,
            title: "Melestarikan Warisan: Batik Lasem di Era Digital",
            excerpt:
                "Strategi Koperasi Batik Lasem Sejahtera dalam mempertahankan keaslian motif tradisional sambil memasuki pasar digital modern...",
            image: "/koperasi.webp",
            cooperative: "Koperasi Batik Lasem Sejahtera",
            achievement: "Pelestarian 50+ motif tradisional",

        },
    ]

    const featuredProducts = products.filter((product) => product.featured)

    return (
        <div className='min-h-screen bg-gradient-to-b from-sky-50 to-white'>
            <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-sky-400 to-blue-500 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-left mb-12">
                        <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6">Info Produk Unggulan Koperasi Merah Putih</Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Produk Unggulan Koperasi Desa Merah Putih
                            <br />
                            <span className="text-sky-200"> Kualitas dari Hati Desa</span>
                        </h1>
                        <p className="text-xl text-sky-100 mx-auto leading-relaxed">
                            DEKOPINWIL Jawa Tengah dengan bangga mempersembahkan katalog produk-produk terbaik dari Koperasi Desa Merah Putih di seluruh provinsi. Setiap produk adalah hasil kerja keras, inovasi, dan komitmen terhadap kualitas, mencerminkan potensi luar biasa ekonomi kerakyatan
                        </p>
                    </div>

                </div>
            </section>

            <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Produk Unggulan Pilihan</h2>
                        <Badge className="bg-sky-100 text-sky-800 flex items-center">
                            <Star className="h-4 w-4 mr-1" />
                            Featured
                        </Badge>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
                                <div className="aspect-video relative overflow-hidden">
                                    <Image
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-sky-600 text-white">
                                            {categories.find((cat) => cat.id === product.category)?.name}
                                        </Badge>
                                    </div>
                                </div>

                                <CardHeader>
                                    <CardTitle className="text-xl group-hover:text-sky-600 transition-colors line-clamp-1">
                                        {product.name}
                                    </CardTitle>
                                    <CardDescription className="text-sm line-clamp-2">
                                        {product.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="flex flex-col justify-between flex-grow space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Factory className="h-4 w-4 mr-2" />
                                            {product.cooperative.name}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <MapPin className="h-4 w-4 mr-2" />
                                            {product.cooperative.location}
                                        </div>
                                        <div className="text-lg font-bold text-sky-600">
                                            {product.details.price}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-1">
                                        {product.details.certifications.slice(0, 3).map((cert, index) => (
                                            <Badge key={index} variant="secondary" className="text-xs">
                                                <CheckCircle className="h-3 w-3 mr-1" />
                                                {cert}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex gap-2 mt-auto">
                                        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                                            <ExternalLink className="h-4 w-4" />
                                            Beli
                                        </Button>
                                        <Button className="bg-sky-600 text-white hover:bg-sky-700 w-full flex items-center justify-center gap-2">
                                            <Phone className="h-4 w-4" />
                                            Hubungi
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                </div>
            </section>

            <section className="py-20 px-4 md:px-6 lg:px-8 bg-sky-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Inspirasi dari Desa: Kisah Sukses Produk Koperasi
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Di balik setiap produk unggulan, ada cerita perjuangan dan inovasi. Baca kisah inspiratif bagaimana
                            Koperasi Desa Merah Putih berhasil mengembangkan produk mereka dan mencapai kesuksesan.
                        </p>
                    </div>
                    <div className='space-y-6'>
                        {successStories.map((story) => (
                            <div key={story.id} className=' mx-auto '>
                                <div className='grid grid-cols-1 md:grid-cols-2'>
                                    {/* Top-left section */}
                                    <div className="relative h-full">
                                        <Image
                                            src={story.image || "/placeholder.svg"}
                                            alt="A mother and son looking at a tablet together"
                                            className="h-full w-full object-cover object-top"
                                            width={400}
                                            height={300}
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-green-600 text-white">Success Story</Badge>
                                        </div>
                                    </div>

                                    {/* Top-right section */}
                                    <div className='flex flex-col justify-center gap-3 bg-white p-8'>
                                        <h2 className='mb-4 text-3xl font-bold'>
                                            {story.title}
                                        </h2>
                                        <p className='text-gray-700'>
                                            {story.excerpt}
                                        </p>
                                        <div className="space-y-2 text-sm">
                                            <div>
                                                <span className="font-medium">Koperasi:</span> {story.cooperative}
                                            </div>
                                            <div>
                                                <span className="font-medium">Pencapaian:</span> {story.achievement}
                                            </div>

                                        </div>
                                        <Button className="w-full bg-sky-600 hover:bg-sky-700">
                                            Baca Kisah Lengkap
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-blue-700">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ingin Produk Koperasi Anda Tampil di Sini?</h2>
                    <p className="text-xl text-sky-100 mb-8 leading-relaxed">
                        Bergabunglah dengan katalog produk unggulan DEKOPINWIL Jawa Tengah dan jangkau pasar yang lebih luas.
                        Dapatkan exposure maksimal untuk produk berkualitas koperasi Anda.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
                            Daftarkan Produk Anda
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-sky-600 bg-transparent"
                        >
                            Hubungi Tim Kami
                        </Button>
                    </div>
                    <p className="text-sky-200 text-sm mt-6">* Gratis untuk anggota DEKOPINWIL Jawa Tengah</p>
                </div>
            </section>
        </div>
    )
}

export default page
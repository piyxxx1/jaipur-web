"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Eye } from 'lucide-react';

interface Product {
  name: string;
  image: string;
  href: string;
  buyNowHref: string;
}

const products: Product[] = [
  {
    name: 'MONIDAY PREMIUM UBTAN SOAP 75 GM (PACK OF 6)',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ae1d8518-6a86-4d1e-9221-d8e6ab2bd428-vedankur-com/assets/images/11-UBTAN-300x300-12.jpg?',
    href: '#',
    buyNowHref: '#'
  },
  {
    name: 'PREMIUM MILK KESAR BATH SOAP 100GM (PACK OF 6)',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ae1d8518-6a86-4d1e-9221-d8e6ab2bd428-vedankur-com/assets/images/5-MILK-KESAR-300x300-13.jpg?',
    href: '#',
    buyNowHref: '#'
  },
  {
    name: 'MOGRA AGARBATTI 110GM (PACK OF 6)',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ae1d8518-6a86-4d1e-9221-d8e6ab2bd428-vedankur-com/assets/images/WhatsApp-Image-2025-04-26-at-18.12.08-300x300-14.jpeg?',
    href: '#',
    buyNowHref: '#'
  },
  {
    name: 'MONIDAY PREMIUM MILK KESAR SOAP 75 GM (PACK OF 6)',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ae1d8518-6a86-4d1e-9221-d8e6ab2bd428-vedankur-com/assets/images/5-MILK-KESAR-300x300-13.jpg?',
    href: '#',
    buyNowHref: '#'
  },
  {
    name: 'PRE BOOKING - SPECIAL OFFER',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ae1d8518-6a86-4d1e-9221-d8e6ab2bd428-vedankur-com/assets/images/WhatsApp-Image-2025-07-15-at-10.31.44-AM-300x300-15.jpeg?',
    href: '#',
    buyNowHref: '#'
  },
  {
    name: 'PREMIUM ALOE NEEM TULSI 125GM (PACK OF 6)',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ae1d8518-6a86-4d1e-9221-d8e6ab2bd428-vedankur-com/assets/images/Neutral-Brown-Illustrated-Wildflower-Minimalistic-Beauty-Logo-300x300-16.png?',
    href: '#',
    buyNowHref: '#'
  },
  {
    name: 'ORANGE FACEWASH 100GM (PACK OF 3)',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ae1d8518-6a86-4d1e-9221-d8e6ab2bd428-vedankur-com/assets/images/Green-Simple-Liquid-Bath-Soap-Facebook-Post-3-17.png?',
    href: '#',
    buyNowHref: '#'
  },
  {
    name: 'MONIDAY PREMIUM HONEY ALMOND 75 GM (PACK OF 6)',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ae1d8518-6a86-4d1e-9221-d8e6ab2bd428-vedankur-com/assets/images/Honey-almond-1-300x300-18.jpg?',
    href: '#',
    buyNowHref: '#'
  },
];

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-white shadow-card hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 sm:hover:-translate-y-2">
    <div className="relative aspect-square w-full overflow-hidden">
      <Link href={product.href} className="block h-full w-full">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <Button size="sm" className="flex-1 bg-white text-primary-blue hover:bg-white/90">
              <Eye className="w-4 h-4 mr-2" />
              View
            </Button>
          </div>
        </div>
      </Link>
    </div>
    
    <div className="p-4 sm:p-6">
      <Link href={product.href}>
        <h3 className="font-primary text-xs sm:text-sm font-semibold text-dark-gray hover:text-primary-blue transition-colors duration-200 line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem] flex items-center">
          {product.name}
        </h3>
      </Link>
      
      <div className="mt-3 sm:mt-4 space-y-2">
        <Button 
          asChild
          className="w-full bg-gradient-to-r from-secondary-blue to-primary-blue hover:from-primary-blue hover:to-secondary-blue text-white font-semibold py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <Link href={product.buyNowHref}>
            <ShoppingCart className="w-4 h-4 mr-2" />
            Buy Now
          </Link>
        </Button>
      </div>
    </div>
  </div>
);

export default function FeaturedProducts() {
  return (
    <section className="bg-gradient-to-br from-white to-light-gray py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-40 h-40 bg-primary-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-green-accent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-primary-blue"></div>
            <div className="w-6 sm:w-8 h-px bg-primary-blue mx-2"></div>
            <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-primary-blue"></div>
          </div>
          <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-blue mb-3 sm:mb-4">
            Featured Products
          </h2>
          <p className="font-secondary text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Discover our premium collection of authentic Ayurvedic products crafted with natural ingredients
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        
        {/* View All Products Button */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <Button 
            asChild
            size="default"
            className="bg-gradient-to-r from-red-text to-primary-blue hover:from-primary-blue hover:to-red-text text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/shop">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
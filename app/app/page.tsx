'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Flame, Sparkles, Zap, Wrench, Circle, Battery, Droplets, Settings } from 'lucide-react'
import { products, categories, getFlashDeals, getNewArrivals } from '@/lib/products'
import ProductCard from '@/components/marketplace/ProductCard'

const banners = [
  {
    title: '⚡ Flash Deals',
    subtitle: 'Engine oils up to 20% off today',
    bg: 'from-brand-red to-brand-red-dark',
    cta: 'Shop Deals',
  },
  {
    title: '🆕 New Arrivals',
    subtitle: 'Michelin tyres now in stock',
    bg: 'from-brand-navy to-brand-navy-dark',
    cta: 'Shop New',
  },
  {
    title: '🚗 Fleet Supply',
    subtitle: 'Bulk orders — special pricing',
    bg: 'from-[#2a1a00] to-brand-navy-dark',
    cta: 'Enquire',
  },
]

export default function AppHomePage() {
  const [activeBanner, setActiveBanner] = useState(0)
  const flashDeals = getFlashDeals()
  const newArrivals = getNewArrivals()

  return (
    <div className="pb-4">
      {/* Banner carousel */}
      <div className="px-4 md:px-6 py-3 md:py-4">
        <div className={`relative h-36 md:h-52 lg:h-64 rounded-2xl overflow-hidden bg-gradient-to-r ${banners[activeBanner].bg}`}>
          <div className="absolute inset-0 grid-bg opacity-20" />
          {/* Decorative icon */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-24 h-24 md:w-40 md:h-40 opacity-10">
            <Image src="/assets/images/gear-car-filled.png" alt="" fill className="object-contain" />
          </div>
          <div className="relative z-10 p-5 md:p-8 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-white font-bold text-xl md:text-3xl lg:text-4xl leading-tight">{banners[activeBanner].title}</h2>
              <p className="text-white/70 text-sm md:text-base mt-1 md:mt-2">{banners[activeBanner].subtitle}</p>
            </div>
            <button className="self-start bg-white/20 text-white text-xs md:text-sm font-bold px-4 md:px-6 py-1.5 md:py-2.5 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
              {banners[activeBanner].cta} →
            </button>
          </div>
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-2.5">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveBanner(i)}
              className={`rounded-full transition-all ${i === activeBanner ? 'w-5 h-1.5 bg-brand-red' : 'w-1.5 h-1.5 bg-white/20'}`}
            />
          ))}
        </div>
      </div>

      {/* Category icons — horizontal scroll on mobile, grid on desktop */}
      <div className="px-4 md:px-6 mb-5 md:mb-6">
        {/* Mobile: horizontal scroll */}
        <div className="md:hidden overflow-x-auto marketplace-scroll">
          <div className="flex gap-3 w-max pb-1">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/app?cat=${cat.id}`} className="flex flex-col items-center gap-1.5 min-w-[68px]">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border border-white/10"
                  style={{ background: `${cat.color}22` }}>
                  {cat.icon}
                </div>
                <span className="text-white/60 text-[10px] text-center leading-tight">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop: full grid */}
        <div className="hidden md:grid md:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/app?cat=${cat.id}`}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-white/5 hover:border-white/20 transition-all group bg-brand-navy">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: `${cat.color}22`, border: `1px solid ${cat.color}33` }}>
                {cat.icon}
              </div>
              <span className="text-white/60 text-xs text-center group-hover:text-white transition-colors">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Flash Deals */}
      <div className="mb-6">
        <div className="flex items-center justify-between px-4 md:px-6 mb-3">
          <div className="flex items-center gap-2">
            <Flame size={16} className="text-brand-red" />
            <h2 className="text-white font-bold text-base md:text-lg">Flash Deals</h2>
          </div>
          <Link href="/app?filter=flash" className="text-brand-gold text-xs font-semibold flex items-center gap-1 hover:text-brand-gold-light transition-colors">
            See all <ChevronRight size={13} />
          </Link>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden overflow-x-auto marketplace-scroll px-4">
          <div className="flex gap-3 w-max">
            {flashDeals.map((product) => (
              <div key={product.id} className="w-44">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: responsive grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-6">
          {flashDeals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="mx-4 md:mx-6 border-t border-white/5 mb-6" />

      {/* New Arrivals */}
      <div className="mb-6">
        <div className="flex items-center justify-between px-4 md:px-6 mb-3">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-brand-gold" />
            <h2 className="text-white font-bold text-base md:text-lg">Just Arrived</h2>
          </div>
          <Link href="/app?filter=new" className="text-brand-gold text-xs font-semibold flex items-center gap-1 hover:text-brand-gold-light transition-colors">
            See all <ChevronRight size={13} />
          </Link>
        </div>
        <div className="px-4 md:px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="mx-4 md:mx-6 border-t border-white/5 mb-6" />

      {/* All Products */}
      <div>
        <div className="flex items-center justify-between px-4 md:px-6 mb-4">
          <h2 className="text-white font-bold text-base md:text-xl">All Products</h2>
          <span className="text-white/40 text-xs md:text-sm">{products.length} items</span>
        </div>
        <div className="px-4 md:px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Search, ShoppingCart, Bell, ChevronDown } from 'lucide-react'
import { useCartStore } from '@/lib/store'

interface AppHeaderProps {
  desktop?: boolean
}

export default function AppHeader({ desktop = false }: AppHeaderProps) {
  const totalItems = useCartStore((s) => s.totalItems())

  if (desktop) {
    return (
      <header className="sticky top-0 z-30 bg-[#08111f]/90 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-4 px-6 h-20">
          {/* Search bar — wider on desktop */}
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center gap-3 bg-brand-navy border border-white/10 rounded-2xl px-4 py-3 hover:border-white/20 transition-colors cursor-text">
              <Search size={16} className="text-white/30 flex-shrink-0" />
              <span className="text-white/30 text-sm">Search parts, brands, car model...</span>
              <span className="ml-auto text-[10px] text-white/20 border border-white/10 rounded px-1.5 py-0.5">⌘K</span>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button className="relative p-2.5 bg-brand-navy rounded-xl border border-white/10 hover:border-white/20 transition-colors">
              <Bell size={18} className="text-white/60" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-red rounded-full" />
            </button>

            <Link
              href="/app/cart"
              className="relative flex items-center gap-2 px-4 py-2.5 bg-brand-navy rounded-xl border border-white/10 hover:border-brand-gold/30 transition-all"
            >
              <ShoppingCart size={18} className="text-white/70" />
              <span className="text-white/70 text-sm font-medium">Cart</span>
              {totalItems > 0 && (
                <span className="bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>
    )
  }

  // Mobile header
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-brand-navy/95 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-between px-4 h-16">
        <Link href="/app" className="flex items-center gap-2">
          <div className="relative w-7 h-7">
            <Image src="/assets/logo/sgm-logo-gear.png" alt="SGM" fill className="object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading text-lg tracking-widest text-white">SGM</span>
            <span className="text-[7px] tracking-[0.2em] text-brand-gold uppercase">Marketplace</span>
          </div>
        </Link>

        <div className="flex-1 mx-3 bg-brand-navy-dark border border-white/10 rounded-full px-3 py-2 flex items-center gap-2">
          <Search size={14} className="text-white/40" />
          <span className="text-white/30 text-xs">Search parts...</span>
        </div>

        <Link href="/app/cart" className="relative p-2">
          <ShoppingCart size={22} className="text-white" />
          {totalItems > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-brand-red rounded-full flex items-center justify-center">
              <span className="text-white text-[9px] font-bold">{totalItems > 99 ? '99+' : totalItems}</span>
            </div>
          )}
        </Link>
      </div>
    </header>
  )
}

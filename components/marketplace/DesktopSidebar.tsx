'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Grid3X3, ShoppingCart, ClipboardList, User, Wrench, Zap, Circle, Battery, Droplets, Settings, ArrowLeft } from 'lucide-react'
import { useCartStore } from '@/lib/store'

const navItems = [
  { href: '/app', label: 'Home', icon: Home },
  { href: '/app?tab=categories', label: 'Browse All', icon: Grid3X3 },
  { href: '/app/cart', label: 'My Cart', icon: ShoppingCart },
  { href: '/app/orders', label: 'Orders', icon: ClipboardList },
  { href: '/app/profile', label: 'Profile', icon: User },
]

const categories = [
  { href: '/app?cat=engine-oils', label: 'Engine Oils', icon: Zap, color: '#C0392B' },
  { href: '/app?cat=spare-parts', label: 'Spare Parts', icon: Wrench, color: '#D4AF37' },
  { href: '/app?cat=tyres', label: 'Tyres', icon: Circle, color: '#C0392B' },
  { href: '/app?cat=batteries', label: 'Batteries', icon: Battery, color: '#1A2744' },
  { href: '/app?cat=fluids', label: 'Fluids', icon: Droplets, color: '#C0392B' },
  { href: '/app?cat=accessories', label: 'Accessories', icon: Settings, color: '#D4AF37' },
]

export default function DesktopSidebar() {
  const pathname = usePathname()
  const totalItems = useCartStore((s) => s.totalItems())

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 lg:w-72 xl:w-80 bg-brand-navy border-r border-white/10 flex flex-col overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-white/10 flex-shrink-0">
        <Link href="/app" className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image src="/assets/logo/sgm-logo-gear.png" alt="SGM" fill className="object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading text-xl tracking-widest text-white">SGM</span>
            <span className="text-[9px] tracking-[0.2em] text-brand-gold uppercase">Marketplace</span>
          </div>
        </Link>
      </div>

      {/* Main nav */}
      <nav className="p-4 flex-shrink-0">
        <p className="text-white/20 text-[10px] font-bold tracking-[0.25em] uppercase px-3 mb-3">Navigation</p>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = item.href === '/app' ? pathname === '/app' : pathname.startsWith(item.href.split('?')[0])
            const isCart = item.href === '/app/cart'
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group ${
                    isActive
                      ? 'bg-brand-red text-white'
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="relative">
                    <Icon size={18} strokeWidth={isActive ? 2.5 : 1.5} />
                    {isCart && totalItems > 0 && (
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-brand-gold rounded-full flex items-center justify-center">
                        <span className="text-brand-navy text-[8px] font-bold">{totalItems}</span>
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                  {isCart && totalItems > 0 && (
                    <span className="ml-auto text-xs bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded-full font-bold">{totalItems}</span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Divider */}
      <div className="mx-4 border-t border-white/10 flex-shrink-0" />

      {/* Categories */}
      <nav className="p-4 flex-shrink-0">
        <p className="text-white/20 text-[10px] font-bold tracking-[0.25em] uppercase px-3 mb-3">Categories</p>
        <ul className="space-y-1">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <li key={cat.href}>
                <Link
                  href={cat.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-white/50 hover:text-white hover:bg-white/5 transition-all"
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${cat.color}22`, border: `1px solid ${cat.color}33` }}>
                    <Icon size={13} style={{ color: cat.color }} />
                  </div>
                  <span className="text-sm">{cat.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom: back to site */}
      <div className="p-4 border-t border-white/10 flex-shrink-0">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/30 hover:text-white hover:bg-white/5 transition-all text-sm"
        >
          <ArrowLeft size={16} />
          Back to SGM Website
        </Link>
      </div>
    </aside>
  )
}

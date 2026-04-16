'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Grid3X3, ShoppingCart, ClipboardList, User } from 'lucide-react'
import { useCartStore } from '@/lib/store'

const navItems = [
  { href: '/app', label: 'Home', icon: Home },
  { href: '/app?tab=categories', label: 'Browse', icon: Grid3X3 },
  { href: '/app/cart', label: 'Cart', icon: ShoppingCart },
  { href: '/app/orders', label: 'Orders', icon: ClipboardList },
  { href: '/app/profile', label: 'Profile', icon: User },
]

export default function BottomNav() {
  const pathname = usePathname()
  const totalItems = useCartStore((s) => s.totalItems())

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-brand-navy border-t border-white/10 max-w-md mx-auto">
      <div className="flex h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = item.href === '/app'
            ? pathname === '/app'
            : pathname.startsWith(item.href)
          const isCart = item.href === '/app/cart'

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors relative ${
                isActive ? 'text-brand-red' : 'text-white/40 hover:text-white/70'
              }`}
            >
              <div className="relative">
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
                {isCart && totalItems > 0 && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-brand-red rounded-full flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold">{totalItems}</span>
                  </div>
                )}
              </div>
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-brand-red rounded-full" />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

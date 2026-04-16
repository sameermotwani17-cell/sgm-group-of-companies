'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ShoppingBag } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-navy-dark/95 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-pad flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
            <Image
              src="/assets/logo/sgm-logo-gear.png"
              alt="SGM Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading text-2xl tracking-widest text-white">SGM</span>
            <span className="text-[9px] tracking-[0.25em] text-brand-gold uppercase font-medium">Group of Companies</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wider uppercase text-white/80 hover:text-brand-gold transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/app"
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-brand-red-dark"
            style={{ clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)' }}
          >
            <ShoppingBag size={15} />
            Shop Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-navy-dark/95 backdrop-blur-md border-t border-white/10 section-pad py-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium tracking-wider uppercase text-white/80 hover:text-brand-gold transition-colors duration-200 py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/app"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-brand-red text-white text-sm font-bold tracking-wider uppercase mt-2"
          >
            <ShoppingBag size={15} />
            Open SGM Shop
          </Link>
        </div>
      </div>
    </nav>
  )
}

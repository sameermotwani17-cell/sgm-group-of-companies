import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark border-t border-white/10">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="section-pad py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm tracking-wide">
            West Africa's most trusted automotive supply partner
          </p>
          <a
            href="https://wa.me/231XXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-bold tracking-wide rounded-full transition-all hover:bg-[#128C7E]"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="section-pad py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image src="/assets/logo/sgm-logo-gear.png" alt="SGM" fill className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-2xl tracking-widest text-white">SGM</span>
                <span className="text-[9px] tracking-[0.2em] text-brand-gold uppercase">Group of Companies</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Automotive Division — Monrovia, Liberia.<br />
              Quality parts. Trusted service. African built.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-brand-gold font-semibold tracking-widest uppercase">Est. Liberia</span>
              <div className="w-8 h-px bg-brand-gold/40" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About SGM' },
                { href: '/marketplace', label: 'SGM Marketplace' },
                { href: '/app', label: 'Shop Online' },
                { href: '/contact', label: 'Contact Us' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/50 text-sm hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200">
                      <ArrowUpRight size={12} className="text-brand-gold" />
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-6">Products</h4>
            <ul className="space-y-3">
              {[
                'Spare Parts',
                'Engine Oils & Lubricants',
                'Tyres & Wheels',
                'Car Batteries',
                'Filters & Accessories',
                'Fleet Supply',
              ].map((item) => (
                <li key={item}>
                  <span className="text-white/50 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-6">Find Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-red mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  Monrovia, Liberia<br />
                  West Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-red flex-shrink-0" />
                <a href="tel:+231XXXXXXX" className="text-white/50 text-sm hover:text-white transition-colors">
                  +231 XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-red flex-shrink-0" />
                <a href="mailto:info@sgmgroup.lr" className="text-white/50 text-sm hover:text-white transition-colors">
                  info@sgmgroup.lr
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-[#25D366] flex-shrink-0" />
                <a href="https://wa.me/231XXXXXXX" className="text-white/50 text-sm hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 section-pad py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-xs tracking-wide">
          © {new Date().getFullYear()} SGM Group of Companies. All rights reserved.
        </p>
        <p className="text-white/30 text-xs">
          Founded by Sachin Motwani · Monrovia, Liberia
        </p>
      </div>
    </footer>
  )
}

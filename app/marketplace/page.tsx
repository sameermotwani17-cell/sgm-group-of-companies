'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShoppingBag, CreditCard, MapPin, Star, Smartphone, Zap, Shield } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(30px)',
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

const features = [
  { icon: ShoppingBag, title: '500+ Products', desc: 'Spare parts, oils, tyres, batteries, and accessories for all major car brands.' },
  { icon: CreditCard, title: 'Mobile Money & Card', desc: 'Orange Money, Lonestar, Visa/Mastercard, Vida Card, and Cash on Delivery.' },
  { icon: MapPin, title: 'Monrovia Delivery', desc: 'Fast delivery across Monrovia with real-time order tracking.' },
  { icon: Star, title: 'Verified Quality', desc: 'Every product is sourced from certified suppliers. No counterfeits.' },
  { icon: Smartphone, title: 'PWA Ready', desc: 'Add to your home screen for a native app experience on any phone.' },
  { icon: Zap, title: 'Flash Deals Daily', desc: 'New discounts every day on fast-moving automotive essentials.' },
]

const paymentMethods = [
  { name: 'Orange Money', color: '#FF6600', emoji: '🟠', desc: 'Liberia\'s #1 mobile money' },
  { name: 'Lonestar Money', color: '#0066CC', emoji: '🔵', desc: 'Lonestar MTN mobile payments' },
  { name: 'Visa / Mastercard', color: '#1A2744', emoji: '💳', desc: 'International card payments' },
  { name: 'Vida Card', color: '#00A651', emoji: '🟢', desc: 'Vida digital wallet' },
  { name: 'Cash on Delivery', color: '#D4AF37', emoji: '💵', desc: 'Pay when it arrives' },
]

export default function MarketplacePage() {
  return (
    <main className="bg-brand-navy-dark min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-28 section-pad overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06101f] via-[#0D1A38] to-[#160b0b]" />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-brand-navy-dark to-transparent" />

        {/* Red glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-brand-red/40 bg-brand-red/10 mb-8">
                  <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                  <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">SGM Marketplace</span>
                </div>
                <h1 className="heading-xl text-[clamp(3rem,7vw,5.5rem)] text-white mb-6">
                  THE AUTOMOTIVE<br />
                  <span className="text-brand-red">MARKETPLACE</span><br />
                  FOR LIBERIA
                </h1>
                <p className="text-white/60 text-xl leading-relaxed mb-10">
                  Shop genuine spare parts, engine oils, tyres, and batteries online — delivered fast in Monrovia. Pay with mobile money or cash.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/app" className="btn-primary text-base">
                    Open Marketplace
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://wa.me/231XXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-base"
                  >
                    WhatsApp Order
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Phone mockup hero */}
            <FadeIn delay={300} className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-brand-red/20 rounded-[50px] blur-3xl scale-110" />

                {/* Phone frame */}
                <div className="relative w-[300px] h-[620px] bg-brand-navy-dark border-2 border-white/20 rounded-[44px] overflow-hidden shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-0 right-0 h-10 bg-black/60 z-10 flex items-center justify-center">
                    <div className="w-24 h-5 bg-black rounded-full" />
                  </div>

                  {/* Screen content */}
                  <div className="h-full bg-gradient-to-b from-[#08111f] to-brand-navy pt-10 overflow-hidden">
                    {/* App header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-brand-navy border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 relative">
                          <Image src="/assets/logo/sgm-logo-gear.png" alt="SGM" fill className="object-contain" />
                        </div>
                        <span className="text-white text-xs font-bold">SGM SHOP</span>
                      </div>
                      <div className="w-6 h-6 bg-brand-red/20 rounded flex items-center justify-center">
                        <ShoppingBag size={12} className="text-brand-red" />
                      </div>
                    </div>

                    {/* Search bar */}
                    <div className="px-3 py-2">
                      <div className="bg-brand-navy-dark rounded-full px-3 py-1.5 flex items-center gap-2 border border-white/10">
                        <div className="w-3 h-3 rounded-full border border-white/30" />
                        <span className="text-white/30 text-[10px]">Search parts, brands...</span>
                      </div>
                    </div>

                    {/* Banner */}
                    <div className="mx-3 bg-brand-red rounded-xl p-3 mb-3">
                      <div className="text-white text-[10px] font-bold">⚡ FLASH DEALS TODAY</div>
                      <div className="text-white/80 text-[9px] mt-1">Up to 30% off Engine Oils</div>
                    </div>

                    {/* Category icons */}
                    <div className="px-3 mb-3">
                      <div className="grid grid-cols-4 gap-1.5">
                        {['🛢️ Oils', '⚙️ Parts', '🔵 Tyres', '🔋 Batt'].map((c) => (
                          <div key={c} className="bg-brand-navy-dark rounded-lg p-2 text-center border border-white/5">
                            <div className="text-[10px] text-white/60 leading-tight">{c}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Products grid */}
                    <div className="px-3">
                      <div className="text-white/40 text-[9px] font-bold tracking-widest uppercase mb-2">Just Arrived</div>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { name: 'Toyota 5W-30', price: 'LRD 850', badge: '🔥' },
                          { name: 'Brake Pads Honda', price: 'LRD 2,200', badge: '🆕' },
                          { name: 'Michelin 195/65', price: 'LRD 12,500', badge: '' },
                          { name: 'NGK Spark Plugs', price: 'LRD 1,800', badge: '⚡' },
                        ].map((p) => (
                          <div key={p.name} className="bg-brand-navy-dark rounded-xl p-2 border border-white/5">
                            <div className="w-full aspect-square bg-brand-navy rounded-lg mb-1.5 flex items-center justify-center">
                              <div className="w-10 h-10 relative opacity-40">
                                <Image src="/assets/images/gear-car-filled.png" alt="" fill className="object-contain" />
                              </div>
                            </div>
                            <div className="text-[8px] text-white/70 leading-tight mb-0.5">{p.name}</div>
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] text-brand-gold font-bold">{p.price}</span>
                              {p.badge && <span className="text-[9px]">{p.badge}</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom nav */}
                    <div className="absolute bottom-0 left-0 right-0 bg-brand-navy border-t border-white/10 flex py-2.5 px-4">
                      {[
                        { icon: '🏠', label: 'Home' },
                        { icon: '📦', label: 'Browse' },
                        { icon: '🛒', label: 'Cart' },
                        { icon: '📋', label: 'Orders' },
                        { icon: '👤', label: 'Profile' },
                      ].map((n) => (
                        <div key={n.label} className="flex-1 flex flex-col items-center gap-0.5">
                          <span className="text-[10px]">{n.icon}</span>
                          <span className="text-[7px] text-white/40">{n.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -left-8 top-1/4 bg-brand-navy border border-white/20 px-4 py-2 rounded-full shadow-xl">
                  <span className="text-white text-xs font-semibold">🇱🇷 Made for Liberia</span>
                </div>
                <div className="absolute -right-8 bottom-1/3 bg-brand-gold px-4 py-2 rounded-full shadow-xl">
                  <span className="text-brand-navy text-xs font-bold">PWA Ready</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 section-pad bg-[#080f20]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">Platform Features</span>
            </div>
            <h2 className="section-title text-5xl text-white">
              EVERYTHING YOU <span className="text-brand-red">NEED</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <FadeIn key={f.title} delay={i * 80}>
                  <div className="card-dark p-8 group h-full">
                    <div className="w-12 h-12 bg-brand-red/10 border border-brand-red/30 flex items-center justify-center mb-6 group-hover:bg-brand-red/20 transition-colors">
                      <Icon size={22} className="text-brand-red" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PAYMENT METHODS ── */}
      <section className="py-24 section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">Payment Options</span>
              <div className="w-8 h-px bg-brand-gold" />
            </div>
            <h2 className="section-title text-5xl text-white mb-4">
              PAY YOUR <span className="text-brand-red">WAY</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              We accept all major payment methods used in Liberia — mobile money, cards, and cash.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {paymentMethods.map((p, i) => (
              <FadeIn key={p.name} delay={i * 80}>
                <div
                  className="card-dark p-6 text-center flex flex-col items-center gap-3 group"
                >
                  <div className="text-4xl">{p.emoji}</div>
                  <h3 className="text-white font-bold text-sm leading-tight">{p.name}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 section-pad bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="section-title text-5xl md:text-6xl text-white mb-6">
            START SHOPPING <br />
            <span className="text-brand-gold">RIGHT NOW</span>
          </h2>
          <p className="text-white/80 text-lg mb-10">
            No account needed to browse. Add items, choose your payment, and get your parts delivered.
          </p>
          <Link href="/app" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-red font-bold tracking-wide uppercase text-base hover:bg-brand-gold hover:text-brand-navy transition-all"
            style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}>
            <ShoppingBag size={20} />
            Open SGM Marketplace
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

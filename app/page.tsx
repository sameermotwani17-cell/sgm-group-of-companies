'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Shield, Truck, Award, Users, Wrench, Zap, Phone } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, start])
  return count
}

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp(value, 1800, visible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="text-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="font-heading text-6xl md:text-7xl text-brand-red leading-none">
        {count}{suffix}
      </div>
      <div className="mt-2 text-white/60 text-sm tracking-widest uppercase font-medium">{label}</div>
    </div>
  )
}

const services = [
  { icon: Wrench, title: 'Spare Parts', desc: 'Genuine & aftermarket parts for all major vehicle brands. Sourced globally, delivered locally.', color: '#C0392B' },
  { icon: Zap, title: 'Engine Oils', desc: 'Premium lubricants from Castrol, Total, Toyota, and more. Keep your engine running clean.', color: '#D4AF37' },
  { icon: Shield, title: 'Tyres & Batteries', desc: 'Michelin, Bridgestone, PowerMax. Road-ready for Liberian conditions.', color: '#1A2744' },
  { icon: Truck, title: 'Fleet Supply', desc: 'Bulk supply for commercial fleets, construction companies, and government contracts.', color: '#C0392B' },
  { icon: Award, title: 'Quality Guaranteed', desc: 'Every product is tested and certified. We stand behind what we sell.', color: '#D4AF37' },
  { icon: Users, title: 'Customer Support', desc: 'Expert staff on call. Technical advice, compatibility checks, and fast order processing.', color: '#1A2744' },
]

export default function HomePage() {
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="bg-brand-navy-dark min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#06101f] via-[#0D1A38] to-[#1a0a08]" />
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Dramatic red glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-red/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[600px] bg-brand-navy/60 rounded-full blur-[80px]" />

        {/* Large background logo - decorative */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[55vw] max-w-[700px] opacity-8 select-none pointer-events-none"
          style={{ opacity: 0.06 }}
        >
          <Image
            src="/assets/logo/sgm-logo-gear.png"
            alt=""
            width={700}
            height={700}
            className="object-contain animate-spin-slow"
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 section-pad w-full pt-32 pb-20">
          <div className="max-w-5xl">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 border border-brand-gold/30 bg-brand-gold/10 mb-8 transition-all duration-700 ${
                heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">
                Monrovia, Liberia
              </span>
            </div>

            {/* Main headline */}
            <h1
              className={`heading-xl text-[clamp(3.5rem,10vw,8rem)] text-white mb-6 transition-all duration-700 delay-100 ${
                heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              WEST AFRICA'S{' '}
              <span className="text-gradient-red">MOST TRUSTED</span>
              <br />
              AUTOMOTIVE
              <br />
              <span className="text-brand-gold">SUPPLY PARTNER</span>
            </h1>

            {/* Sub */}
            <p
              className={`text-white/60 text-lg md:text-xl max-w-xl leading-relaxed mb-10 transition-all duration-700 delay-200 ${
                heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              SGM Group delivers premium spare parts, engine oils, tyres, and fleet supply across Liberia. Built for African roads. Built to last.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
                heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Link href="/app" className="btn-primary text-base gap-3">
                Explore Products
                <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="btn-outline text-base">
                About SGM
              </Link>
            </div>

            {/* Stats row */}
            <div
              className={`mt-16 pt-12 border-t border-white/10 grid grid-cols-3 gap-8 max-w-lg transition-all duration-700 delay-500 ${
                heroLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {[
                { val: '500', label: 'Products' },
                { val: '2K+', label: 'Customers' },
                { val: '10+', label: 'Years' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-heading text-4xl text-brand-gold">{s.val}</div>
                  <div className="text-white/40 text-xs tracking-widest uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero right — floating logo */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%]">
          <div className="relative h-full flex items-center justify-center">
            <div
              className={`relative w-[420px] h-[420px] transition-all duration-1000 delay-400 ${
                heroLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-brand-red/10 blur-2xl animate-pulse-gold" />
              <div className="absolute inset-8 rounded-full border border-brand-gold/20" />
              <div className="absolute inset-16 rounded-full border border-brand-red/20" />
              <Image
                src="/assets/logo/sgm-logo-text.png"
                alt="SGM Group of Companies"
                fill
                className="object-contain p-8 animate-float"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="bg-brand-red py-4 overflow-hidden border-y border-brand-red-dark">
        <div className="flex gap-16 animate-[marquee_20s_linear_infinite] whitespace-nowrap" style={{
          animation: 'marquee 20s linear infinite',
        }}>
          {Array(3).fill(null).map((_, i) => (
            <div key={i} className="flex items-center gap-16 flex-shrink-0">
              {['Spare Parts', 'Engine Oils', 'Tyres & Wheels', 'Car Batteries', 'Fleet Supply', 'Lubricants', 'Filters', 'Accessories'].map((t) => (
                <span key={t} className="text-white font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="py-28 section-pad bg-[#080f20]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="divider-gold mb-6" />
            <h2 className="section-title text-5xl md:text-6xl text-white mb-4">WHAT WE <span className="text-brand-red">DELIVER</span></h2>
            <p className="text-white/50 text-lg max-w-xl">
              Comprehensive automotive solutions for individual car owners, workshops, and commercial fleets across Liberia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="card-dark p-8 group cursor-default"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${s.color}22`, border: `1px solid ${s.color}44` }}
                  >
                    <Icon size={22} style={{ color: s.color }} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 tracking-wide">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-28 section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5">
          <Image src="/assets/images/gear-car-wings.png" alt="" fill className="object-contain object-right" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="divider-gold mb-6" />
              <h2 className="section-title text-5xl md:text-6xl text-white mb-6">
                BUILT FOR <br />
                <span className="text-brand-gold">AFRICA.</span>
                <br />BUILT TO LAST.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                SGM Group of Companies was founded with one mission: to bring world-class automotive products to the heart of West Africa. Operating from Monrovia, Liberia, we supply everything from a single brake pad to full fleet inventory.
              </p>
              <p className="text-white/60 leading-relaxed mb-10">
                Founder Sachin Motwani built SGM on relationships — with suppliers, workshops, and everyday car owners who deserve quality parts at fair prices.
              </p>
              <Link href="/about" className="btn-gold">
                Our Story
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-brand-navy border border-white/10 p-8">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/assets/logo/sgm-logo-vertical.png"
                    alt="SGM Group of Companies"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-brand-gold/30 -z-0" />
              <div className="absolute -bottom-8 -right-8 w-full h-full border border-brand-red/20 -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-24 section-pad bg-[#080f20] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatCard value={500} suffix="+" label="Products In Stock" delay={0} />
            <StatCard value={2000} suffix="+" label="Happy Customers" delay={100} />
            <StatCard value={10} suffix="+" label="Years in Business" delay={200} />
            <StatCard value={50} suffix="+" label="Brand Partners" delay={300} />
          </div>
        </div>
      </section>

      {/* ── MARKETPLACE PROMO ── */}
      <section className="py-28 section-pad relative overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Phone mockup */}
            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <div className="relative">
                {/* Phone frame */}
                <div className="w-[280px] h-[560px] bg-brand-navy-dark border-2 border-white/20 rounded-[40px] overflow-hidden shadow-2xl relative">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black/40 z-10 flex items-center justify-center">
                    <div className="w-20 h-4 bg-black rounded-full" />
                  </div>
                  <div className="h-full bg-gradient-to-b from-brand-navy to-brand-navy-dark pt-8">
                    {/* Mock app screen */}
                    <div className="p-4">
                      <div className="bg-brand-red/90 rounded-xl p-3 mb-3 flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-lg" />
                        <div>
                          <div className="text-white text-xs font-bold">SGM MARKETPLACE</div>
                          <div className="text-white/60 text-[10px]">Automotive Parts</div>
                        </div>
                      </div>
                      <div className="flex gap-2 mb-3">
                        {['Oils', 'Parts', 'Tyres', 'Batt.'].map((c) => (
                          <div key={c} className="flex-1 bg-brand-navy-dark rounded-lg p-2 text-center">
                            <div className="text-[9px] text-white/60">{c}</div>
                          </div>
                        ))}
                      </div>
                      <div className="text-white/40 text-[10px] mb-2 font-semibold tracking-widest uppercase">Flash Deals</div>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { name: 'Engine Oil 5W-30', price: 'LRD 850' },
                          { name: 'Air Filter Universal', price: 'LRD 1,400' },
                          { name: 'Spark Plugs x4', price: 'LRD 1,800' },
                          { name: 'Washer Fluid', price: 'LRD 550' },
                        ].map((p) => (
                          <div key={p.name} className="bg-brand-navy-dark rounded-lg p-2 border border-white/10">
                            <div className="w-full aspect-square bg-brand-navy rounded mb-1 flex items-center justify-center">
                              <div className="w-8 h-8 bg-brand-red/20 rounded" />
                            </div>
                            <div className="text-[8px] text-white/70 leading-tight mb-1">{p.name}</div>
                            <div className="text-[9px] text-brand-gold font-bold">{p.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Bottom nav */}
                    <div className="absolute bottom-0 left-0 right-0 bg-brand-navy-dark border-t border-white/10 flex py-3 px-4">
                      {['🏠', '📦', '🛒', '👤'].map((icon) => (
                        <div key={icon} className="flex-1 text-center text-sm">{icon}</div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Glow */}
                <div className="absolute inset-0 bg-brand-red/20 rounded-[40px] blur-3xl -z-10 scale-110" />
              </div>
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <div className="divider-gold mb-6" />
              <h2 className="section-title text-5xl md:text-6xl text-white mb-6">
                SHOP SGM <br />
                <span className="text-brand-red">ANYWHERE.</span>
                <br />ANYTIME.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                The SGM Marketplace brings our full catalog to your phone. Browse hundreds of parts, compare prices in LRD and USD, and order with cash on delivery or mobile money.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  'Pay with Orange Money, Lonestar, or Cash',
                  'Compatible parts matched to your car',
                  'Real-time stock availability',
                  'Fast delivery across Monrovia',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white/70">
                    <div className="w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-brand-gold" />
                    </div>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/app" className="btn-primary">
                  Open Web App
                  <ArrowRight size={16} />
                </Link>
                <Link href="/marketplace" className="btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-20 section-pad bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="section-title text-5xl md:text-6xl text-white mb-6">
            NEED PARTS? <br />
            <span className="text-brand-gold">LET'S TALK.</span>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Reach us on WhatsApp, visit our Monrovia location, or place an order online. We respond fast.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/231XXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold tracking-wide uppercase text-sm transition-all duration-300 hover:bg-[#128C7E]"
              style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
            >
              <Phone size={16} />
              WhatsApp Us
            </a>
            <Link href="/contact" className="btn-outline">
              Contact Page
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </main>
  )
}

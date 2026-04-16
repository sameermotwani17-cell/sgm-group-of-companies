'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Linkedin, Target, Globe, Truck, Wrench, Zap, Package } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

const divisions = [
  {
    icon: Wrench,
    title: 'Spare Parts Supply',
    desc: 'Genuine and aftermarket parts for Toyota, Honda, Nissan, Hyundai, and more. Sourced from certified global suppliers and delivered to your door in Monrovia.',
    color: '#C0392B',
    image: '/assets/images/gear-car-filled.png',
  },
  {
    icon: Zap,
    title: 'Lubricants & Engine Oils',
    desc: 'Full range of engine oils, transmission fluids, brake fluids, and coolants from Castrol, Total, Toyota Genuine, and our own SGM Premium line.',
    color: '#D4AF37',
    image: '/assets/images/gear-car-line.png',
  },
  {
    icon: Truck,
    title: 'Fleet & Commercial Supply',
    desc: 'Bulk parts procurement for commercial fleets, construction companies, mining operations, and government vehicles across Liberia.',
    color: '#1A2744',
    image: '/assets/images/gear-car-wings.png',
  },
  {
    icon: Package,
    title: 'Accessories & Electronics',
    desc: 'LED lighting, car audio, dash cameras, seat covers, and essential car care products for the modern African driver.',
    color: '#C0392B',
    image: '/assets/images/car-split.png',
  },
]

const values = [
  { label: 'Quality First', desc: 'We never compromise on product quality. Every part we sell meets manufacturer specifications.' },
  { label: 'African Focused', desc: 'Our catalog and pricing are built specifically for Liberian road conditions and purchasing power.' },
  { label: 'Trust Built Daily', desc: 'Thousands of drivers and workshops trust SGM. That trust is earned one transaction at a time.' },
  { label: 'Fast & Reliable', desc: 'We stock deeply and ship fast. What you need, when you need it.' },
]

export default function AboutPage() {
  return (
    <main className="bg-brand-navy-dark min-h-screen">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="relative pt-40 pb-28 section-pad overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06101f] via-[#0D1A38] to-[#1A2744]" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5">
          <Image src="/assets/images/gear-car-wings.png" alt="" fill className="object-contain object-right" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-navy-dark to-transparent" />

        <div className="relative z-10 max-w-4xl">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">Our Story</span>
            </div>
            <h1 className="heading-xl text-[clamp(3rem,8vw,6rem)] text-white mb-6">
              WHO WE <span className="text-brand-red">ARE</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              SGM Group of Companies is Liberia's foremost automotive parts and supply company — built from the ground up in Monrovia to serve West Africa's growing automotive market.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── MISSION / ORIGIN ── */}
      <section className="py-24 section-pad bg-[#080f20]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="relative">
                <div className="bg-brand-navy border border-white/10 p-10 relative z-10">
                  <div className="relative w-full aspect-square max-w-sm mx-auto">
                    <Image
                      src="/assets/logo/sgm-logo-text.png"
                      alt="SGM Group"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-brand-gold/30 z-0" />
                <div className="absolute -bottom-6 -right-6 w-full h-full border border-brand-red/20 z-0" />

                {/* Floating tag */}
                <div className="absolute -top-5 -left-5 bg-brand-red px-5 py-3 z-20">
                  <span className="text-white text-sm font-bold tracking-wider uppercase">Est. Monrovia, Liberia</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-brand-gold" />
                <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">Origin & Mission</span>
              </div>
              <h2 className="section-title text-4xl md:text-5xl text-white mb-6">
                FROM MONROVIA <br />
                TO THE WHOLE <br />
                <span className="text-brand-gold">REGION</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-5 text-lg">
                SGM Group was founded with a clear vision: to eliminate the shortage of quality automotive parts in Liberia. For too long, drivers had to rely on grey-market parts of unknown quality, or wait weeks for imports.
              </p>
              <p className="text-white/60 leading-relaxed mb-5">
                We changed that. By establishing direct relationships with certified manufacturers and distributors across Asia, Europe, and North America, SGM now delivers genuine and premium aftermarket parts directly to Liberian consumers — at prices that make sense for the local economy.
              </p>
              <p className="text-white/60 leading-relaxed">
                Today, we serve individual car owners, auto workshops, taxi fleets, construction companies, and government agencies. The SGM promise is simple: the right part, at the right price, right here in Liberia.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── DIVISIONS ── */}
      <section className="py-24 section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">What We Do</span>
            </div>
            <h2 className="section-title text-5xl md:text-6xl text-white">
              OUR <span className="text-brand-red">DIVISIONS</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {divisions.map((d, i) => {
              const Icon = d.icon
              return (
                <FadeIn key={d.title} delay={i * 120}>
                  <div className="card-dark p-8 flex gap-6 h-full">
                    <div className="flex-shrink-0">
                      <div
                        className="w-14 h-14 flex items-center justify-center"
                        style={{ background: `${d.color}22`, border: `1px solid ${d.color}44` }}
                      >
                        <Icon size={24} style={{ color: d.color }} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl mb-3">{d.title}</h3>
                      <p className="text-white/50 leading-relaxed text-sm">{d.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-24 section-pad bg-[#080f20]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">Leadership</span>
            </div>
            <h2 className="section-title text-5xl md:text-6xl text-white">
              THE TEAM <span className="text-brand-red">BEHIND SGM</span>
            </h2>
          </FadeIn>

          <div className="max-w-md">
            <FadeIn delay={100}>
              <div className="card-dark overflow-hidden">
                {/* Photo placeholder */}
                <div className="relative h-72 bg-gradient-to-br from-brand-navy to-brand-navy-dark overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-48 opacity-20">
                      <Image src="/assets/logo/sgm-logo-gear.png" alt="" fill className="object-contain" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-white/40 text-xs uppercase tracking-widest">Photo Coming Soon</div>
                  </div>
                  {/* Red accent bar */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-red" />
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-1">Sachin Motwani</h3>
                      <p className="text-brand-gold text-sm font-semibold tracking-wider uppercase">Co-Founder & Director</p>
                    </div>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-[#0A66C2]/20 border border-[#0A66C2]/40 flex items-center justify-center hover:bg-[#0A66C2]/40 transition-colors"
                    >
                      <Linkedin size={16} className="text-[#0A66C2]" />
                    </a>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Sachin Motwani co-founded SGM Group of Companies with a mission to transform automotive supply in Liberia. With deep industry experience and a passion for the African market, he has built SGM into West Africa's most trusted automotive supply network.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-brand-red font-bold text-2xl font-heading">10+</div>
                      <div className="text-white/40 text-xs uppercase tracking-wide">Years Exp</div>
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div className="text-center">
                      <div className="text-brand-red font-bold text-2xl font-heading">500+</div>
                      <div className="text-white/40 text-xs uppercase tracking-wide">Products</div>
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div className="text-center">
                      <div className="text-brand-red font-bold text-2xl font-heading">LR</div>
                      <div className="text-white/40 text-xs uppercase tracking-wide">Based</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 section-pad bg-brand-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">Core Values</span>
            </div>
            <h2 className="section-title text-5xl text-white">
              WHAT WE <span className="text-brand-red">STAND FOR</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.label} delay={i * 100}>
                <div className="group cursor-default">
                  <div className="text-6xl font-heading text-brand-red/20 mb-4 group-hover:text-brand-red/40 transition-colors">
                    0{i + 1}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{v.label}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 section-pad bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="section-title text-5xl md:text-6xl text-white mb-6">
            READY TO <span className="text-brand-gold">SHOP?</span>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-lg mx-auto">
            Browse our full catalog and get your parts delivered in Monrovia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/app" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-red font-bold tracking-wide uppercase text-sm hover:bg-brand-gold hover:text-brand-navy transition-all"
              style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}>
              Open SGM Marketplace
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

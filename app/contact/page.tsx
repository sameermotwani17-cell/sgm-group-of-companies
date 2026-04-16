'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, MessageCircle, Send, Clock } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="bg-brand-navy-dark min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 section-pad overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06101f] via-[#0D1A38] to-[#1A2744]" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-navy-dark to-transparent" />

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">Get In Touch</span>
          </div>
          <h1 className="heading-xl text-[clamp(3rem,8vw,6rem)] text-white mb-6">
            CONTACT <span className="text-brand-red">SGM</span>
          </h1>
          <p className="text-white/60 text-xl">
            We're in Monrovia and respond fast. Reach us via WhatsApp, phone, or the form below.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-16 section-pad bg-[#080f20]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="section-title text-4xl text-white mb-8">REACH US</h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      color: '#C0392B',
                      title: 'Location',
                      lines: ['Monrovia, Liberia', 'West Africa'],
                    },
                    {
                      icon: Phone,
                      color: '#D4AF37',
                      title: 'Phone',
                      lines: ['+231 XXX XXXX', 'Mon–Sat 8am–7pm'],
                    },
                    {
                      icon: Mail,
                      color: '#1A2744',
                      title: 'Email',
                      lines: ['info@sgmgroup.lr', 'sales@sgmgroup.lr'],
                    },
                    {
                      icon: Clock,
                      color: '#C0392B',
                      title: 'Business Hours',
                      lines: ['Monday – Saturday', '8:00 AM – 7:00 PM'],
                    },
                  ].map((c) => {
                    const Icon = c.icon
                    return (
                      <div key={c.title} className="flex gap-5">
                        <div
                          className="w-11 h-11 flex-shrink-0 flex items-center justify-center mt-0.5"
                          style={{ background: `${c.color}22`, border: `1px solid ${c.color}44` }}
                        >
                          <Icon size={18} style={{ color: c.color }} />
                        </div>
                        <div>
                          <div className="text-white/40 text-xs uppercase tracking-widest mb-1">{c.title}</div>
                          {c.lines.map((l) => (
                            <div key={l} className="text-white font-medium">{l}</div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/231XXXXXXX?text=Hi%20SGM%2C%20I%27d%20like%20to%20enquire%20about..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all group"
              >
                <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/30 transition-colors">
                  <MessageCircle size={22} className="text-[#25D366]" />
                </div>
                <div>
                  <div className="text-white font-bold mb-0.5">Chat on WhatsApp</div>
                  <div className="text-[#25D366] text-sm">Fastest response — usually under 5 minutes</div>
                </div>
              </a>

              {/* Map placeholder */}
              <div className="relative bg-brand-navy border border-white/10 h-48 overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient opacity-60" />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <MapPin size={28} className="text-brand-red" />
                  <div className="text-white font-bold text-sm">Monrovia, Liberia</div>
                  <div className="text-white/40 text-xs">Map integration coming soon</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card-dark p-8 md:p-10">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-brand-gold/20 border border-brand-gold/40 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send size={28} className="text-brand-gold" />
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-3">Message Sent!</h3>
                    <p className="text-white/50">We'll get back to you within 1 business day. Or reach us on WhatsApp for a faster reply.</p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-8 text-brand-gold text-sm font-semibold hover:text-brand-gold-light transition-colors"
                    >
                      Send another message →
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="section-title text-4xl text-white mb-8">SEND A MESSAGE</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-white/50 text-xs uppercase tracking-widest block mb-2">Your Name *</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full bg-brand-navy-dark border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-brand-gold/50 transition-colors placeholder:text-white/20"
                            placeholder="Full name"
                          />
                        </div>
                        <div>
                          <label className="text-white/50 text-xs uppercase tracking-widest block mb-2">Phone / WhatsApp *</label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full bg-brand-navy-dark border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-brand-gold/50 transition-colors placeholder:text-white/20"
                            placeholder="+231 XXX XXXX"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-white/50 text-xs uppercase tracking-widest block mb-2">Subject</label>
                        <select
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full bg-brand-navy-dark border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-brand-gold/50 transition-colors"
                        >
                          <option value="">Select a topic...</option>
                          <option value="parts">Parts Enquiry</option>
                          <option value="fleet">Fleet Supply</option>
                          <option value="order">Order Status</option>
                          <option value="wholesale">Wholesale / Trade</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-white/50 text-xs uppercase tracking-widest block mb-2">Message *</label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full bg-brand-navy-dark border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-brand-gold/50 transition-colors resize-none placeholder:text-white/20"
                          placeholder="Tell us what parts you need, your vehicle model, or any other details..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary w-full justify-center text-base py-4"
                      >
                        <Send size={16} />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

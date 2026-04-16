'use client'

import { useState } from 'react'
import Link from 'next/link'
import { User, Phone, MapPin, ClipboardList, ChevronRight, Edit3, Shield, Bell, MessageCircle } from 'lucide-react'
import { useOrderStore } from '@/lib/store'

export default function ProfilePage() {
  const orders = useOrderStore((s) => s.orders)
  const [name, setName] = useState('Guest User')
  const [phone, setPhone] = useState('+231 XXX XXXX')
  const [address, setAddress] = useState('Monrovia, Liberia')
  const [editing, setEditing] = useState(false)

  const menuItems = [
    { icon: ClipboardList, label: 'My Orders', sub: `${orders.length} orders`, href: '/app/orders', color: '#C0392B' },
    { icon: Bell, label: 'Notifications', sub: 'Delivery & deal alerts', href: '#', color: '#D4AF37' },
    { icon: Shield, label: 'Privacy & Security', sub: 'Manage your data', href: '#', color: '#1A2744' },
    { icon: MessageCircle, label: 'WhatsApp Support', sub: 'Chat with SGM team', href: 'https://wa.me/231XXXXXXX', color: '#25D366' },
  ]

  const inputCls = "w-full bg-brand-navy-dark border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm outline-none focus:border-brand-gold/50 transition-colors"

  return (
    <div className="px-4 md:px-6 py-4 md:py-6 max-w-2xl md:mx-auto">
      <h1 className="text-white font-bold text-2xl md:text-3xl mb-6">Profile</h1>

      {/* Profile card */}
      <div className="bg-brand-navy rounded-2xl p-5 mb-5">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-brand-red/20 border-2 border-brand-red/40 rounded-full flex items-center justify-center flex-shrink-0">
            <User size={28} className="text-brand-red" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-white font-bold text-xl truncate">{name}</h2>
            <p className="text-white/40 text-sm">{phone}</p>
          </div>
          <button onClick={() => setEditing(!editing)}
            className="p-2.5 bg-brand-navy-dark rounded-xl border border-white/10 hover:border-white/30 transition-colors">
            <Edit3 size={16} className="text-white/60" />
          </button>
        </div>

        {editing ? (
          <div className="space-y-3">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className={inputCls} />
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" className={inputCls} />
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Delivery Address" className={inputCls} />
            <button onClick={() => setEditing(false)} className="w-full py-2.5 bg-brand-red text-white text-sm font-bold rounded-xl hover:bg-brand-red-dark transition-colors">
              Save Changes
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-sm text-white/50">
              <Phone size={14} className="text-brand-red flex-shrink-0" />{phone}
            </div>
            <div className="flex items-center gap-3 text-sm text-white/50">
              <MapPin size={14} className="text-brand-red flex-shrink-0" />{address}
            </div>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { val: orders.length, label: 'Orders' },
          { val: orders.filter((o) => o.status === 'delivered').length, label: 'Delivered' },
          { val: `LRD ${orders.reduce((s, o) => s + o.total, 0).toLocaleString()}`, label: 'Spent' },
        ].map((s) => (
          <div key={s.label} className="bg-brand-navy rounded-2xl p-4 text-center">
            <div className="text-white font-bold text-xl mb-0.5">{s.val}</div>
            <div className="text-white/40 text-[10px] uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Menu */}
      <div className="space-y-2 mb-6">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Link key={item.label} href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 bg-brand-navy rounded-2xl p-4 hover:bg-brand-navy-dark transition-colors">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${item.color}22`, border: `1px solid ${item.color}33` }}>
                <Icon size={18} style={{ color: item.color }} />
              </div>
              <div className="flex-1">
                <div className="text-white text-sm font-semibold">{item.label}</div>
                <div className="text-white/40 text-xs">{item.sub}</div>
              </div>
              <ChevronRight size={16} className="text-white/20" />
            </Link>
          )
        })}
      </div>

      <div className="text-center py-4">
        <div className="text-white/20 text-xs mb-1">SGM Group of Companies</div>
        <div className="text-white/10 text-xs">Monrovia, Liberia · v1.0.0</div>
      </div>
    </div>
  )
}

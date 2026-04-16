'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Package, ChevronDown, ChevronUp, ClipboardList } from 'lucide-react'
import { useOrderStore } from '@/lib/store'

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  pending: { label: 'Pending', color: 'text-brand-gold', bg: 'bg-brand-gold/10 border-brand-gold/30' },
  confirmed: { label: 'Confirmed', color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/30' },
  'out-for-delivery': { label: 'Out for Delivery', color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/30' },
  delivered: { label: 'Delivered', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/30' },
}

export default function OrdersPage() {
  const orders = useOrderStore((s) => s.orders)
  const [expanded, setExpanded] = useState<string | null>(null)

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-80 px-4 text-center">
        <div className="w-20 h-20 bg-brand-navy rounded-full flex items-center justify-center mb-4">
          <ClipboardList size={32} className="text-white/20" />
        </div>
        <h2 className="text-white font-bold text-xl mb-2">No orders yet</h2>
        <p className="text-white/40 text-sm mb-6">Your order history will appear here.</p>
        <Link href="/app" className="btn-primary text-sm px-6 py-3">Start Shopping</Link>
      </div>
    )
  }

  return (
    <div className="px-4 md:px-6 py-4 md:py-6 max-w-3xl md:mx-auto">
      <h1 className="text-white font-bold text-2xl md:text-3xl mb-6">My Orders</h1>

      <div className="space-y-3">
        {orders.map((order) => {
          const status = statusConfig[order.status] || statusConfig.pending
          const isExpanded = expanded === order.id
          return (
            <div key={order.id} className="bg-brand-navy rounded-2xl overflow-hidden">
              <button onClick={() => setExpanded(isExpanded ? null : order.id)}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-white font-bold text-sm md:text-base">{order.id}</span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${status.bg} ${status.color}`}>
                      {status.label}
                    </span>
                  </div>
                  <div className="text-white/40 text-xs md:text-sm">
                    {new Date(order.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    {' · '}{order.items.length} item{order.items.length !== 1 ? 's' : ''}
                    {' · '}LRD {order.total.toLocaleString()}
                  </div>
                </div>
                {isExpanded ? <ChevronUp size={18} className="text-white/40 flex-shrink-0" /> : <ChevronDown size={18} className="text-white/40 flex-shrink-0" />}
              </button>

              {isExpanded && (
                <div className="border-t border-white/10 p-5">
                  <div className="space-y-3 mb-4">
                    {order.items.map((item) => (
                      <div key={item.product.id} className="flex items-center gap-3">
                        <Package size={16} className="text-brand-red flex-shrink-0" />
                        <div className="flex-1">
                          <div className="text-white text-sm font-medium">{item.product.name}</div>
                          <div className="text-white/40 text-xs">Qty: {item.quantity} · LRD {(item.product.priceLRD * item.quantity).toLocaleString()}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/10 pt-4 space-y-2 text-sm">
                    <div className="flex justify-between text-white/50"><span>Payment</span><span>{order.paymentMethod}</span></div>
                    <div className="flex justify-between text-white/50"><span>Deliver to</span><span className="text-right max-w-[60%] leading-tight">{order.address}</span></div>
                    <div className="flex justify-between font-bold"><span className="text-white">Total</span><span className="text-brand-gold">LRD {order.total.toLocaleString()}</span></div>
                  </div>
                  {/* Timeline */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1">
                      {['pending','confirmed','out-for-delivery','delivered'].map((s, i) => {
                        const idx = ['pending','confirmed','out-for-delivery','delivered'].indexOf(order.status)
                        const done = i <= idx
                        return (
                          <div key={s} className="flex items-center flex-1">
                            <div className={`w-3 h-3 rounded-full flex-shrink-0 ${done ? 'bg-brand-red' : 'bg-white/10'}`} />
                            {i < 3 && <div className={`flex-1 h-0.5 ${done && i < idx ? 'bg-brand-red' : 'bg-white/10'}`} />}
                          </div>
                        )
                      })}
                    </div>
                    <div className="flex justify-between mt-1">
                      {['Pending','Confirmed','Delivery','Done'].map((l) => (
                        <span key={l} className="text-[8px] text-white/30">{l}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCartStore } from '@/lib/store'

const DELIVERY_FEE = 500

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCartStore()
  const sub = subtotal()
  const total = sub + DELIVERY_FEE

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-80 px-4 text-center">
        <div className="w-20 h-20 bg-brand-navy rounded-full flex items-center justify-center mb-4">
          <ShoppingBag size={32} className="text-white/20" />
        </div>
        <h2 className="text-white font-bold text-xl mb-2">Your cart is empty</h2>
        <p className="text-white/40 text-sm mb-6">Add some automotive essentials!</p>
        <Link href="/app" className="btn-primary text-sm px-6 py-3">Browse Products</Link>
      </div>
    )
  }

  return (
    <div className="px-4 md:px-6 py-4 md:py-6 max-w-5xl md:mx-auto">
      <h1 className="text-white font-bold text-2xl md:text-3xl mb-6">
        My Cart <span className="text-white/30 font-normal text-base md:text-lg">({items.length} items)</span>
      </h1>

      <div className="md:grid md:grid-cols-5 md:gap-8">
        {/* Items — 3 cols on desktop */}
        <div className="md:col-span-3 space-y-3 mb-6 md:mb-0">
          {items.map((item) => (
            <div key={item.product.id} className="bg-brand-navy rounded-2xl p-4 flex gap-4">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-navy-dark rounded-xl overflow-hidden flex-shrink-0 relative">
                <Image src={item.product.image} alt={item.product.name} fill className="object-contain p-2" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-brand-gold text-[10px] font-bold tracking-wider uppercase">{item.product.brand}</p>
                <h3 className="text-white text-sm md:text-base font-semibold leading-tight mb-1 line-clamp-2">{item.product.name}</h3>
                {item.variant && <p className="text-white/40 text-xs mb-1">Size: {item.variant}</p>}
                <div className="text-brand-gold font-bold text-base md:text-lg">
                  LRD {(item.product.priceLRD * item.quantity).toLocaleString()}
                </div>
              </div>
              <div className="flex flex-col items-end justify-between flex-shrink-0">
                <button onClick={() => removeItem(item.product.id)}
                  className="p-1.5 bg-brand-red/10 rounded-lg hover:bg-brand-red/20 transition-colors">
                  <Trash2 size={14} className="text-brand-red" />
                </button>
                <div className="flex items-center bg-brand-navy-dark rounded-xl border border-white/10">
                  <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white">−</button>
                  <span className="w-6 text-center text-white text-sm font-bold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary — 2 cols on desktop, sticky */}
        <div className="md:col-span-2">
          <div className="md:sticky md:top-24 bg-brand-navy rounded-2xl p-5 mb-4">
            <h2 className="text-white font-bold text-base mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-white/50">Subtotal ({items.length} items)</span>
                <span className="text-white">LRD {sub.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Delivery Fee</span>
                <span className="text-white">LRD {DELIVERY_FEE.toLocaleString()}</span>
              </div>
              <div className="border-t border-white/10 pt-3 flex justify-between">
                <span className="text-white font-bold">Total</span>
                <div className="text-right">
                  <div className="text-brand-gold font-bold text-xl">LRD {total.toLocaleString()}</div>
                  <div className="text-white/30 text-xs">${(total / 189).toFixed(2)} USD</div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/app/checkout"
            className="w-full flex items-center justify-center gap-2 py-4 bg-brand-red text-white font-bold tracking-wide text-sm rounded-2xl hover:bg-brand-red-dark transition-colors">
            Proceed to Checkout
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}

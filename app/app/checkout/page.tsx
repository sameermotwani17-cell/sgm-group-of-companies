'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle } from 'lucide-react'
import { useCartStore, useOrderStore } from '@/lib/store'

type PaymentMethod = 'orange-money' | 'lonestar' | 'card' | 'vida' | 'cod'

const DELIVERY_FEE = 500

const paymentOptions: { id: PaymentMethod; label: string; emoji: string; desc: string }[] = [
  { id: 'orange-money', label: 'Orange Money', emoji: '🟠', desc: 'Enter your Orange Money number' },
  { id: 'lonestar', label: 'Lonestar Money', emoji: '🔵', desc: 'Lonestar MTN mobile payment' },
  { id: 'card', label: 'Visa / Mastercard', emoji: '💳', desc: 'International debit or credit card' },
  { id: 'vida', label: 'Vida Card', emoji: '🟢', desc: 'Vida digital wallet' },
  { id: 'cod', label: 'Cash on Delivery', emoji: '💵', desc: 'Pay cash when your order arrives' },
]

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotal, clearCart } = useCartStore()
  const addOrder = useOrderStore((s) => s.addOrder)

  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>('orange-money')
  const [mobileNum, setMobileNum] = useState('')
  const [cardNum, setCardNum] = useState('')
  const [cardExp, setCardExp] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  const [placing, setPlacing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [orderId, setOrderId] = useState('')

  const sub = subtotal()
  const total = sub + DELIVERY_FEE

  const handlePlaceOrder = async () => {
    if (!address || !phone || !name) return
    setPlacing(true)
    await new Promise((r) => setTimeout(r, 1500))
    const id = `SGM-${Date.now().toString().slice(-6)}`
    setOrderId(id)
    addOrder({ id, items: [...items], total, status: 'pending', paymentMethod: paymentOptions.find((p) => p.id === selectedPayment)?.label || selectedPayment, address, date: new Date().toISOString() })
    clearCart()
    setSuccess(true)
    setPlacing(false)
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <div className="w-20 h-20 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={36} className="text-green-400" />
        </div>
        <h1 className="text-white font-bold text-2xl md:text-3xl mb-2">Order Placed!</h1>
        <p className="text-white/50 text-sm mb-4">Thank you, {name}</p>
        <div className="bg-brand-navy rounded-2xl px-8 py-4 mb-6">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Order Number</p>
          <p className="text-brand-gold font-bold text-2xl">{orderId}</p>
        </div>
        <p className="text-white/50 text-sm mb-8 leading-relaxed max-w-sm">
          We'll confirm your order via WhatsApp shortly. Delivery in Monrovia takes 1–3 hours.
        </p>
        <div className="flex gap-3 w-full max-w-sm">
          <button onClick={() => router.push('/app/orders')}
            className="flex-1 py-3.5 bg-brand-navy border border-white/20 text-white text-sm font-bold rounded-2xl hover:border-white/40 transition-colors">
            View Orders
          </button>
          <button onClick={() => router.push('/app')}
            className="flex-1 py-3.5 bg-brand-red text-white text-sm font-bold rounded-2xl hover:bg-brand-red-dark transition-colors">
            Keep Shopping
          </button>
        </div>
      </div>
    )
  }

  if (items.length === 0) { router.push('/app/cart'); return null }

  const inputCls = "w-full bg-brand-navy-dark border border-white/10 text-white px-4 py-3 rounded-xl text-sm outline-none focus:border-brand-gold/50 transition-colors placeholder:text-white/25"

  return (
    <div className="px-4 md:px-6 py-4 md:py-6 max-w-5xl md:mx-auto">
      <h1 className="text-white font-bold text-2xl md:text-3xl mb-6">Checkout</h1>

      <div className="md:grid md:grid-cols-5 md:gap-8">
        {/* Left: form — 3 cols */}
        <div className="md:col-span-3 space-y-4 mb-6 md:mb-0">

          {/* Delivery */}
          <div className="bg-brand-navy rounded-2xl p-5">
            <h2 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center text-white text-xs font-bold">1</span>
              Delivery Information
            </h2>
            <div className="space-y-3">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name *" className={inputCls} />
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone / WhatsApp *" className={inputCls} />
              <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Delivery address in Monrovia *" rows={3} className={`${inputCls} resize-none`} />
            </div>
          </div>

          {/* Payment */}
          <div className="bg-brand-navy rounded-2xl p-5">
            <h2 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center text-white text-xs font-bold">2</span>
              Payment Method
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              {paymentOptions.map((opt) => (
                <button key={opt.id} onClick={() => setSelectedPayment(opt.id)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border-2 transition-all text-left ${
                    selectedPayment === opt.id ? 'border-brand-gold bg-brand-gold/5' : 'border-white/10 hover:border-white/20'
                  }`}>
                  <span className="text-2xl">{opt.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold text-sm">{opt.label}</div>
                    <div className="text-white/40 text-xs truncate">{opt.desc}</div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${selectedPayment === opt.id ? 'border-brand-gold' : 'border-white/20'}`}>
                    {selectedPayment === opt.id && <div className="w-2 h-2 rounded-full bg-brand-gold" />}
                  </div>
                </button>
              ))}
            </div>
            {(selectedPayment === 'orange-money' || selectedPayment === 'lonestar' || selectedPayment === 'vida') && (
              <input type="tel" value={mobileNum} onChange={(e) => setMobileNum(e.target.value)} placeholder="Enter your mobile number" className={inputCls} />
            )}
            {selectedPayment === 'card' && (
              <div className="space-y-3">
                <input type="text" value={cardNum} onChange={(e) => setCardNum(e.target.value)} placeholder="Card number" maxLength={19} className={inputCls} />
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" value={cardExp} onChange={(e) => setCardExp(e.target.value)} placeholder="MM / YY" maxLength={5} className={inputCls} />
                  <input type="text" value={cardCvv} onChange={(e) => setCardCvv(e.target.value)} placeholder="CVV" maxLength={4} className={inputCls} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: summary — 2 cols, sticky */}
        <div className="md:col-span-2">
          <div className="md:sticky md:top-24 bg-brand-navy rounded-2xl p-5 mb-4">
            <h2 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center text-white text-xs font-bold">3</span>
              Order Summary
            </h2>
            <div className="space-y-2 text-sm mb-5">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-white/50">
                  <span className="truncate flex-1 mr-2">{item.product.name} × {item.quantity}</span>
                  <span className="flex-shrink-0">LRD {(item.product.priceLRD * item.quantity).toLocaleString()}</span>
                </div>
              ))}
              <div className="border-t border-white/10 pt-2 flex justify-between text-white/50">
                <span>Delivery</span><span>LRD {DELIVERY_FEE}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white font-bold">Total</span>
                <span className="text-brand-gold font-bold text-lg">LRD {total.toLocaleString()}</span>
              </div>
            </div>
            <button onClick={handlePlaceOrder} disabled={placing || !address || !phone || !name}
              className={`w-full py-4 rounded-2xl text-white font-bold text-sm tracking-wide transition-all ${
                placing || !address || !phone || !name ? 'bg-white/10 text-white/30 cursor-not-allowed' : 'bg-brand-red hover:bg-brand-red-dark'
              }`}>
              {placing ? 'Placing Order...' : `Place Order · LRD ${total.toLocaleString()}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Star, ShoppingCart, Zap, Check, ChevronRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/lib/products'
import { useCartStore } from '@/lib/store'
import ProductCard from '@/components/marketplace/ProductCard'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)
  const router = useRouter()
  const addItem = useCartStore((s) => s.addItem)
  const [quantity, setQuantity] = useState(1)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-64 px-4">
        <div className="text-white/40 text-lg mb-4">Product not found</div>
        <Link href="/app" className="text-brand-gold text-sm">← Back to Home</Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, product.category)
  const currentPrice = product.variants ? product.variants[selectedVariant].priceLRD : product.priceLRD
  const currentPriceUSD = product.variants ? product.variants[selectedVariant].priceUSD : product.priceUSD

  const handleAddToCart = () => {
    addItem(product, quantity, product.variants?.[selectedVariant]?.label)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleBuyNow = () => {
    addItem(product, quantity, product.variants?.[selectedVariant]?.label)
    router.push('/app/checkout')
  }

  return (
    <div className="pb-6">
      {/* Back */}
      <div className="flex items-center gap-3 px-4 md:px-6 py-3 border-b border-white/5">
        <button onClick={() => router.back()} className="p-1.5 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
          <ArrowLeft size={18} className="text-white" />
        </button>
        <span className="text-white/50 text-sm">Product Detail</span>
      </div>

      {/* Two-column on desktop */}
      <div className="md:grid md:grid-cols-2 md:gap-8 md:px-6 md:pt-6 lg:gap-12">
        {/* Image gallery */}
        <div>
          <div className="relative aspect-square bg-brand-navy mx-4 mt-3 md:mx-0 md:mt-0 rounded-2xl overflow-hidden md:sticky md:top-24">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-8 md:p-12"
            />
            <div className="absolute top-3 left-3 flex flex-col gap-1.5">
              {product.isFlashDeal && (
                <span className="bg-brand-red text-white text-[10px] font-bold px-2.5 py-1 rounded-full">⚡ FLASH DEAL</span>
              )}
              {product.isNew && (
                <span className="bg-brand-gold text-brand-navy text-[10px] font-bold px-2.5 py-1 rounded-full">NEW</span>
              )}
            </div>
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm rounded-2xl">
                <span className="text-white font-bold text-lg">Out of Stock</span>
              </div>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="px-4 md:px-0 pt-4 md:pt-0">
          <p className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-1">{product.brand}</p>
          <h1 className="text-white font-bold text-xl md:text-3xl leading-tight mb-3">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} size={13} className={s <= Math.round(product.rating) ? 'text-brand-gold fill-brand-gold' : 'text-white/20'} />
              ))}
            </div>
            <span className="text-white/50 text-sm">{product.rating} · {product.reviews} reviews</span>
          </div>

          {/* Price */}
          <div className="bg-brand-navy rounded-2xl p-4 mb-4">
            <div className="text-brand-gold font-bold text-3xl md:text-4xl">LRD {currentPrice.toLocaleString()}</div>
            <div className="text-white/40 text-sm">${currentPriceUSD.toFixed(2)} USD</div>
          </div>

          {/* Variants */}
          {product.variants && (
            <div className="mb-4">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Size / Volume</p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((v, i) => (
                  <button
                    key={v.label}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                      selectedVariant === i
                        ? 'bg-brand-red border-brand-red text-white'
                        : 'bg-brand-navy border-white/10 text-white/60 hover:border-white/30'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-4">
            <p className="text-white/50 text-xs uppercase tracking-widest">Quantity</p>
            <div className="flex items-center bg-brand-navy rounded-xl border border-white/10">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white text-xl">−</button>
              <span className="w-10 text-center text-white font-bold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white text-xl">+</button>
            </div>
          </div>

          {/* Compatibility */}
          {product.compatibility && (
            <div className="bg-brand-navy/50 border border-brand-gold/20 rounded-xl p-4 mb-4">
              <p className="text-brand-gold text-xs font-bold tracking-wider uppercase mb-1">Compatibility</p>
              <p className="text-white/70 text-sm leading-relaxed">{product.compatibility}</p>
            </div>
          )}

          {/* Description */}
          <div className="mb-5">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Description</p>
            <p className="text-white/70 text-sm leading-relaxed">{product.description}</p>
          </div>

          {/* Stock */}
          <div className="flex items-center gap-2 mb-6">
            <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className={`text-sm font-medium ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
              {product.inStock ? 'In Stock — Ready to ship' : 'Out of Stock'}
            </span>
          </div>

          {/* CTAs */}
          {product.inStock && (
            <div className="flex gap-3 mb-8">
              <button onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-bold tracking-wide transition-all ${
                  added ? 'bg-green-500/20 border border-green-500/40 text-green-400' : 'bg-brand-navy border border-white/20 text-white hover:border-white/40'
                }`}>
                {added ? <Check size={16} /> : <ShoppingCart size={16} />}
                {added ? 'Added!' : 'Add to Cart'}
              </button>
              <button onClick={handleBuyNow}
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-red text-white rounded-2xl text-sm font-bold tracking-wide hover:bg-brand-red-dark transition-colors">
                <Zap size={16} />
                Buy Now
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Related products — full width */}
      {related.length > 0 && (
        <div className="px-4 md:px-6 mt-6 md:mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-bold text-base md:text-lg">Related Products</h2>
            <ChevronRight size={16} className="text-white/30" />
          </div>
          {/* Mobile: horizontal scroll */}
          <div className="md:hidden overflow-x-auto marketplace-scroll -mx-4 px-4">
            <div className="flex gap-3 w-max pb-1">
              {related.map((p) => (
                <div key={p.id} className="w-44"><ProductCard product={p} /></div>
              ))}
            </div>
          </div>
          {/* Desktop: grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

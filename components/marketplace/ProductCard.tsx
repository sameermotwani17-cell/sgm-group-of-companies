'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Star } from 'lucide-react'
import { useCartStore } from '@/lib/store'
import type { Product } from '@/lib/products'

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem)

  return (
    <div className="bg-brand-navy rounded-2xl overflow-hidden border border-white/5 flex flex-col group">
      {/* Image */}
      <Link href={`/app/products/${product.id}`} className="relative aspect-square bg-brand-navy-dark block overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isFlashDeal && (
            <span className="bg-brand-red text-white text-[9px] font-bold px-2 py-0.5 rounded-full">⚡ DEAL</span>
          )}
          {product.isNew && (
            <span className="bg-brand-gold text-brand-navy text-[9px] font-bold px-2 py-0.5 rounded-full">NEW</span>
          )}
          {!product.inStock && (
            <span className="bg-white/20 text-white/70 text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">OUT OF STOCK</span>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="p-3 flex flex-col flex-1">
        <Link href={`/app/products/${product.id}`}>
          <p className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">{product.brand}</p>
          <h3 className="text-white text-sm font-semibold leading-tight mb-2 line-clamp-2">{product.name}</h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star size={10} className="text-brand-gold fill-brand-gold" />
          <span className="text-white/60 text-[10px]">{product.rating} ({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="mb-3">
          <div className="text-brand-gold font-bold text-base">LRD {product.priceLRD.toLocaleString()}</div>
          <div className="text-white/40 text-xs">${product.priceUSD.toFixed(2)} USD</div>
        </div>

        {/* Add to cart */}
        <button
          onClick={() => product.inStock && addItem(product)}
          disabled={!product.inStock}
          className={`mt-auto w-full flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold tracking-wide transition-all rounded-xl ${
            product.inStock
              ? 'bg-brand-red text-white hover:bg-brand-red-dark active:scale-95'
              : 'bg-white/5 text-white/30 cursor-not-allowed'
          }`}
        >
          <ShoppingCart size={13} />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  )
}

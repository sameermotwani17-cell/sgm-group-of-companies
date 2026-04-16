export interface Product {
  id: string
  name: string
  category: string
  priceLRD: number
  priceUSD: number
  image: string
  description: string
  compatibility?: string
  brand: string
  inStock: boolean
  isFlashDeal?: boolean
  isNew?: boolean
  rating: number
  reviews: number
  variants?: { label: string; priceLRD: number; priceUSD: number }[]
}

export const categories = [
  { id: 'engine-oils', label: 'Engine Oils', icon: '🛢️', color: '#C0392B' },
  { id: 'spare-parts', label: 'Spare Parts', icon: '⚙️', color: '#1A2744' },
  { id: 'tyres', label: 'Tyres', icon: '🔵', color: '#C0392B' },
  { id: 'batteries', label: 'Batteries', icon: '🔋', color: '#D4AF37' },
  { id: 'fluids', label: 'Fluids', icon: '💧', color: '#1A2744' },
  { id: 'accessories', label: 'Accessories', icon: '🔧', color: '#C0392B' },
]

export const products: Product[] = [
  {
    id: 'p001',
    name: 'Toyota Engine Oil 5W-30',
    category: 'engine-oils',
    priceLRD: 850,
    priceUSD: 4.50,
    image: '/assets/images/gear-car-filled.png',
    description: 'Premium fully synthetic engine oil 5W-30 designed for Toyota engines. Provides excellent protection against wear, reduces engine friction, and improves fuel efficiency. Suitable for gasoline engines.',
    compatibility: 'Toyota Corolla, Camry, Hilux, RAV4 (all years)',
    brand: 'Toyota',
    inStock: true,
    isFlashDeal: true,
    isNew: false,
    rating: 4.8,
    reviews: 124,
    variants: [
      { label: '1L', priceLRD: 850, priceUSD: 4.50 },
      { label: '4L', priceLRD: 3100, priceUSD: 16.50 },
      { label: '20L', priceLRD: 14500, priceUSD: 76.50 },
    ],
  },
  {
    id: 'p002',
    name: 'Honda Brake Pads (Front Set)',
    category: 'spare-parts',
    priceLRD: 2200,
    priceUSD: 11.00,
    image: '/assets/images/gear-car-line.png',
    description: 'OEM-quality front brake pads for Honda vehicles. Provides superior stopping power, low dust, and minimal noise. Made from premium ceramic composite material for extended life.',
    compatibility: 'Honda Accord 2008–2022, Civic 2006–2021, CR-V 2007–2022',
    brand: 'Honda',
    inStock: true,
    isFlashDeal: false,
    isNew: true,
    rating: 4.6,
    reviews: 87,
  },
  {
    id: 'p003',
    name: 'Universal Air Filter',
    category: 'spare-parts',
    priceLRD: 1400,
    priceUSD: 7.50,
    image: '/assets/images/gear-car-wings.png',
    description: 'High-performance universal air filter that improves airflow to the engine, increasing power and efficiency. Washable and reusable design for long-term value.',
    compatibility: 'Universal fit — most vehicles',
    brand: 'SGM Premium',
    inStock: true,
    isFlashDeal: true,
    isNew: false,
    rating: 4.4,
    reviews: 56,
  },
  {
    id: 'p004',
    name: 'Car Battery 12V 60Ah',
    category: 'batteries',
    priceLRD: 18000,
    priceUSD: 95.00,
    image: '/assets/images/car-split.png',
    description: 'Heavy-duty 12V 60Ah maintenance-free car battery. Superior cold cranking performance, vibration resistant, and leakproof. Built for African climate and road conditions.',
    compatibility: 'Toyota, Honda, Nissan, Hyundai, Kia — most sedans and SUVs',
    brand: 'PowerMax',
    inStock: true,
    isFlashDeal: false,
    isNew: false,
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 'p005',
    name: 'Michelin Tyre 195/65R15',
    category: 'tyres',
    priceLRD: 12500,
    priceUSD: 66.00,
    image: '/assets/images/gear-car-icon.png',
    description: 'Michelin Energy Saver tyre in 195/65R15. Industry-leading fuel efficiency, excellent wet and dry grip, and long tread life. Built for West African road conditions.',
    compatibility: 'Toyota Corolla, Honda Civic, Hyundai Elantra (195/65R15 fitment)',
    brand: 'Michelin',
    inStock: true,
    isFlashDeal: false,
    isNew: true,
    rating: 4.9,
    reviews: 178,
  },
  {
    id: 'p006',
    name: 'Windshield Washer Fluid',
    category: 'fluids',
    priceLRD: 550,
    priceUSD: 2.90,
    image: '/assets/images/sgm-gear-icon.png',
    description: 'Premium windshield washer fluid that removes road grime, dust, and insect residue efficiently. Anti-smear formula for crystal clear visibility. 1L bottle.',
    compatibility: 'Universal — all vehicles',
    brand: 'ClearView',
    inStock: true,
    isFlashDeal: true,
    isNew: false,
    rating: 4.2,
    reviews: 34,
  },
  {
    id: 'p007',
    name: 'Spark Plugs (Set of 4)',
    category: 'spare-parts',
    priceLRD: 1800,
    priceUSD: 9.50,
    image: '/assets/images/gear-car-filled.png',
    description: 'NGK iridium spark plugs for smooth engine start, improved fuel economy, and reduced emissions. Set of 4 plugs with pre-gapped tips for direct fitment.',
    compatibility: 'Fits most 4-cylinder engines — Toyota, Honda, Nissan, Hyundai',
    brand: 'NGK',
    inStock: true,
    isFlashDeal: false,
    isNew: false,
    rating: 4.7,
    reviews: 91,
  },
  {
    id: 'p008',
    name: 'Alternator Belt',
    category: 'spare-parts',
    priceLRD: 950,
    priceUSD: 5.00,
    image: '/assets/images/gear-car-line.png',
    description: 'Heavy-duty rubber alternator/serpentine belt. Resistant to heat, oil, and abrasion. Ensures reliable power delivery to all engine accessories.',
    compatibility: 'Toyota Corolla 1998–2020, Camry 2002–2018, Hilux 2005–2023',
    brand: 'Bando',
    inStock: true,
    isFlashDeal: false,
    isNew: false,
    rating: 4.5,
    reviews: 62,
  },
  {
    id: 'p009',
    name: 'Castrol GTX 10W-40',
    category: 'engine-oils',
    priceLRD: 1200,
    priceUSD: 6.30,
    image: '/assets/images/gear-car-wings.png',
    description: 'Castrol GTX 10W-40 mineral engine oil with advanced anti-sludge technology. Keeps engines cleaner for longer performance life.',
    compatibility: 'Petrol and light diesel engines',
    brand: 'Castrol',
    inStock: true,
    isFlashDeal: true,
    isNew: false,
    rating: 4.6,
    reviews: 145,
    variants: [
      { label: '1L', priceLRD: 1200, priceUSD: 6.30 },
      { label: '4L', priceLRD: 4400, priceUSD: 23.00 },
    ],
  },
  {
    id: 'p010',
    name: 'LED Headlight Bulbs H4',
    category: 'accessories',
    priceLRD: 3500,
    priceUSD: 18.50,
    image: '/assets/images/car-split.png',
    description: 'Ultra-bright LED H4 headlight bulbs. 6000K white light, 200% brighter than halogen, IP68 waterproof, plug-and-play installation. Pair included.',
    compatibility: 'H4 fitment — Toyota, Honda, Nissan, Suzuki',
    brand: 'BrightMax LED',
    inStock: true,
    isFlashDeal: false,
    isNew: true,
    rating: 4.7,
    reviews: 48,
  },
  {
    id: 'p011',
    name: 'Radiator Coolant 1L',
    category: 'fluids',
    priceLRD: 750,
    priceUSD: 3.95,
    image: '/assets/images/gear-car-icon.png',
    description: 'Premium ethylene glycol radiator coolant. Protects engine from overheating in Liberia\'s tropical climate. Prevents corrosion and scale buildup.',
    compatibility: 'Universal — dilute 50/50 with water',
    brand: 'ThermaGuard',
    inStock: true,
    isFlashDeal: false,
    isNew: false,
    rating: 4.3,
    reviews: 29,
  },
  {
    id: 'p012',
    name: 'Shock Absorber (Rear Pair)',
    category: 'spare-parts',
    priceLRD: 8500,
    priceUSD: 45.00,
    image: '/assets/images/sgm-gear-icon.png',
    description: 'Heavy-duty rear shock absorbers for smooth ride on rough Liberian roads. Oil-filled twin-tube design for superior performance and longevity.',
    compatibility: 'Toyota Corolla 2002–2019, Camry 2006–2018',
    brand: 'KYB',
    inStock: false,
    isFlashDeal: false,
    isNew: false,
    rating: 4.8,
    reviews: 71,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products
  return products.filter((p) => p.category === category)
}

export function getFlashDeals(): Product[] {
  return products.filter((p) => p.isFlashDeal)
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNew)
}

export function getRelatedProducts(productId: string, category: string): Product[] {
  return products.filter((p) => p.category === category && p.id !== productId).slice(0, 4)
}

import type { Metadata } from 'next'
import BottomNav from '@/components/layout/BottomNav'
import AppHeader from '@/components/marketplace/AppHeader'
import DesktopSidebar from '@/components/marketplace/DesktopSidebar'

export const metadata: Metadata = {
  title: 'SGM Marketplace — Auto Parts Liberia',
  description: 'Shop spare parts, engine oils, tyres and batteries online. Delivered in Monrovia, Liberia.',
  manifest: '/manifest.json',
  themeColor: '#C0392B',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'SGM Shop',
  },
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#08111f]">
      {/* Mobile top header — hidden on desktop */}
      <div className="md:hidden">
        <AppHeader />
      </div>

      {/* Desktop layout: sidebar + content */}
      <div className="md:flex md:min-h-screen">
        {/* Desktop sidebar — hidden on mobile */}
        <div className="hidden md:block md:w-64 lg:w-72 xl:w-80 flex-shrink-0">
          <DesktopSidebar />
        </div>

        {/* Main content area */}
        <div className="flex-1 min-w-0">
          {/* Desktop top bar */}
          <div className="hidden md:block">
            <AppHeader desktop />
          </div>

          <main className="pb-20 md:pb-8 pt-16 md:pt-20 min-h-screen">
            {children}
          </main>
        </div>
      </div>

      {/* Mobile bottom nav — hidden on desktop */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  )
}

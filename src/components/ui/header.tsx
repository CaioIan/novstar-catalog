'use client'

// filepath: c:\Users\zoran\workspace\vorse-catalog\src\components\ui\header.tsx
import logo from '@/assets/logo.png'
import NextImage from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const isProductPage = pathname?.startsWith('/product/')
    return (
    <header className="flex justify-center items-center bg-white h-16 shadow-md fixed w-full z-10">
      {isProductPage && (
        <Link href="/" className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold hover:text-gray-600 transition-colors">
          ←
        </Link>
      )}
      <NextImage
        src={logo}
        alt="Logo"
        width={90}
        height={90}
      />
    </header>
  )
}
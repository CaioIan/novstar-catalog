import logo from '@/assets/logo.png';
import NextImage from 'next/image';

export function Footer() {
  return (
    <footer className="flex gap-2 items-center bg-white shadow-[0_-4px_10px_-2px_rgba(0,0,0,0.1)] w-ful">
      <NextImage
        src={logo}
        alt="Logo"
        width={80}
        height={80}
      />
      <p className="text-sm">
        © {new Date().getFullYear()} NOVSTAR COMPANY. All rights reserved.
      </p>
    </footer>
  )
}
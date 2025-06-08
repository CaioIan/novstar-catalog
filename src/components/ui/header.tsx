import logo from '@/assets/logo.png'
import NextImage from 'next/image'

export function Header() {
  return (
    <header className="flex justify-center items-center bg-white h-16 shadow-md fixed w-full z-10">
      <NextImage
        src={logo}
        alt="Logo"
        width={90}
        height={90}
      />
    </header>
  )
}
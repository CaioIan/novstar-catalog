"use client";

import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency } from '@/utils/format';
import { sendGTMEvent } from '@next/third-parties/google';

interface ProductCardProps {
  id: number;
  name: string;
  promotionalPrice: number;
  imageUrl: string;
  imageAlt?: string;
  isOutOfStock?: boolean;
  sizes?: string[];
}

export function ProductCard({
  id,
  name,
  promotionalPrice,
  imageUrl,
  imageAlt = name,
  isOutOfStock = false,
}: ProductCardProps) {
  const formattedPrice = formatCurrency(promotionalPrice);

  // Todos os tamanhos sempre visíveis

  return (
    <Link onClick={() => sendGTMEvent({ event: 'buttonClicked', value: { id, name } })} href={`/product/${id}`}>
      <div className="flex flex-col justify-between bg-white rounded-lg overflow-hidden transition-shadow duration-300 group">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Badge ESGOTADO no canto superior esquerdo da imagem */}
          {isOutOfStock && (
            <div className="absolute top-7 left-4">
              <span className="inline-block bg-red-800 text-white text-xs font-bold px-2 py-1 rounded-[20px] border border-gray">
                Esgotado
              </span>
            </div>
          )}
          
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-500 line-clamp-2 h-12">
            {name}
          </h3>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 line-through">
                {formatCurrency(49.99)}
              </span>
              <span className="text-xl font-bold text-red-600">
                {formattedPrice}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

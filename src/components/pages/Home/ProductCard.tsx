"use client";

import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency } from '@/utils/format';
import { sendGTMEvent } from '@next/third-parties/google';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  promotionalPrice?: number;
  imageUrl: string;
  imageAlt?: string;
  isOutOfStock?: boolean;
  sizes?: string[];
}

export function ProductCard({
  id,
  name,
  price,
  promotionalPrice,
  imageUrl,
  imageAlt = name,
  isOutOfStock = false,
}: ProductCardProps) {
  const formattedPrice = formatCurrency(price);
  const formattedPromotionalPrice = promotionalPrice ? formatCurrency(promotionalPrice) : null;

  // Todos os tamanhos sempre visíveis

  return (
    <Link onClick={() => sendGTMEvent({ event: 'buttonClicked', value: { id, name } })} href={`/product/${id}`}>
      <div className="flex flex-col justify-between bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Badge DROP ST 2 no canto superior direito */}
          <div className="absolute top-2 right-2">
            <div className="relative w-16 h-6">
              <Image
                src="/drops/drop_st_2_badge.png"
                alt="DROP ST 2"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Badge ESGOTADO no canto inferior esquerdo da imagem */}
          {isOutOfStock && (
            <div className="absolute bottom-2 left-2">
              <span className="inline-block bg-black text-white text-xs font-bold px-2 py-1 rounded-[20px] border border-gray">
                Esgotado
              </span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-500 mb-2 line-clamp-2">
            {name}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className={promotionalPrice ? 'text-sm text-gray-500 line-through' : 'text-xl font-bold text-gray-950'}>
                {formattedPrice}
              </span>
              {formattedPromotionalPrice && (
                <span className="text-xl font-bold text-gray-950">
                  {formattedPromotionalPrice}
                </span>
              )}
            </div>
            <button className="bg-gray-950 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105">
              Ver Produto
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

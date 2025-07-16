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
  sizes = []
}: ProductCardProps) {
  const formattedPrice = formatCurrency(price);
  const formattedPromotionalPrice = promotionalPrice ? formatCurrency(promotionalPrice) : null;

  // Todos os tamanhos sempre visíveis
  const allSizes = ['M', 'G', 'GG'];

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
              <span className="inline-block bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded border border-red-200">
                ESGOTADO
              </span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-500 mb-2 line-clamp-2">
            {name}
          </h3>
          
          {/* Seção de tamanhos - TODOS os tamanhos sempre visíveis */}
          <div className="mb-3 h-[44px] flex flex-col justify-start">
            <p className="text-sm text-gray-600 mb-1">Tamanhos:</p>
            <div className="flex gap-1">
              {allSizes.map((size) => {
                const isAvailable = sizes.includes(size);
                return (
                  <span 
                    key={size}
                    className={`inline-block text-xs px-2 py-1 rounded border transition-all duration-200 relative ${
                      isAvailable 
                        ? 'bg-gray-100 text-gray-700 border-gray-300 opacity-100' 
                        : 'bg-gray-50 text-gray-400 border-gray-200 opacity-80'
                    }`}
                  >
                    {size}
                    {/* Traço diagonal para tamanhos não disponíveis */}
                    {!isAvailable && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-full h-[2px] bg-gray-500 rotate-45 transform origin-center"></div>
                      </div>
                    )}
                  </span>
                );
              })}
            </div>
          </div>

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

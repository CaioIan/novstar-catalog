"use client";

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/data/products';
import { formatCurrency } from '@/utils/format';
import { sendGTMEvent } from '@next/third-parties/google';

interface ProductPageProps {
  productId: string;
}

export function ProductPage({ productId }: ProductPageProps) {
  const product = products.find(p => p.id === parseInt(productId));
  
  if (!product) {
    notFound();
  }

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const allImages = [product.imageUrl, ...(product.imagesUrlColumn || [])];
  
  // Todos os tamanhos sempre visíveis
  const allSizes = ['M', 'G', 'GG'];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Coluna da imagem principal e miniaturas */}
        <div className="md:col-span-8">
          <div className="relative mb-4 bg-gray-100 rounded-lg overflow-hidden w-full max-w-[700px] aspect-square mx-auto">
            <Image
              src={allImages[selectedImageIndex]}
              alt={product.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 500px, (max-width: 1280px) 600px, 700px"
            />
            
            {/* Badge DROP ST 2 no canto superior direito */}
            <div className="absolute top-4 right-4">
              <div className="relative w-20 h-8">
                <Image
                  src="/drops/drop_st_2_badge.png"
                  alt="DROP ST 2"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Miniaturas */}
          {allImages.length > 1 && (
            <div className="flex gap-2 overflow-x-auto max-w-[700px] mx-auto">
              {allImages.map((imageUrl, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index 
                      ? 'border-gray-900' 
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <Image
                    src={imageUrl}
                    alt={`${product.name} - ${index + 1}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Coluna das informações do produto */}
        <div className="md:col-span-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

          {/* Badge de produto esgotado */}
          {product.isOutOfStock && (
            <div className="mb-4">
              <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                PRODUTO ESGOTADO
              </span>
            </div>
          )}

          {/* Seção de preços */}
          <div className="mb-6">
            {product.promotionalPrice ? (
              <>
                <p className="text-lg text-gray-500 line-through">
                  {formatCurrency(product.price)}
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {formatCurrency(product.promotionalPrice)}
                </p>
                <p className="text-sm text-green-600 font-medium">
                  {Math.round((1 - product.promotionalPrice / product.price) * 100)}% de desconto
                </p>
              </>
            ) : (
              <p className="text-3xl font-bold text-gray-900">
                {formatCurrency(product.price)}
              </p>
            )}
          </div>

          {/* Tamanhos - TODOS sempre visíveis */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Tamanhos:</h3>
            <div className="flex gap-2">
              {allSizes.map((size) => {
                const isAvailable = product.sizes?.includes(size);
                return (
                  <span
                    key={size}
                    className={`w-12 h-10 border flex items-center justify-center rounded-sm text-sm transition-all duration-200 relative ${
                      isAvailable 
                        ? 'border-black text-black hover:bg-gray-100 cursor-pointer opacity-100' 
                        : 'border-gray-300 text-gray-400 cursor-not-allowed opacity-80'
                    }`}
                  >
                    {size}
                    {/* Traço diagonal para tamanhos não disponíveis */}
                    {!isAvailable && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-full h-[1px] bg-gray-400 rotate-45 transform origin-center"></div>
                      </div>
                    )}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Botão de ação */}
          {product.isOutOfStock ? (
            <button 
              disabled 
              className="w-full bg-gray-400 text-white py-3 px-6 rounded-md font-medium text-lg cursor-not-allowed mb-8"
            >
              Produto Esgotado
            </button>
          ) : (
            <a 
              href="https://wa.me/558592079518?text=Fala%20mano!%20Tenho%20interesse%20em%20uma%20pe%C3%A7a%20da%20VORSE!" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <button 
                onClick={() => sendGTMEvent({ event: 'buttonClicked', value: { id: product.id, name: product.name } })}
                className="w-full bg-gray-950 hover:bg-gray-800 text-white py-3 px-6 rounded-md font-medium text-lg transition-all duration-200 mb-8"
              >
                Fale com o vendedor
              </button>
            </a>
          )}

          {/* Descrição do produto */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Descrição</h2>
            <div className="space-y-1">
              <p className="text-gray-600">👕 100% ALGODÃO</p>
              <p className="text-gray-600">🏅 FIO 30.1 PENTEADO</p>
              <p className="text-gray-600">🪡 GOLA RIBANA COSTURA DUPLA</p>
              <p className="text-gray-600">🧵 REFORÇO OMBRO A OMBRO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
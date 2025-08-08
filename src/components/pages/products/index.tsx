"use client";

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products, generateProductDescription } from '@/data/products'; // ← Adicionar generateProductDescription aqui
import { formatCurrency } from '@/utils/format';
import { sendGTMEvent } from '@next/third-parties/google';

interface ProductPageProps {
  productId: string;
}

export function ProductPage({ productId }: ProductPageProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  
  const product = products.find(p => p.id === parseInt(productId));
  
  if (!product) {
    notFound();
  }

  // Inicializar cor selecionada
  useEffect(() => {
    if (product?.colorsAvailable && product.colorsAvailable.length > 0) {
      setSelectedColor(product.colorsAvailable[0]);
    }
  }, [product]);

  const allImages = [product.imageUrl, ...(product.imagesUrlColumn || [])];
  const allSizes = ['M', 'G', 'GG'];

  // ✅ GERAR DESCRIÇÃO AUTOMÁTICA BASEADA NA CATEGORIA
  const productDescription = generateProductDescription(product);

  // Helper para cores de fundo dos círculos
  const getColorBackground = (color: string): string => {
    const colorMap: Record<string, string> = {
      'Preto': 'bg-black',
      'Branco': 'bg-white border border-gray-400',
      'Cinza': 'bg-gray-500',
      'Off': 'bg-[#FCF3EA] border border-gray-300',
      'Vermelho': 'bg-red-500',
      'Azul': 'bg-blue-500',
      'Verde': 'bg-green-500',
      'Navy': 'bg-blue-900',
      'Marrom': 'bg-amber-800',
    };
    
    return colorMap[color] || 'bg-gray-200';
  };

  // Função para controlar o movimento do mouse na imagem
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Coluna da imagem principal e miniaturas */}
        <div className="md:col-span-8">
          <div 
            className="relative mb-4 bg-gray-100 rounded-lg overflow-hidden w-full max-w-[700px] aspect-square mx-auto cursor-zoom-in"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Image
              src={allImages[selectedImageIndex]}
              alt={product.imageAlt}
              fill
              className={`object-cover ease-out ${
                isHovering ? 'scale-300' : 'scale-100'
              }`}
              style={{
                transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
              }}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 500px, (max-width: 1280px) 600px, 700px"
            />
            
            
          </div>
          
          {/* Miniaturas */}
          {allImages.length > 1 && (
            <div className="flex gap-2 overflow-x-auto max-w-[700px] mx-auto">
              {allImages.map((imageUrl, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
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
              <span className="inline-block bg-black text-white text-sm font-medium px-3 py-1 rounded-full">
                Produto esgotado
              </span>
            </div>
          )}

          {/* Seção de preços */}
          <div className="mb-6">
            <p className="text-lg text-gray-500 line-through mb-1">
              {formatCurrency(49.99)}
            </p>
            <p className="text-3xl font-bold text-red-600">
              {formatCurrency(product.promotionalPrice)}
            </p>
          </div>

          {/* Cores disponíveis */}
          {product.colorsAvailable && product.colorsAvailable.length > 0 && (
            <div className="mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                Cor: <span className="font-normal">{selectedColor}</span>
              </h3>
              <div className="flex gap-2 sm:gap-3">
                {product.colorsAvailable.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-all duration-200 ${
                      selectedColor === color
                        ? 'border-gray-900 scale-110'
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <div className={`w-full h-full rounded-full ${getColorBackground(color)}`}></div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tamanhos */}
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

          {/* ✅ DESCRIÇÃO DO PRODUTO - USANDO A FUNÇÃO */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Descrição:</h3>
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
              {productDescription}
            </div>
          </div>

          {/* Botão de ação */}
          {product.isOutOfStock ? (
            <button 
              disabled 
              className="w-full bg-gray-400 text-white py-3 px-6 rounded-md font-medium text-lg cursor-not-allowed mb-8"
            >
              Produto esgotado
            </button>
          ) : (
            <a href="https://wa.me/558592079518" onClick={() => sendGTMEvent({ event: 'buttonClicked', value: { id: product.id, name: product.name } })}>
              <button 
                className="w-full bg-gray-950 text-white py-3 px-6 rounded-md font-medium text-lg transition-all duration-200 cursor-pointer hover:scale-105"
              >
                Comprar Agora
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
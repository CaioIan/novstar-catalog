"use client";

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/data/products';
import { formatCurrency } from '@/utils/format';

import { sendGTMEvent } from '@next/third-parties/google'

interface ProductPageProps {
  productId: number;
}

export function ProductPage({ productId }: ProductPageProps) {
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Container flex para manter coluna de miniaturas e imagem principal na mesma altura */}
        <div className="hidden md:col-span-8 md:grid md:grid-cols-8 md:gap-4">
          {/* Coluna de miniaturas */}
          <div className="col-span-2 flex flex-col justify-between h-full">
            {product?.imagesUrlColumn?.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square border border-gray-200 rounded-md overflow-hidden cursor-pointer hover:border-gray-400 mb-4 last:mb-0"
              >
                <Image
                  src={image}
                  alt={`${product.name} - Imagem ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 16vw"
                />
              </div>
            ))}
          </div>

          <div className="col-span-6">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.imageAlt || product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className="md:hidden col-span-1">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.imageAlt || product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw"
              priority
            />
          </div>
        </div>

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

          {/* Tamanhos - só aparece se o produto tiver a propriedade 'sizes' */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Tamanhos Disponíveis:</h3>
              <div id='tamContainer' className='flex row gap-2'>
                {product.sizes.map((size) => (
                  <p
                    key={size}
                    className='w-[40px] h-[20px] border border-black flex items-center justify-center rounded-sm pt-[2px] hover:bg-gray-100 transition-colors'
                  >
                    {size}
                  </p>
                ))}
              </div>
            </div>
          )}

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

          {/* Botão condicional baseado no estoque */}
          {product.isOutOfStock ? (
            <button disabled className="w-full bg-gray-400 text-white py-3 px-6 rounded-md font-medium text-lg cursor-not-allowed">
              Produto Esgotado
            </button>
          ) : (
            <a href="https://wa.me/558592079518?text=Fala%20mano!%20Tenho%20interesse%20em%20uma%20pe%C3%A7a%20da%20VORSE!" target='_blank'>
              <button onClick={() => sendGTMEvent({ event: 'buttonClicked', value: { id: product.id, name: product.name } })} className="w-full bg-gray-950 hover:bg-gray-800 text-white py-3 px-6 rounded-md font-medium text-lg transition-all duration-200 cursor-pointer">
                Fale com o vendedor
              </button>
            </a>
          )}

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Descrição</h2>
            <div>
              <p className="text-gray-600">
                👕100% ALGODÃO
              </p>
              <p className="text-gray-600">
                🏅FIO 30.1 PENTEADO
              </p>
              <p className="text-gray-600">
                🪡GOLA RIBANA COSTURA DUPLA
              </p>
              <p className="text-gray-600">
                🧵REFORÇO OMBRO A OMBRO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
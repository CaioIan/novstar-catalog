import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/data/products';
import { formatCurrency } from '@/utils/format';

interface ProductPageProps {
  productId: string;
}

export function ProductPage({ productId }: ProductPageProps) {
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  // Vamos simular que temos várias imagens para o produto
  const productImages = [
    product.imageUrl,
    // Usando outras imagens da coleção para simular múltiplas imagens do produto
    ...products
      .filter((p) => p.id !== product.id)
      .slice(0, 2)
      .map((p) => p.imageUrl)
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Container flex para manter coluna de miniaturas e imagem principal na mesma altura */}
        <div className="hidden md:col-span-8 md:grid md:grid-cols-8 md:gap-4">
          {/* Coluna de miniaturas */}
          <div className="col-span-2 flex flex-col justify-between h-full">
            {productImages.map((image, index) => (
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

          <button className="w-full bg-gray-950 hover:bg-gray-800 text-white py-3 px-6 rounded-md font-medium text-lg transition-all duration-200 cursor-pointer">
            Fale com o vendedor
          </button>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Descrição</h2>
            <p className="text-gray-600">
              {product.description || 'Este produto combina estilo, conforto e qualidade premium. Perfeito para diversas ocasiões, com tecido durável e acabamento de primeira linha.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
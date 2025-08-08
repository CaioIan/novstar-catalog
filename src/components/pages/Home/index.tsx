import { products } from '@/data/products';
import { ProductCard } from './ProductCard';
import Image from 'next/image';

export function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <Image
          src="/drops/queima_de_estoque_agosto_banner_white.png"
          alt="Drop Street Collection"
          width={800}
          height={400}
          className="mx-auto"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            promotionalPrice={product.promotionalPrice}
            imageUrl={product.imageUrl}
            imageAlt={product.imageAlt}
            isOutOfStock={product.isOutOfStock}
            sizes={product.sizes}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-500">
          Drop Street 2 por Novstar Company
        </p>
      </div>
    </div>
  );
}

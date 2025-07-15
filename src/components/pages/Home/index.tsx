import { products } from '@/data/products';
import { ProductCard } from './ProductCard';

export function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <img src="/drops/drop street 2.png" alt="Drop Street Collection" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
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
          Mais produtos em breve!
        </p>
      </div>
    </div>
  );
}

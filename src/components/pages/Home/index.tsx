import { products } from '@/data/products';
import { ProductCard } from './ProductCard';

export function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Catálogo de Produtos
        </h1>
        <p className="text-gray-600">
          Descubra nossa coleção exclusiva de camisetas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            promotionalPrice={product.promotionalPrice}
            imageUrl={product.imageUrl}
            imageAlt={product.imageAlt}
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

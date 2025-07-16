import { ProductPage } from '@/components/pages/products';
import { BaseLayout } from '@/layout/BaseLayout';

interface PageProps {
  params: {
    id: string; // Parâmetro da URL sempre é string
  };
}

export default function Page({ params }: PageProps) {
  return (
    <BaseLayout>
      <ProductPage productId={params.id} />
    </BaseLayout>
  );
}

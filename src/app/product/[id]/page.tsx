import { ProductPage } from '@/components/pages/products';
import { BaseLayout } from '@/layout/BaseLayout';

export default function ProductPageRoute({ params }: { params: { id: string } }) {
  return (
    <BaseLayout>
      <ProductPage productId={params.id} />
    </BaseLayout>
  );
}

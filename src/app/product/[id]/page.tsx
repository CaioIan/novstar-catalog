import { ProductPage } from '@/components/pages/products';
import { BaseLayout } from '@/layout/BaseLayout';

export default async function ProductPageRoute({ params }: { params: { id: string } }) {

  const productId = parseInt(params.id, 10);

  return (
    <BaseLayout>
      <ProductPage productId={productId} />
    </BaseLayout>
  );
}

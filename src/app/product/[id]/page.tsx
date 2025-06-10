import { ProductPage } from '@/components/pages/products';
import { BaseLayout } from '@/layout/BaseLayout';

export default async function ProductPageRoute({ params }: { params: { id: string } }) {
  const resolvedParams = await Promise.resolve(params);
  const productId = parseInt(resolvedParams.id, 10);

  return (
    <BaseLayout>
      <ProductPage productId={productId} />
    </BaseLayout>
  );
}

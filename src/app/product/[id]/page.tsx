import { ProductPage } from '@/components/pages/products';
import { BaseLayout } from '@/layout/BaseLayout';

type ProductPageRouteProps = {
  params: Promise<{ id: string }>;
};


export default async function ProductPageRoute({ params }: ProductPageRouteProps) {
  const { id } = await params;
  const productId = parseInt(id, 10);

  return (
    <BaseLayout>
      <ProductPage productId={productId} />
    </BaseLayout>
  );
}

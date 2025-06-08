export interface Product {
  id: string;
  name: string;
  price: number;
  promotionalPrice?: number;
  imageUrl: string;
  imageAlt: string;
  description?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Camiseta Umbro High - Branco',
    price: 89.90,
    promotionalPrice: 69.90,
    imageUrl: '/products/UmbroHigh-Branco-Frente.jpeg',
    imageAlt: 'Camiseta Umbro High Branco - Frente'
  },
  {
    id: '2',
    name: 'Camiseta Umbro High - Detalhes',
    price: 89.90,
    promotionalPrice: 69.90,
    imageUrl: '/products/UmbroHigh-Branco-Detalhe-Tecido.jpeg',
    imageAlt: 'Camiseta Umbro High Branco - Detalhe do Tecido'
  },
  {
    id: '3',
    name: 'Camiseta Umbro High - Costas',
    price: 89.90,
    promotionalPrice: 69.90,
    imageUrl: '/products/UmbroHigh-Branco-Costas.jpeg',
    imageAlt: 'Camiseta Umbro High Branco - Costas'
  },
  {
    id: '4',
    name: 'Camiseta Umbro High - Edição Especial',
    price: 99.90,
    promotionalPrice: 79.90,
    imageUrl: '/products/UmbroHigh-Branco-Frente.jpeg',
    imageAlt: 'Camiseta Umbro High Edição Especial'
  },
  {
    id: '5',
    name: 'Camiseta Umbro High - Premium',
    price: 109.90,
    promotionalPrice: 89.90,
    imageUrl: '/products/UmbroHigh-Branco-Detalhe-Tecido.jpeg',
    imageAlt: 'Camiseta Umbro High Premium'
  },
  {
    id: '6',
    name: 'Camiseta Umbro High - Clássica',
    price: 79.90,
    promotionalPrice: 59.90,
    imageUrl: '/products/UmbroHigh-Branco-Costas.jpeg',
    imageAlt: 'Camiseta Umbro High Clássica'
  }
];
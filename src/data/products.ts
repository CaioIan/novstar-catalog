export interface Product {
  id: number;
  name: string;
  price: number;
  imagesUrlColumn?: string[];
  promotionalPrice?: number;
  imageUrl: string;
  imageAlt: string;
  description?: string;
  isOutOfStock?: boolean;
  sizes?: string[]; // ← Nova propriedade
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Camisa Streetwear NK SINCE 2012 BLACK',
    price: 69.90,
    promotionalPrice: 49.90,
    isOutOfStock: true,
    imagesUrlColumn: ['/products/camisasM/NIKE001-PRE-M-DETALHE-FRENTE-VEM.jpeg', '/products/camisasM/NIKE001-PRE-M-FRENTE-VEM.jpeg', '/products/camisasM/NIKE001-PRE-M-DETALHE-COSTAS-VEM.jpeg'],
    imageUrl: '/products/camisasM/NIKE001-PRE-M-COSTAS-VEM.jpeg',
    imageAlt: 'Camisa Streetwear NK SINCE 2012 BLACK - Costas'
  },
  {
    id: 2,
    name: 'Camisa Streetwear NK COLORED BLACK',
    sizes: ['M'],
    price: 69.90,
    promotionalPrice: 49.90,
    imagesUrlColumn: ['/products/camisasM/NIKECOL001-PRE-M-DETALHE-COSTA.jpeg', '/products/camisasM/NIKECOL001-PRE-M-FRENTE.jpeg', '/products/camisasM/NIKECOL001-PRE-M-DETALHE-FRENTE.jpeg'],
    imageUrl: '/products/camisasM/NIKECOL001-PRE-M-COSTAS.jpeg',
    imageAlt: 'Camisa Streetwear NK COLORED BLACK - Costas'
  },
  {
    id: 3,
    name: 'Camisa Streetwear NK X STUSSY BLACK',
    sizes: ['G'],
    price: 69.90,
    promotionalPrice: 49.90,
    imagesUrlColumn: ['/products/camisasG/NIKEST001-PRE-G-DETALHE-COSTA.jpeg', '/products/camisasG/NIKEST001-PRE-G-FRENTE.jpeg', '/products/camisasG/NIKEST001-PRE-G-DETALHE-FRENTE.jpeg'],
    imageUrl: '/products/camisasG/NIKEST001-PRE-G-COSTAS.jpeg',
    imageAlt: 'Camisa Streetwear NK X STUSSY BLACK - Costas'
  },
  {
    id: 4,
    name: 'Camisa Streetwear NK NIKE DAY OFF',
    price: 69.90,
    promotionalPrice: 49.90,
    isOutOfStock: true,
    imagesUrlColumn: ['/products/camisasM/NIKE001-OFF-M-FRENTE.jpeg', '/products/camisasM/NIKE001-OFF-M-DETALHE-FRENTE.jpeg', '/products/camisasM/NIKE001-OFF-M-DETALHES-COSTAS.jpeg'],
    imageUrl: '/products/camisasM/NIKE001-OFF-M-COSTAS.jpeg',
    imageAlt: 'Camisa Streetwear NK NIKE DAY OFF - Costas'
  },
  {
    id: 5,
    name: 'Camisa Streetwear THUG NINE WHITE',
    price: 69.90,
    promotionalPrice: 49.90,
    isOutOfStock: true,
    imagesUrlColumn: ['/products/camisasM/THUG001-BRA-M-DETALHE-FRENTE.jpeg', '/products/camisasM/THUG001-BRA-M-FRENTE.jpeg', '/products/camisasM/THUG001-BRA-M-DETALHE-COSTAS.jpeg'],
    imageUrl: '/products/camisasM/THUG001-BRA-M-COSTAS.jpeg',
    imageAlt: 'Camisa Streetwear THUG NINE WHITE - Costas'
  },
  {
    id: 6,
    name: 'Camisa Streetwear THUG NINE BLACK',
    price: 69.90,
    promotionalPrice: 49.90,
    isOutOfStock: true,
    imagesUrlColumn: ['/products/camisasM/THUG001-PRE-M-DETALHE-FRENTE.jpeg', '/products/camisasM/THUG001-PRE-M-FRENTE.jpeg', '/products/camisasM/THUG001-PRE-M-DETALHE-COSTAS.jpeg'],
    imageUrl: '/products/camisasM/THUG001-PRE-M-COSTAS.jpeg',
    imageAlt: 'Camisa Streetwear THUG NINE BLACK - Costas'
  },
  {
    id: 7,
    name: 'Camisa Streetwear TRIP SIDE BLACK',
    sizes: ['M'],
    price: 69.90,
    promotionalPrice: 49.90,
    imagesUrlColumn: ['/products/camisasM/TRIP001-PRE-M-DETALHE-FRENTE.jpeg', '/products/camisasM/TRIP001-PRE-M-FRENTE.jpeg', '/products/camisasM/TRIP001-PRE-M-DETALHE-COSTAS.jpeg'],
    imageUrl: '/products/camisasM/TRIP001-PRE-M-COSTAS.jpeg',
    imageAlt: 'Camisa Streetwear TRIP SIDE BLACK - Costas'
  },
  {
    id: 8,
    name: 'Camisa Streetwear TRIP SIDE BLACK',
    sizes: ['M'],
    price: 69.90,
    promotionalPrice: 49.90,
    imagesUrlColumn: ['/products/camisasM/TRIPAZ001-PRE-M-DETALHE-FRENTE.jpeg', '/products/camisasM/TRIPAZ001-PRE-M-FRENTE.jpeg', '/products/camisasM/TRIPAZ001-PRE-M-DETALHE-COSTAS.jpeg'],
    imageUrl: '/products/camisasM/TRIPAZ001-PRE-M-COSTAS.jpeg',
    imageAlt: 'Camisa Streetwear TRIP SIDE BLACK - Costas'
  },
  {
    id: 9,
    name: 'Camisa Streetwear CHRONIC WHITE',
    sizes: ['G'],
    price: 69.90,
    promotionalPrice: 49.90,
    imagesUrlColumn: ['/products/camisasG/CHRO001-BRA-G-DETALHE-FRENTE.jpeg', '/products/camisasG/CHRO001-BRA-G-FRENTE.jpeg', '/products/camisasG/CHRO001-BRA-G-DETALHE-COSTAS.jpeg'],
    imageUrl: '/products/camisasG/CHRO001-BRA-G-COSTAS.jpeg',
    imageAlt: 'Camisa Streetwear CHRONIC WHITE - Costas'
  },
  {
    id: 10,
    name: 'Camisa Streetwear NK SWOOSH BLACK',
    price: 69.90,
    promotionalPrice: 49.90,
    isOutOfStock: true,
    imagesUrlColumn: ['/products/camisasM/NIKESW001-PRE-M-DETALHE-COSTA.jpeg', '/products/camisasM/NIKESW001-PRE-M-FRENTE.jpeg', '/products/camisasM/NIKESW001-PRE-M-DETALHE-FRENTE.jpeg'],
    imageUrl: '/products/camisasM/NIKE001-PRE-M-COSTAS.jpeg',
    imageAlt: 'Camisa Streetwear NK SWOOSH BLACK - Costas'
  }
];
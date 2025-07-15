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
  sizes?: string[]; // Tamanhos disponíveis
}

export const products: Product[] = [
  {
    id: 1,
    name: 'High Stamp Black',
    price: 69.90,
    promotionalPrice: 49.90,
    sizes: ['M'], // Exemplo: apenas M e G disponíveis
    imagesUrlColumn: ['/products/mockups_still/camisasM/High_Tee_Stamp_Black_Front.webp', '/products/details/camisasM/High_Tee_Stamp_Black_Detail_Back.webp', '/products/details/camisasM/High_Tee_Stamp_Black_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/High_Tee_Stamp_Black_Back.webp',
    imageAlt: 'Camisa High Company Stamp Black, com estampa verde nas costas e estampa de estrela verde na frente no lado esquedo do peito da camisa'
  },
  {
    id: 2,
    name: 'High Tee Chaveiro Black',
    sizes: ['M'], // Exemplo: apenas M e GG disponíveis
    price: 69.90,
    promotionalPrice: 49.90,
    imagesUrlColumn: ['/products/mockups_still/camisasM/High_Tee_Chaveiro_Black_Front.webp', '/products/details/camisasM/High_Tee_Chaveiro_Black_Detail_Back.webp', '/products/details/camisasM/High_Tee_Chaveiro_Black_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/High_Tee_Chaveiro_Black_Back.webp',
    imageAlt: 'Camisa High Tee Chaveiro Black com estampa de um chaveiro nas costas e estampa da wordmark da High no lado esquerdo do peito da camisa'
  },
  {
    id: 3,
    name: 'Chronic Tee São Jorge Black',
    price: 69.90,
    promotionalPrice: 49.90,
    sizes: ['G'], // Exemplo: apenas G disponível
    imagesUrlColumn: ['/products/mockups_still/camisasG/Chronic_Tee_SãoJorge_Black_Front.webp', '/products/details/camisasG/Chronic_Tee_SãoJorge_Black_Detail_Back.webp', '/products/details/camisasG/Chronic_Tee_SãoJorge_Black_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasG/Chronic_Tee_SãoJorge_Black_Back.webp',
    imageAlt: 'Camisa Chronic Tee São Jorge Black com estampa de São Jorge nas costas'
  },
  {
    id: 4,
    name: 'Trip Side Dragon Tiger Red',
    sizes: ['M'],
    price: 69.90,
    promotionalPrice: 49.90,
    imagesUrlColumn: ['/products/mockups_still/camisasM/Trip_Tee_Dragon_White_Front.webp', '/products/details/camisasM/Trip_Tee_Dragon_White_Details_Back.jpg', '/products/details/camisasM/Trip_Tee_Dragon_White_Details_Front.jpeg'],
    imageUrl: '/products/mockups_still/camisasM/Trip_Tee_Dragon_White_Back.webp',
    imageAlt: 'Camisa Streetwear NK X STUSSY BLACK - Costas'
  },
  {
    id: 5,
    name: 'High Tee Origami Black',
    price: 69.90,
    promotionalPrice: 49.90,
    sizes: ['G', 'GG'],
    imagesUrlColumn: ['/products/mockups_still/camisasG/High_Tee_Origami_Black_Front.webp', '/products/details/camisasG/High_Tee_Origami_Black_Detail_Back.webp', '/products/details/camisasG/High_Tee_Origami_Black_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasG/High_Tee_Origami_Black_Back.webp',
    imageAlt: 'Camisa Streetwear THUG NINE BLACK - Costas'
  },
  {
    id: 6,
    name: 'VLone Spider White',
    price: 69.90,
    promotionalPrice: 49.90,
    sizes: ['M'],
    imagesUrlColumn: ['/products/mockups_still/camisasM/Vlone_Tee_VSpider_White_Front.webp', '/products/details/camisasM/Vlone_Tee_VSpider_White_Detail_Bakc.webp', '/products/details/camisasM/Vlone_Tee_VSpider_White_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/Vlone_Tee_VSpider_White_Back.webp',
    imageAlt: 'Camisa Streetwear NK NIKE DAY OFF - Costas'
  },
  {
    id: 7,
    name: 'Blunt Tee Basket Fire',
    price: 69.90,
    promotionalPrice: 49.90,
    sizes: ['M'],
    imagesUrlColumn: ['/products/mockups_still/camisasM/Blunt_Tee_BasketFire_White_Front.webp', '/products/details/camisasM/Blunt_Tee_BasketFire_White_Detail_Back.webp'],
    imageUrl: '/products/mockups_still/camisasM/Blunt_Tee_BasketFire_White_Back.webp',
    imageAlt: 'Camisa Streetwear THUG NINE WHITE - Costas'
  },
  {
    id: 8,
    name: 'Nike Tee Air 90 Black',
    price: 69.90,
    promotionalPrice: 49.90,
    sizes: ['M'],
    imagesUrlColumn: ['/products/mockups_still/camisasM/Nike_Tee_Air90_Black_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/Nike_Tee_Air90_Black_Back.webp',
    imageAlt: 'Camisa Streetwear THUG NINE BLACK - Costas'
  },
  {
    id: 9,
    name: 'High Tee Soldiers Black',
    price: 69.90,
    promotionalPrice: 49.90,
    sizes: ['G'],
    imagesUrlColumn: ['/products/mockups_still/camisasG/High_Tee_Soldiers_Black_Front.webp', '/products/details/camisasG/High_Tee_Soldiers_Black_Detail_Back.webp'],
    imageUrl: '/products/mockups_still/camisasG/High_Tee_Soldiers_Black_Back.webp',
    imageAlt: 'Camisa Streetwear THUG NINE BLACK - Costas'
  },
];
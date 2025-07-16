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
    sizes: ['M'],
    imagesUrlColumn: ['/products/mockups_still/camisasM/High_Tee_Stamp_Black_Front.webp', '/products/details/camisasM/High_Tee_Stamp_Black_Detail_Back.webp', '/products/details/camisasM/High_Tee_Stamp_Black_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/High_Tee_Stamp_Black_Back.webp',
    imageAlt: 'Camisa High Stamp Black preta com estampa verde nas costas e logo da High Company no peito'
  },
  {
    id: 2,
    name: 'High Tee Chaveiro Black',
    sizes: ['M'],
    price: 69.90,
    promotionalPrice: 49.90,
    imagesUrlColumn: ['/products/mockups_still/camisasM/High_Tee_Chaveiro_Black_Front.webp', '/products/details/camisasM/High_Tee_Chaveiro_Black_Detail_Back.webp', '/products/details/camisasM/High_Tee_Chaveiro_Black_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/High_Tee_Chaveiro_Black_Back.webp',
    imageAlt: 'Camisa High Tee Chaveiro Black preta com estampa de chaveiro nas costas e wordmark High no peito'
  },
  {
    id: 3,
    name: 'Chronic Tee São Jorge Black',
    price: 69.90,
    promotionalPrice: 49.90,
    sizes: ['G'],
    imagesUrlColumn: ['/products/mockups_still/camisasG/Chronic_Tee_SãoJorge_Black_Front.webp', '/products/details/camisasG/Chronic_Tee_SãoJorge_Black_Detail_Back.webp', '/products/details/camisasG/Chronic_Tee_SãoJorge_Black_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasG/Chronic_Tee_SãoJorge_Black_Back.webp',
    imageAlt: 'Camisa Chronic Tee São Jorge Black preta com estampa artística de São Jorge nas costas'
  },
  {
    id: 4,
    name: 'Trip Side Dragon Tiger Red',
    sizes: ['M'],
    price: 69.90,
    promotionalPrice: 49.90,
    imagesUrlColumn: ['/products/mockups_still/camisasM/Trip_Tee_Dragon_White_Front.webp', '/products/details/camisasM/Trip_Tee_Dragon_White_Details_Back.webp', '/products/details/camisasM/Trip_Tee_Dragon_White_Details_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/Trip_Tee_Dragon_White_Back.webp',
    imageAlt: 'Camisa Trip Side Dragon Tiger branca com estampa de dragão e tigre nas costas em detalhes vermelhos'
  },
  {
    id: 5,
    name: 'High Tee Origami Black',
    price: 69.90,
    promotionalPrice: 49.90,
    sizes: ['G', 'GG'],
    imagesUrlColumn: ['/products/mockups_still/camisasG/High_Tee_Origami_Black_Front.webp', '/products/details/camisasG/High_Tee_Origami_Black_Detail_Back.webp', '/products/details/camisasG/High_Tee_Origami_Black_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasG/High_Tee_Origami_Black_Back.webp',
    imageAlt: 'Camisa High Tee Origami Black preta com estampa de origami geométrico nas costas'
  },
  {
    id: 6,
    name: 'VLone Spider White',
    price: 69.90,
    promotionalPrice: 49.90,
    sizes: ['M'],
    imagesUrlColumn: ['/products/mockups_still/camisasM/Vlone_Tee_VSpider_White_Front.webp', '/products/details/camisasM/Vlone_Tee_VSpider_White_Detail_Back.webp', '/products/details/camisasM/Vlone_Tee_VSpider_White_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/Vlone_Tee_VSpider_White_Back.webp',
    imageAlt: 'Camisa VLone Spider White branca com estampa de aranha e logo V nas costas'
  },
  {
    id: 7,
    name: 'Blunt Tee Basket Fire',
    price: 69.90,
    promotionalPrice: 49.90,
    sizes: ['M'],
    imagesUrlColumn: ['/products/mockups_still/camisasM/Blunt_Tee_BasketFire_White_Front.webp', '/products/details/camisasM/Blunt_Tee_BasketFire_White_Detail_Back.webp'],
    imageUrl: '/products/mockups_still/camisasM/Blunt_Tee_BasketFire_White_Back.webp',
    imageAlt: 'Camisa Blunt Tee Basket Fire branca com estampa de bola de basquete em chamas nas costas'
  },
  {
    id: 8,
    name: 'Nike Tee Air 90 Black',
    price: 69.90,
    promotionalPrice: 49.90,
    sizes: ['M'],
    imagesUrlColumn: ['/products/mockups_still/camisasM/Nike_Tee_Air90_Black_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/Nike_Tee_Air90_Black_Back.webp',
    imageAlt: 'Camisa Nike Tee Air 90 Black preta com estampa retrô Air 90 nas costas'
  },
  {
    id: 9,
    name: 'High Tee Soldiers Black',
    price: 69.90,
    promotionalPrice: 49.90,
    sizes: ['G'],
    imagesUrlColumn: ['/products/mockups_still/camisasG/High_Tee_Soldiers_Black_Front.webp', '/products/details/camisasG/High_Tee_Soldiers_Black_Detail_Back.webp'],
    imageUrl: '/products/mockups_still/camisasG/High_Tee_Soldiers_Black_Back.webp',
    imageAlt: 'Camisa High Tee Soldiers Black preta com estampa militar de soldados nas costas'
  },
];
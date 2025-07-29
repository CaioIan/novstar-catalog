export interface Product {
  id: number;
  name: string;
  price: number;
  imagesUrlColumn?: string[];
  promotionalPrice?: number;
  imageUrl: string;
  imageAlt: string;
  description?: string;
  colorsAvailable?: string[];
  isOutOfStock?: boolean;
  sizes?: string[];
  category?: 'camisa' | 'short'; // Nova propriedade para tipo de produto
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Short Linho Preto',
    price: 69.90,
    promotionalPrice: 39.99,
    colorsAvailable: ['Preto'],
    sizes: ['M', 'G'],
    category: 'short',
    imagesUrlColumn: ['/products/mockups_still/shorts/linho/Short_Linho_Black_Back.png', '/products/details/shorts/linho/Short_Linho_Black_Details_Bolso.png', '/products/details/shorts/linho/Short_Linho_Black_Details_Back.png', '/products/details/shorts/linho/Short_Linho_Black_Details_Material.png', '/products/details/shorts/linho/Short_Linho_Black_Details_Front.png'],
    imageUrl: '/products/mockups_still/shorts/linho/Short_Linho_Black_Front.png',
    imageAlt: 'Short Linho Preto confortável e versátil para o dia a dia'
  },
  {
    id: 2,
    name: 'Short Linho Off',
    price: 69.90,
    promotionalPrice: 39.99,
    colorsAvailable: ['Off'],
    sizes: ['M'],
    category: 'short',
    imagesUrlColumn: ['/products/mockups_still/shorts/linho/Short_Linho_Off_Back.png', '/products/details/shorts/linho/Short_Linho_Off_Details_Bolso.png', '/products/details/shorts/linho/Short_Linho_Off_Details_Back.png', '/products/details/shorts/linho/Short_Linho_Off_Details_Front.png'],
    imageUrl: '/products/mockups_still/shorts/linho/Short_Linho_Off_Front.png',
    imageAlt: 'Short Linho Off elegante e confortável'
  },
  {
    id: 3,
    name: 'High Stamp Black',
    price: 69.90,
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['M'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasM/High_Tee_Stamp_Black_Front.webp', '/products/details/camisasM/High_Tee_Stamp_Black_Detail_Back.webp', '/products/details/camisasM/High_Tee_Stamp_Black_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/High_Tee_Stamp_Black_Back.webp',
    imageAlt: 'Camisa High Stamp Black preta com estampa verde nas costas e logo da High Company no peito'
  },
  {
    id: 4,
    name: 'High Tee Chaveiro Black',
    colorsAvailable: ['Preto'],
    sizes: ['M'],
    category: 'camisa',
    price: 69.90,
    promotionalPrice: 49.99,
    imagesUrlColumn: ['/products/mockups_still/camisasM/High_Tee_Chaveiro_Black_Front.webp', '/products/details/camisasM/High_Tee_Chaveiro_Black_Detail_Back.webp', '/products/details/camisasM/High_Tee_Chaveiro_Black_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/High_Tee_Chaveiro_Black_Back.webp',
    imageAlt: 'Camisa High Tee Chaveiro Black preta com estampa de chaveiro nas costas e wordmark High no peito'
  },
  {
    id: 5,
    name: 'Chronic Tee São Jorge Black',
    price: 69.90,
    promotionalPrice: 49.99,
    isOutOfStock: true,
    colorsAvailable: ['Preto'], // ← Adicionar
    sizes: ['G'], // ← Adicionar
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasG/Chronic_Tee_SãoJorge_Black_Front.webp', '/products/details/camisasG/Chronic_Tee_SãoJorge_Black_Detail_Back.webp', '/products/details/camisasG/Chronic_Tee_SãoJorge_Black_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasG/Chronic_Tee_SãoJorge_Black_Back.webp',
    imageAlt: 'Camisa Chronic Tee São Jorge Black preta com estampa artística de São Jorge nas costas'
  },
  {
    id: 6,
    name: 'Trip Side Dragon Tiger Red',
    price: 69.90,
    promotionalPrice: 49.99,
    isOutOfStock: true,
    colorsAvailable: ['Branco'], // ← Adicionar
    sizes: ['M'], // ← Adicionar
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasM/Trip_Tee_Dragon_White_Front.webp', '/products/details/camisasM/Trip_Tee_Dragon_White_Details_Back.jpg', '/products/details/camisasM/Trip_Tee_Dragon_White_Details_Front.jpeg'],
    imageUrl: '/products/mockups_still/camisasM/Trip_Tee_Dragon_White_Back.webp',
    imageAlt: 'Camisa Trip Side Dragon Tiger branca com estampa de dragão e tigre nas costas em detalhes vermelhos'
  },
  {
    id: 7,
    name: 'High Tee Origami Black',
    price: 69.90,
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['G', 'GG'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasG/High_Tee_Origami_Black_Front.webp', '/products/details/camisasG/High_Tee_Origami_Black_Detail_Back.webp', '/products/details/camisasG/High_Tee_Origami_Black_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasG/High_Tee_Origami_Black_Back.webp',
    imageAlt: 'Camisa High Tee Origami Black preta com estampa de origami geométrico nas costas'
  },
  {
    id: 8,
    name: 'VLone Spider White',
    price: 69.90,
    promotionalPrice: 49.99,
    isOutOfStock: true,
    colorsAvailable: ['Branco'], // ← Adicionar
    sizes: ['M'], // ← Adicionar
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasM/Vlone_Tee_VSpider_White_Front.webp', '/products/details/camisasM/Vlone_Tee_VSpider_White_Detail_Back.webp', '/products/details/camisasM/Vlone_Tee_VSpider_White_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/Vlone_Tee_VSpider_White_Back.webp',
    imageAlt: 'Camisa VLone Spider White branca com estampa de aranha e logo V nas costas'
  },
  {
    id: 9,
    name: 'Blunt Tee Basket Fire',
    price: 69.90,
    promotionalPrice: 49.99,
    colorsAvailable: ['Off'],
    sizes: ['M'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasM/Blunt_Tee_BasketFire_White_Front.webp', '/products/details/camisasM/Blunt_Tee_BasketFire_White_Detail_Back.webp'],
    imageUrl: '/products/mockups_still/camisasM/Blunt_Tee_BasketFire_White_Back.webp',
    imageAlt: 'Camisa Blunt Tee Basket Fire branca com estampa de bola de basquete em chamas nas costas'
  },
  {
    id: 10,
    name: 'Nike Tee Air 90 Black',
    price: 69.90,
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['M'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasM/Nike_Tee_Air90_Black_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/Nike_Tee_Air90_Black_Back.webp',
    imageAlt: 'Camisa Nike Tee Air 90 Black preta com estampa retrô Air 90 nas costas'
  },
  {
    id: 11,
    name: 'High Tee Soldiers Black',
    price: 69.90,
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['G'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasG/High_Tee_Soldiers_Black_Front.webp', '/products/details/camisasG/High_Tee_Soldiers_Black_Detail_Back.webp'],
    imageUrl: '/products/mockups_still/camisasG/High_Tee_Soldiers_Black_Back.webp',
    imageAlt: 'Camisa High Tee Soldiers Black preta com estampa militar de soldados nas costas'
  },
];

// Função para gerar descrição baseada na categoria
export const generateProductDescription = (product: Product): string => {
  if (product.description) {
    return product.description; // Se já tem descrição personalizada, usa ela
  }

  const { category, name } = product;

  if (category === 'short') {
    return `
      Tecido 90% poliéster e 10% elastano: leve, resistente e com toque suave
      Cadarço ajustável: regula na cintura pra encaixe perfeito
      Costuras reforçadas: mais durabilidade na rotina
    `.trim();
  }

  if (category === 'camisa') {
    return `
      Malha 100% algodão: macia e resistente
      Fio 30.1 penteado: qualidade superior no toque e durabilidade
      Reforço ombro a ombro: acabamento firme
      Modelagem Oversized
    `.trim();
  }

  return `${name} - Produto de alta qualidade com design exclusivo.`;
};

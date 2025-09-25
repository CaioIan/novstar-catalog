export interface Product {
  id: number;
  name: string;
  imagesUrlColumn?: string[];
  promotionalPrice: number;
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
    name: 'Grizzly Tee Basket Bear',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['M'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasM/MOCKUP_GRIZZLY_TEE_BEAR_BLACK_M_FRONT.png'],
    imageUrl: '/products/mockups_still/camisasM/MOCKUP_GRIZZLY_TEE_BEAR_BLACK_M_BACK.png',
    imageAlt: 'Camisa High Stamp Black preta com estampa verde nas costas e logo da High Company no peito'
  },
  {
    id: 2,
    name: 'High Tee Calango Black',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['M'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasM/HIGH_TEE_CALANGO_BLACK_FRONT.png'],
    imageUrl: '/products/mockups_still/camisasM/HIGH_TEE_CALANGO_BLACK_BACK.png',
    imageAlt: 'Camisa High Tee Calango Black preta'
  },
  {
    id: 3,
    name: 'Chronic Tee Balaclava Black',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['M', 'G'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasM/CHRONIC_TEE_BALACLAVA_BLACK_FRONT.png'],
    imageUrl: '/products/mockups_still/camisasM/CHRONIC_TEE_BALACLAVA_BLACK_BACK.png',
    imageAlt: 'Camisa Chronic Tee Balaclava Black preta'
  },
  {
    id: 4,
    name: 'Tripside X Carpa Tee Peixe Black',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['G'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasG/TRIPSIDE_X_CARPA_TEE_PEIXE_BLACK_FRONT.png'],
    imageUrl: '/products/mockups_still/camisasG/TRIPSIDE_X_CARPA_TEE_PEIXE_BLACK_BACK.png',
    imageAlt: 'Camisa Tripside X Carpa Tee Peixe preta'
  },
  {
    id: 5,
    name: 'NikeSB Tee Basic Black',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['M'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasM/NIKESB_TEE_BASIC_BLACK_BACK.png'],
    imageUrl: '/products/mockups_still/camisasM/NIKESB_TEE_BASIC_BLACK_FRONT.png',
    imageAlt: 'Camisa NikeSB Tee Basic Black preta'
  },
  {
    id: 6,
    name: 'Nike Tee Ice Code Black',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['M'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasM/NIKE_TEE_ICECODE_BLACK_FRONT.png'],
    imageUrl: '/products/mockups_still/camisasM/NIKE_TEE_ICECODE_BLACK_BACK.png',
    imageAlt: 'Camisa Nike Tee Ice Code Black preta'
  },
  {
    id: 7,
    name: 'High Tee Stamp Black',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['M'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasM/High_Tee_Stamp_Black_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/High_Tee_Stamp_Black_Back.webp',
    imageAlt: 'Camisa High Tee Stamp Black preta'
  },
  {
    id: 8,
    name: 'Nike Tee Air 90 Black',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['M'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasM/Nike_Tee_Air90_Black_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/Nike_Tee_Air90_Black_Back.webp',
    imageAlt: 'Camisa Nike Tee Air 90 Black preta'
  },
  {
    id: 9,
    name: 'Short Linho Preto',
    promotionalPrice: 39.99,
    colorsAvailable: ['Preto'],
    sizes: ['M', 'G'],
    category: 'short',
    imagesUrlColumn: ['/products/mockups_still/shorts/linho/Short_Linho_Black_Back.png', '/products/details/shorts/linho/Short_Linho_Black_Details_Bolso.png', '/products/details/shorts/linho/Short_Linho_Black_Details_Back.png', '/products/details/shorts/linho/Short_Linho_Black_Details_Material.png', '/products/details/shorts/linho/Short_Linho_Black_Details_Front.png'],
    imageUrl: '/products/mockups_still/shorts/linho/Short_Linho_Black_Front.png',
    imageAlt: 'Short Linho Preto confortável e versátil para o dia a dia'
  },
  {
    id: 10,
    name: 'Short Linho Off',
    promotionalPrice: 39.99,
    colorsAvailable: ['Off'],
    sizes: ['M', 'G'],
    category: 'short',
    imagesUrlColumn: ['/products/mockups_still/shorts/linho/Short_Linho_Off_Back.png', '/products/details/shorts/linho/Short_Linho_Off_Details_Bolso.png', '/products/details/shorts/linho/Short_Linho_Off_Details_Back.png', '/products/details/shorts/linho/Short_Linho_Off_Details_Front.png'],
    imageUrl: '/products/mockups_still/shorts/linho/Short_Linho_Off_Front.png',
    imageAlt: 'Short Linho Off elegante e confortável'
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

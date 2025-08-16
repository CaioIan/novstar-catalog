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
    name: 'Stamp Black Streetwear Tee',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['M'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasM/High_Tee_Stamp_Black_Front.webp', '/products/details/camisasM/High_Tee_Stamp_Black_Detail_Back.webp', '/products/details/camisasM/High_Tee_Stamp_Black_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/High_Tee_Stamp_Black_Back.webp',
    imageAlt: 'Camisa High Stamp Black preta com estampa verde nas costas e logo da High Company no peito'
  },
  {
    id: 2,
    name: 'Air 90 Black Streetwear Tee',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['M'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasM/Nike_Tee_Air90_Black_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/Nike_Tee_Air90_Black_Back.webp',
    imageAlt: 'Camisa Nike Tee Air 90 Black preta com estampa retrô Air 90 nas costas'
  },
  {
    id: 3,
    name: 'Angel Black Streetwear Tee',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['M'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasM/Trip_Tee_AkAngel_Black_Front.webp', '/products/details/camisasM/Trip_Tee_AkAngel_Black_Detail_Back.webp', '/products/details/camisasM/Trip_Tee_AkAngel_Black_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/Trip_Tee_AkAngel_Black_Back.webp',
    imageAlt: 'Camisa Trip Side Angel, um anjo segurando uma ak 47'
  },
  {
    id: 4,
    name: 'Origami Black Streetwear Tee',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['GG'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasG/High_Tee_Origami_Black_Front.webp', '/products/details/camisasG/High_Tee_Origami_Black_Detail_Back.webp', '/products/details/camisasG/High_Tee_Origami_Black_Detail_Front.webp'],
    imageUrl: '/products/mockups_still/camisasG/High_Tee_Origami_Black_Back.webp',
    imageAlt: 'Camisa High Tee Origami Black preta com estampa de origami geométrico nas costas'
  },
  {
    id: 5,
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
    id: 6,
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

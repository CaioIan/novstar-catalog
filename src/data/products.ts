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
    id: 1, // ID Corrigido
    name: 'High Tee Blue Dragon Black',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['M'],
    category: 'camisa',
    imageUrl: '/drops/drop-street-3-dlx/CAMISAS/STILL/HIGH_TEE_BLUE_DRAGON_BLACK_M_COSTAS.png',
    imagesUrlColumn: [
      '/drops/drop-street-3-dlx/CAMISAS/STILL/HIGH_TEE_BLUE_DRAGON_BLACK_M_FRENTE.png',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/HIGH_TEE_BLUE_DRAGON_BLACK_DETAILS_01.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/HIGH_TEE_BLUE_DRAGON_BLACK_DETAILS_02.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/HIGH_TEE_BLUE_DRAGON_BLACK_DETAILS_03.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/HIGH_TEE_BLUE_DRAGON_BLACK_DETAILS_04.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/HIGH_TEE_BLUE_DRAGON_BLACK_DETAILS_05.jpg'
    ],
    imageAlt: 'Camisa High Tee Blue Dragon Black'
  },
  {
    id: 2, // ID Corrigido
    name: 'Sevenfold Tee Racionais Lua Black',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['M'],
    category: 'camisa',
    imageUrl: '/drops/drop-street-3-dlx/CAMISAS/STILL/SEVENFOLD_TEE_RACIONAIS_LUA_BLACK_M_COSTAS.png',
    imagesUrlColumn: [
      '/drops/drop-street-3-dlx/CAMISAS/STILL/SEVENFOLD_TEE_RACIONAIS_LUA_BLACK_M_FRENTE.png',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/SEVENFOLD_TEE_RACIONAIS_LUA_BLACK_DETAILS_01.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/SEVENFOLD_TEE_RACIONAIS_LUA_BLACK_DETAILS_02.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/SEVENFOLD_TEE_RACIONAIS_LUA_BLACK_DETAILS_03.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/SEVENFOLD_TEE_RACIONAIS_LUA_BLACK_DETAILS_04.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/SEVENFOLD_TEE_RACIONAIS_LUA_BLACK_DETAILS_05.jpg'
    ],
    imageAlt: 'Camisa Sevenfold Tee Racionais Lua Black'
  },
  {
    id: 3, // ID Corrigido
    name: 'Sevenfold Tee São Jorge Black',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['M'],
    category: 'camisa',
    imageUrl: '/drops/drop-street-3-dlx/CAMISAS/STILL/SEVENFOLD_TEE_SAOJORGE_BLACK_M_COSTAS.png',
    imagesUrlColumn: [
      '/drops/drop-street-3-dlx/CAMISAS/STILL/SEVENFOLD_TEE_SAOJORGE_BLACK_M_FRENTE.png',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/SEVENFOLD_TEE_SAOJORGE_BLACK_DETAILS_01.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/SEVENFOLD_TEE_SAOJORGE_BLACK_DETAILS_02.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/SEVENFOLD_TEE_SAOJORGE_BLACK_DETAILS_03.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/SEVENFOLD_TEE_SAOJORGE_BLACK_DETAILS_04.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/SEVENFOLD_TEE_SAOJORGE_BLACK_DETAILS_05.jpg'
    ],
    imageAlt: 'Camisa Sevenfold Tee Sao Jorge Black'
  },
  {
    id: 4, // ID Corrigido
    name: 'Thugnine Tee Powerfull Horse Black',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['G'],
    category: 'camisa',
    imageUrl: '/drops/drop-street-3-dlx/CAMISAS/STILL/THUGNINE_TEE_POWERFULL_HORSE_BLACK_G_COSTAS.png',
    imagesUrlColumn: [
      '/drops/drop-street-3-dlx/CAMISAS/STILL/THUGNINE_TEE_POWERFULL_HORSE_BLACK_G_FRENTE.png',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/THUGNINE_TEE_POWERFULL_HORSE_BLACK_DETAILS_01.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/THUGNINE_TEE_POWERFULL_HORSE_BLACK_DETAILS_02.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/THUGNINE_TEE_POWERFULL_HORSE_BLACK_DETAILS_03.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/THUGNINE_TEE_POWERFULL_HORSE_BLACK_DETAILS_04.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/THUGNINE_TEE_POWERFULL_HORSE_BLACK_DETAILS_05.jpg'
    ],
    imageAlt: 'Camisa Thugnine Tee Powerfull Horse Black'
  },
  // --- RESTANTE DOS PRODUTOS ---
  {
    id: 5, // ID Corrigido
    name: 'North Face Tee Basic Off',
    promotionalPrice: 49.99,
    colorsAvailable: ['Off'],
    sizes: ['G'],
    category: 'camisa',
    imageUrl: '/drops/drop-street-3-dlx/CAMISAS/STILL/NORTH_FACE_BASIC_OFF_G_FRENTE.png',
    imagesUrlColumn: [
      '/drops/drop-street-3-dlx/CAMISAS/STILL/NORTH_FACE_BASIC_OFF_G_COSTAS.png',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/NORTH_FACE_BASIC_OFF_DETAILS_01.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/NORTH_FACE_BASIC_OFF_DETAILS_02.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/NORTH_FACE_BASIC_OFF_DETAILS_03.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/NORTH_FACE_BASIC_OFF_DETAILS_04.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/NORTH_FACE_BASIC_OFF_DETAILS_05.jpg'
    ],
    imageAlt: 'Camisa North Face Basic Off'
  },
  // { id: 6, name: 'Sevenfold Tee Sao Jorge White' } <-- REMOVIDO
  // { id: 7, name: 'Thugnine Tee Powerfull Horse White' } <-- REMOVIDO
  {
    id: 6, // ID Corrigido
    name: 'Thugnine Tee Youth Club Off',
    promotionalPrice: 49.99,
    colorsAvailable: ['Off'],
    sizes: ['M'],
    category: 'camisa',
    imageUrl: '/drops/drop-street-3-dlx/CAMISAS/STILL/THUGNINE_TEE_YOUTH_CLUB_OFF_M_COSTAS.png',
    imagesUrlColumn: [
      '/drops/drop-street-3-dlx/CAMISAS/STILL/THUGNINE_TEE_YOUTH_CLUB_OFF_M_FRENTE.png',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/THUGNINE_TEE_YOUTH_CLUB_OFF_DETAILS_01.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/THUGNINE_TEE_YOUTH_CLUB_OFF_DETAILS_02.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/THUGNINE_TEE_YOUTH_CLUB_OFF_DETAILS_03.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/THUGNINE_TEE_YOUTH_CLUB_OFF_DETAILS_04.jpg',
      '/drops/drop-street-3-dlx/CAMISAS/DETAILS/THUGNINE_TEE_YOUTH_CLUB_OFF_DETAILS_05.jpg'
    ],
    imageAlt: 'Camisa Thugnine Tee Youth Club Off'
  },
  // --- PRODUTOS ANTIGOS ---
  {
    id: 7, // ID Corrigido
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
    id: 8, // ID Corrigido
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
    id: 9, // ID Corrigido
    name: 'Chronic Tee Balaclava Black',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['G'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasM/CHRONIC_TEE_BALACLAVA_BLACK_FRONT.png'],
    imageUrl: '/products/mockups_still/camisasM/CHRONIC_TEE_BALACLAVA_BLACK_BACK.png',
    imageAlt: 'Camisa Chronic Tee Balaclava Black preta'
  },
  {
    id: 10, // ID Corrigido
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
    id: 11, // ID Corrigido
    name: 'Nike Tee Air 90 Black',
    promotionalPrice: 49.99,
    colorsAvailable: ['Preto'],
    sizes: ['M'],
    category: 'camisa',
    imagesUrlColumn: ['/products/mockups_still/camisasM/Nike_Tee_Air90_Black_Front.webp'],
    imageUrl: '/products/mockups_still/camisasM/Nike_Tee_Air9Examples_Black_Back.webp',
    imageAlt: 'Camisa Nike Tee Air 90 Black preta'
  },
  {
    id: 12, // ID Corrigido
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
    id: 13, // ID Corrigido
    name: 'Short Linho Off',
    promotionalPrice: 39.99,
    colorsAvailable: ['Off'],
    sizes: ['M', 'G'],
    category: 'short',
    imagesUrlColumn: ['/products/mockups_still/shorts/linho/Short_Linho_Off_Back.png', '/products/details/shorts/linho/Short_Linho_Off_Details_Bolso.png', '/products/details/shorts/linho/Short_Linho_Off_Details_Back.png', '/products/details/shorts/linho/Short_Linho_Off_Details_Front.png'],
    imageUrl: '/products/mockups_still/shorts/linho/Short_Linho_Off_Front.png',
    imageAlt: 'Short Linho Off elegante e confortável'
  }
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

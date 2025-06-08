/**
 * Formata um valor numérico para o formato de moeda brasileira (BRL)
 * @param value - Valor a ser formatado
 * @returns String formatada no padrão de moeda brasileira
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

export function priceWithCurrency(price: number, currency: string) {
  return `${price} ${currency}`;
}

export function priceWithDiscount(price: number, discount: number) {
  return price * (1 - discount / 100);
}

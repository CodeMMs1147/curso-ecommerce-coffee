export function formatPrice(price: number){
  const priceFormatted = new Intl.NumberFormat('es-CO', {
    style: "currency",
    currency: 'COP'
  })

  const finalPrice = priceFormatted.format(price)

  return finalPrice
}

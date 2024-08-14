"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import CartItem from "./components/cart-item"

export default function Page() {
  const {items, removeAll} = useCart()
  const prices = items.map((product => product.attributes.price))
  const totalPrice = prices.reduce((total, price) => total + price, 0)

  return (
    <div className="max-6-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-3 text-3xl font-bold">Carrito de compras</h1>
      <h2 className="mb-5 text-2xl font-mono">Tus articulos preferidos:</h2>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <div>
          {items.length === 0 && (
            <p>No hay productos en el carrito</p>
          )}
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} product={item}/>
            ))}
          </ul>
          <div className="max-w-xl">
            <div className="p-6 rounded-lg bg-slate-100">
              <p className="mb-3 text-lg font-semibold">Resumen de pedido:</p>
              <Separator/>
              <div className="flex justify-between gap-5 my-4">
                <p>Total de la compra:</p>
                <p>{formatPrice(totalPrice)}</p>
              </div>
              <div className="flex items-center justify-center w-full mt-3">
                <Button className="w-full" onClick={() => console.log("Buy")}>Comprar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
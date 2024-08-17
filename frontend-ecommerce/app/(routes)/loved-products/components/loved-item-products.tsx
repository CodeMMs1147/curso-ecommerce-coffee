/* eslint-disable @next/next/no-img-element */
import ProductCloseButton from "@/components/shared/product-close-button";
import ProductImageMiniature from "@/components/shared/product-image-miniature";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovedProduct } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";

interface lovedProductProps {
  product: ProductType
}

const LovedItemProduct = (props: lovedProductProps) => {
  const {product} = props
  const {removeLovedItem} = useLovedProduct()
  const {addItem} = useCart()

  const addToCheckout = () => {
    addItem(product)
    removeLovedItem(product.id)
  }

  return (  
    <li className="flex py-6 border-b">

      <ProductImageMiniature slug={product.attributes.slug} url={product.attributes.images.data[0].attributes.url}/>

      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{product.attributes.productName}</h2>
          <h2 className="font-bold">{formatPrice(product.attributes.price)}</h2>
          
          <ProductTasteOrigin taste={product.attributes.taste} origin={product.attributes.origin}/>

          <Button className="tm-5 rounded-full" onClick={addToCheckout}>Añadir al carrito</Button>
        </div>

        <ProductCloseButton id={product.id} onRemove={removeLovedItem}/>
      </div>
    </li>
  );
}

export default LovedItemProduct;
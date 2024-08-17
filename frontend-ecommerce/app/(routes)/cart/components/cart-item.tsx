/* eslint-disable @next/next/no-img-element */
import ProductCloseButton from "@/components/shared/product-close-button";
import ProductImageMiniature from "@/components/shared/product-image-miniature";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";

interface CartItemProps {
  product: ProductType
}

const CartItem = (props: CartItemProps) => {
  const {product} = props
  const {removeItem} = useCart()

  return ( 
    <li className="flex py-6 border-b">

      <ProductImageMiniature slug={product.attributes.slug} url={product.attributes.images.data[0].attributes.url}/>

      <div className="flex justify-between flex-1 px-6">
        <p>{product.attributes.productName}</p>
        <p className="font-bold">{formatPrice(product.attributes.price)}</p>

        <ProductTasteOrigin taste={product.attributes.taste} origin={product.attributes.origin} />
      
        <ProductCloseButton id={product.id} onRemove={removeItem}/>

      </div>
    </li>
  );
}

export default CartItem;
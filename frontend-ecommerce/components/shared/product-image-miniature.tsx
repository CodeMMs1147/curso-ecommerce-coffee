/* eslint-disable @next/next/no-img-element */
"use client"
import { useRouter } from "next/navigation";

interface ProductImageMiniatureProps {
  slug: string,
  url: string
}

const ProductImageMiniature = (props: ProductImageMiniatureProps) => {
  const router = useRouter()
  const {slug, url} = props

  return (  
    <div onClick={() => router.push(`/product/${slug}`)} className="cursor-pointer">
      <img 
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`} 
        alt="Product" 
        className="w-24 h-24 overflow-hidden rounded-md sm:w-auto"
      />
    </div>
  );
}

export default ProductImageMiniature;
"use client"

import { useGetProductBySlug } from "@/api/getProductBySlug"
import { useParams } from "next/navigation"
import SkeletonProduct from "./components/sketon-product"
import CarouselProduct from "./components/carousel-product"
import { ResponseType } from "@/types/response"
import InfoProduct from "./components/info-product"

export default function Page() {
  const params = useParams()
  const {productSlug} = params

  const {result, loading}: ResponseType  = useGetProductBySlug(productSlug)
  // console.log(params)

  if(result === null){
    return <SkeletonProduct />
  }

  return (
    <div className="mas-w-6xl py-4 mx-auto sm:py-32 px-24">
      <div className="grid sm:grid-cols-2">

        <div>
          <CarouselProduct images={result[0].attributes.images}/>
        </div>

        <div className="sm:px-12">
          <InfoProduct product={result[0]}/>
        </div>

      </div>
    </div>
  )
}
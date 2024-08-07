"use client"

import { useGetCategoryProduct } from "@/api/getCategoryProducts"
import { Separator } from "@/components/ui/separator"
import { ResponseType } from "@/types/response"
import { useParams, useRouter } from "next/navigation"
import FiltersControlCategory from "./components/filters-controls-category"
import SkeletonSchema from "@/components/skeletonSchema"
import ProductCard from "./components/product-card"
import { ProductType } from "@/types/product"
import { useState } from "react"

export default function Page() {

  const params = useParams()
  const { categorySlug } = params
  // console.log('tu cate: ',categorySlug)
  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug)
  const router = useRouter()

  const [filterOrigin, setfilterOrigin] = useState('')
  const [filterTaste, setfilterTaste] = useState('')

  const filteredProducts = result != null && !loading && (
    result.filter((product: ProductType) =>
    (filterTaste === '' || product.attributes.taste === filterTaste) &&
    (filterOrigin === '' || product.attributes.origin === filterOrigin)
    )
  )

  // console.log('estos son los productos filtrados: ', filteredProducts)

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result != null &&  !loading && (
        <h1 className="text-3xl font-medium">Cafe {result[0].attributes.category.data.attributes.categoryName}</h1>
      )}
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlCategory setFilterOrigin={setfilterOrigin} setFilterTaste={setfilterTaste}/>

        <div className="grid gap-5 mt-8 sm:grid-cols-3 md:gap-10">
          {loading && (
            <SkeletonSchema grid={3} />
          )}
          {filteredProducts != null && !loading && (
            filteredProducts.map((product: ProductType) => (
              <ProductCard key={product.id } product={product}/>
            ))
          )}
          { filteredProducts != null && !loading && filteredProducts.length === 0 && (
            <p>No hay productos con este filtro</p>
          )}
        </div>

      </div>

      
    </div>
  )

}
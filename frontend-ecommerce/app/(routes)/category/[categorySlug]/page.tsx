"use client"

import { useGetCategoryProduct } from "@/api/getCategoryProducts"
import { Separator } from "@/components/ui/separator"
import { ResponseType } from "@/types/response"
import { useParams, useRouter } from "next/navigation"
import FiltersControlCategory from "./components/filters-controls-category"

export default function Page() {

  const params = useParams()
  const { categorySlug } = params
  console.log('tu cate: ',categorySlug)
  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug)

  const router = useRouter()

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result ==! null &&  !loading && (
        <h1 className="text-3xl font-medium">Cafe {result[0].attributes.category.data.attributes.categoryName}</h1>
      )}
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlCategory />
      </div>
    </div>
  )

}
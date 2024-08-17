import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";
import { ProductType } from "@/types/product";
import {toast} from "@/components/ui/use-toast"

interface UseLovedProductsType {
  lovedItems: ProductType[],
  addLoveItem: (data: ProductType) => void
  removeLovedItem: (id: number) => void
}

export const useLovedProduct = create(persist<UseLovedProductsType>((set, get) => ({
  lovedItems: [],
  addLoveItem: (data: ProductType) => {
    const currentLovedItem = get().lovedItems;
    const existingItem = currentLovedItem.find((item) => item.id === data.id)

    if(existingItem){
      return toast({
        title: "El producto ya existe en la lista",
        variant: "destructive"
      })
    }

    set({
      lovedItems: [...get().lovedItems, data]
    })
    toast({
      title: "Producto añadido a la lista"
    })
  },
  removeLovedItem: (id: number) => {
    set({lovedItems: [...get().lovedItems.filter((item) => item.id !== id)]})
    toast({
      title: "producto eliminado de la lista"
    })
  }
  
}), {
  name: "loved-product-storage",
  storage: createJSONStorage(() => localStorage)
}))
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface ProductCloseButtonProps {
  id: number,
  onRemove: (id: number) => void
}

const ProductCloseButton = (props: ProductCloseButtonProps) => {
  const {id, onRemove} = props

  return (  
    <div>
      <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-hover:scale-100 transition")}>
        <X size={20} onClick={() => onRemove(id)}/>
      </button>
    </div>
  );
}

export default ProductCloseButton;
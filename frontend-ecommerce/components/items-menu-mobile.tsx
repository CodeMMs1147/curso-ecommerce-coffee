import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import MenuList from "./menu-list";
import { Menu } from "lucide-react";
import Link from "next/link";

const ItemsMenuMobile = () => {
  return ( 
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <Link href="/categories/cafe-grano" className="block">Café en grano</Link>
        <Link href="/categories/cafe-molido" className="block">Café molido</Link>
        <Link href="/categories/cafe-capsulas" className="block">Café en cápsulas</Link>
      </PopoverContent>
    </Popover>
  );
}

export default ItemsMenuMobile;
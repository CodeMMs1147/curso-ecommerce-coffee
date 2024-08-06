import FilterOrigin from "./filter-origin";
import FilterTaste from "./filter-taste";

type FilterControlsCategoryProps = {
  setFilterOrigin: (origin: string) => void
  setFilterTaste: (taste: string) => void
}

const FiltersControlCategory = (props: FilterControlsCategoryProps) => {
  const { setFilterOrigin, setFilterTaste } = props

  return ( 
    <div className="sm:w-[350px] sm:mt-5 p-6">
      <FilterOrigin setFilterOrigin={setFilterOrigin}/>
      <FilterTaste setFilterTaste={setFilterTaste}/>
    </div>    
  );
}

export default FiltersControlCategory;
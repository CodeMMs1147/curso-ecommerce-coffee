import FilterOrigin from "./filter-origin";

type FilterControlsCategoryProps = {
  setFilterOrigin: (origin: string) => void
}

const FiltersControlCategory = (props: FilterControlsCategoryProps) => {
  const { setFilterOrigin } = props

  return ( 
    <div className="sm:w-[350px] sm:mt-5 p-6">
      <FilterOrigin setFilterOrigin={setFilterOrigin}/>
    </div>    
  );
}



export default FiltersControlCategory;
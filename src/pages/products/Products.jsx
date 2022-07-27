import { ProductGridArea } from "./ProductGridArea";
import { FilterList } from "./FilterList";
import { useState } from "react";

const Products = () => {
  const [showFilters, setShowFilters] = useState(false);
    return (
      <>
        <h1 className="text-center">Products</h1>
        <div className="grid-container">
        <FilterList showFilters={showFilters} setShowFilters={setShowFilters}/>
        <ProductGridArea showFilters={showFilters} setShowFilters={setShowFilters}/>
        </div>
      </>
    );
  };
  
  export { Products };
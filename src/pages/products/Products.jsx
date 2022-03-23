import { Header, Footer } from "../../components";
import { ProductGridArea } from "./ProductGridArea";
import { FilterList } from "./FilterList";
import { useState } from "react";

const Products = () => {
  const [filtersStyle, setFiltersStyle] = useState("filters");
    return (
      <>
        <Header/>
        <h1 className="text-center">Products</h1>
        <div className="grid-container">
        <FilterList filtersStyle={filtersStyle} setFiltersStyle={setFiltersStyle}/>
        <ProductGridArea setFiltersStyle={setFiltersStyle} />
        </div>
        <Footer/>
        </>
    );
  };
  
  export { Products };
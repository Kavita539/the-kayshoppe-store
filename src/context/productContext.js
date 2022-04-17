import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import {minMaxReducer} from "../utils";

const productListingContext = createContext();
const useProducts = () => useContext(productListingContext);


const ProductListProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");

    const priceRange = products.reduce(minMaxReducer, {
      min: products[0]?.price,
      max: products[0]?.price,
    });
    
    useEffect(() => {
        (async () => {
          try {
            setError("");
            setLoader(false);  
            const res = await axios.get("/api/products");
            if (res.status === 200) {
              setProducts(res.data.products);
            }
          } catch (err) {
             setError(err.message);
             setLoader(true);
          }
        })();
      }, []);

      return(
          <productListingContext.Provider value={{products, priceRange, loader, error}}>
              {children}
          </productListingContext.Provider>
      );
    
};

export {ProductListProvider, useProducts};
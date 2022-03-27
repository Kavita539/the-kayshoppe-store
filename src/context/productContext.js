import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const productListingContext = createContext();
const useProducts = () => useContext(productListingContext);

const ProductListProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");
    
    useEffect(() => {
        (async () => {
          try {
            setError("");
            setLoader(true);  
            const res = await axios.get("/api/products");
            if (res.status === 200) {
              setProducts(res.data.products);
            }
          } catch (err) {
             setError(err.message);
             setLoader(false);
          }
        })();
      }, []);

      return(
          <productListingContext.Provider value={{products, loader,error}}>
              {children}
          </productListingContext.Provider>
      );
    
};

export {ProductListProvider, useProducts};
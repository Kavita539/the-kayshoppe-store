import { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFilter } from "./filterContext";
import { useProducts } from "./productContext";
import axios from "axios";

const categoryContext = createContext();
const useCategory = () => useContext(categoryContext);

const CategoryProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { dispatch: filterDispatch } = useFilter();
    const { priceRange } = useProducts();
    
    useEffect(() => {
        (async () => {
          try {
            setError("");
            setLoader(false);  
            const res = await axios.get("/api/categories");
            if (res.status === 200) {
              setCategories(res.data.categories);
            }
          } catch (err) {
             setError(err.message);
             setLoader(true);
          }
        })();
      }, []);

      const navigateToCategory = category => {
        filterDispatch({ type: "CLEAR", payload: { min: priceRange.min, max: priceRange.max } });
        filterDispatch({ type: "FILTER_CATEGORY", payload: category });
        navigate("/products");
      };

      return(
          <categoryContext.Provider value={{categories, loader, error, navigateToCategory}}>
              {children}
          </categoryContext.Provider>
      );
    
};

export {CategoryProvider, useCategory};
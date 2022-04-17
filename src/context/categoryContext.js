import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const categoryContext = createContext();
const useCategory = () => useContext(categoryContext);

const CategoryProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");
    
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

      return(
          <categoryContext.Provider value={{categories, loader,error}}>
              {children}
          </categoryContext.Provider>
      );
    
};

export {CategoryProvider, useCategory};
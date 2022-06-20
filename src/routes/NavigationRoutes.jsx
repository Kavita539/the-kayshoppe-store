import {Routes, Route} from "react-router-dom"
import {Home, Products, Cart, Wishlist, Signin, Signup} from "../pages"
import { PrivateRoutes } from "./PrivateRoutes";

const NavigationRoutes = () => {
  return(
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/cart" element={<PrivateRoutes element={Cart} />}/>
        <Route path="/wishlist" element={<PrivateRoutes element={Wishlist} />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
  );
}

export {NavigationRoutes};


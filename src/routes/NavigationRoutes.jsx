import {Routes, Route, Navigate} from "react-router-dom"
import {Home, Products, Cart, Wishlist, Signin, Signup, Profile, SingleProduct, UserAddress} from "../pages"
import { PrivateRoutes } from "./PrivateRoutes";
import { useAuth } from "../context";

const NavigationRoutes = () => {
  const {
    state: { token },
  } = useAuth();

  return(
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/cart" element={<PrivateRoutes element={Cart} />}/>
        <Route path="/wishlist" element={<PrivateRoutes element={Wishlist} />}/>
        <Route path="/user/profile" element={<PrivateRoutes element={Profile} />} />
        <Route path="/user/address" element={<PrivateRoutes element={UserAddress} />} />
        <Route
        path="/products/details/:productId"
        element={<PrivateRoutes element={SingleProduct} />}
       />
        {!token ? (
        <>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </>
      ) : (
        <>
          <Route path="/signin" element={<Navigate replace to="/" />} />
          <Route path="/signup" element={<Navigate replace to="/" />} />
        </>
      )}

      <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
  );
}

export {NavigationRoutes};


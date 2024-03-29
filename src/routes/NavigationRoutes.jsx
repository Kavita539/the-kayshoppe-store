import {Routes, Route, Navigate} from "react-router-dom"
import {Home, Products, Cart, Wishlist, Signin, Signup, Profile, SingleProduct, UserAddress, UserOrders, Checkout} from "../pages"
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
        <Route path="/user/orders" element={<PrivateRoutes element={UserOrders} />} />
        <Route path="/products/details/:productId" element={<SingleProduct />} />
       <Route path="/checkout" element={<Checkout />} />
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


import {Routes, Route} from "react-router-dom"
import { Header } from "./components";
import {Home, Products, Cart, Wishlist, Signin, Signup} from "./pages"

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
  );
}

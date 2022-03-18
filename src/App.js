import {Routes, Route} from "react-router-dom"
import {Home, Products, Cart, Wishlist} from "./pages"

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
      </Routes>
  );
}

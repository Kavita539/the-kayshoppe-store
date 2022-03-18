function App() {

  import axios from "axios";
  import { Route, Routes } from "react-router-dom";
  import { Cart, Home, Products, Wishlist } from "./pages";
  import { Footer, Header } from "./components";

  const App = () =>{
    return(
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    );
  };
};

export default App;
export { App };

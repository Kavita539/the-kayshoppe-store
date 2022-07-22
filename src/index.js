import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {ProductListProvider, CategoryProvider, FilterProvider, AuthProvider, CartProvider, WishlistProvider} from "./context";



// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
      <WishlistProvider>
      <CartProvider>
      <ProductListProvider>
      <FilterProvider>
      <CategoryProvider>
       <App />
       </CategoryProvider>
      </FilterProvider>
      </ProductListProvider>
      </CartProvider>
      </WishlistProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

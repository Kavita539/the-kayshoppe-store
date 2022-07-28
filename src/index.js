import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {ProductListProvider, CategoryProvider, FilterProvider, AuthProvider, CartProvider, WishlistProvider, AddressProvider, OrderProvider} from "./context";



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
      <AddressProvider>
      <OrderProvider>
      <App />
      </OrderProvider>
      </AddressProvider>
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

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {ProductListProvider, CategoryProvider, FilterProvider, AuthProvider} from "./context";



// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
      <ProductListProvider>
      <CategoryProvider>
      <FilterProvider>
       <App />
      </FilterProvider>
      </CategoryProvider>
      </ProductListProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

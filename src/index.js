import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {ProductListProvider} from "./context/productContext";
import {CategoryProvider} from "./context/categoryContext";
import {FilterProvider} from "./context/filterContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductListProvider>
      <CategoryProvider>
      <FilterProvider>
       <App />
      </FilterProvider>
      </CategoryProvider>
      </ProductListProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

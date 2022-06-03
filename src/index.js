import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {ProductListProvider, CategoryProvider, FilterProvider} from "./context";



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

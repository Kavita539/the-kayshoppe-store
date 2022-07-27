import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavHeaderAside } from "../header/NavHeaderAside";
import { useAuth } from "../../context";
import { Toaster } from "react-hot-toast";
import "./base.css";

const Base = ({ children }) => {
const { pathname } = useLocation();
const {
  state: { token },
} = useAuth();

const [navAside, setNavAside] = useState(false);

useEffect(() => {
  window.scrollTo(0, 0);
  setNavAside(false);
}, [pathname, token]);

  return (
    <>
      <Toaster />
      <Header navAside={navAside} setNavAside={setNavAside} />
      <NavHeaderAside navAside={navAside} setNavAside={setNavAside} />
      <div className="children-container">{children}</div>
      <Footer />
    </>
  );
};

export { Base };
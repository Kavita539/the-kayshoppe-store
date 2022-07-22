import { Header, Footer, CartCard } from "../../components";
import "./cart.css"
import { BillDistribution } from "./Billdustribution";
import { useCart } from "../../context";

const Cart = () => {
  const {
    state: { cartItems },
  } = useCart();



    return (
      <>
      <Header/>
      <div className="cart-container">
       <h2 className="text-center">My Cart({cartItems?.length})</h2>

       <div className="cart">
        <div className="cart-cards">
        {cartItems?.map(product => (
            <CartCard key={product._id} product={product} />
          ))}
        </div>
        {cartItems.length > 0 && <BillDistribution />}
       </div>   
        </div>
        <Footer/>
      </>
    );
};
  
  export { Cart };
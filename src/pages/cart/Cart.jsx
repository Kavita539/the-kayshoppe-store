import { Header, Footer, CartCard } from "../../components";
import { v4 as uuid } from "uuid";
import "./cart.css"
import { BillDistribution } from "./Billdustribution";

const Cart = () => {
  const cartItems = [
    {
    _id: uuid(),
    title: "Blue Mesh Shoes",
    brandDescription: "Nike",
    price: "3000",
    discountedPrice: "2799",
    image: "/assets/nike-shoes.jpg",
    quantity: 2,
    categoryName: "Shoes",
    },
    {
    _id: uuid(),
    title: "Yoga Mat",
    brandDescription: "Stay Strong",
    price: "1200",
    discountedPrice: "900",
    image: "/assets/equipments yoga mat.jpg",
    quantity: 3,
    categoryName: "Equipments",
    },
  ];

    return (
      <>
      <Header/>
      <div className="cart-container">
       <h2 className="text-center">My Cart</h2>

       <div className="cart">
        <div className="cart-cards">
        {cartItems.map(product => (
            <CartCard key={product._id} product={product} />
          ))}
        </div>
        <BillDistribution/>
       </div>   
        </div>
        <Footer/>
      </>
    );
};
  
  export { Cart };
import { Header, Footer, WishlistCard } from "../../components";
import { v4 as uuid } from "uuid";
import "./wishlist.css";

const Wishlist = () => {
  const wishlist = [
    {
      _id: uuid(),
      title: "Blue Mesh Shoes",
      brandDescription: "Nike",
      price: "3000",
      discountedPrice: "2799",
      image: "/assets/nike-shoes.jpg",
      rating: "4.5",
      categoryName: "Shoes",
    },
    {
      _id: uuid(),
      title: "Vintage Douche Bag",
      brandDescription: "Reebok",
      price: "1500",  
      discountedPrice: "1100",
      image: "/assets/accessories douche bag.jpg",
      rating: "3.5",
      categoryName: "Accessories",
    },
    {
      _id: uuid(),
      title: "5KG Dumbbells",
      brandDescription: "Stay strong",
      price: "2000",
      discountedPrice: "1800",
      image: "/assets/equipments dumbbells.jpg",
      rating: "4",
      categoryName: "Equipments",
    },
  ]
    return (
      <>
      <Header/>
        <div class="wishlist-container">
            <h2 class="text-center">My Wishlist</h2>
            <div class="wishlist-product-container">
              {wishlist.map(product => (
                <WishlistCard key={product._id} product={product} />
              ))}    
            </div>
        </div>
        <Footer/>
      </>
    );
  };
  
  export { Wishlist };
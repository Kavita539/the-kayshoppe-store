import { Header, Footer, WishlistCard } from "../../components";
import { v4 as uuid } from "uuid";
import { useWishlist } from "../../context";
import "./wishlist.css";

const Wishlist = () => {
const {
  state: { wishedItems },
} = useWishlist();

    return (
      <>
      <Header/>
      <div class="children-container">
        <div class="wishlist-container">
            <h2 class="text-center">My Wishlist({wishedItems.length})</h2>
            <div class="wishlist-product-container">
              {wishedItems.map(product => (
                <WishlistCard key={product._id} product={product} />
              ))}    
            </div>
        </div>
      </div>
        <Footer/>
      </>
    );
  };
  
  export { Wishlist };
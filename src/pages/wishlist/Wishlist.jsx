import { WishlistCard } from "../../components";
import { useWishlist } from "../../context";
import "./wishlist.css";

const Wishlist = () => {
const {
  state: { wishedItems },
} = useWishlist();

    return (
      <>
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
      </>
    );
  };
  
  export { Wishlist };
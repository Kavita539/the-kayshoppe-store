import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Men T-shirt",
    brandDescription: "United Colors",
    detailedDescription: "Men slim fit T-shirt perfect for styling in summer, during gym time.",
    price: 1500,
    discountedPrice: 850,
    image: "/assets/athleisure-fit tshirt.jpg",
    rating: 3,
    category: "Athleisure",
    isFeatured: false,
  },
  {
    _id: uuid(),
    title: "Gym Bag",
    brandDescription: "Reebok",
    detailedDescription: "Nice quality gym bag that can carry all your necessary equipments.",
    price: 1500,  
    discountedPrice: 1100,
    image: "/assets/accessories douche bag.jpg",
    rating: 3.5,
    category: "Accessories",
    isFeatured: false,
  },
  {
    _id: uuid(),
    title: "5KG Dumbbells",
    brandDescription: "Stay strong",
    detailedDescription: "A premium quality 5KG dumbbells perfect for beginners perfect for those arm workouts.",
    price: 2000,
    discountedPrice: 1800,
    featuredProductDescription: "A premium quality 5KG dumbbells perfect for beginners.",
    image: "/assets/equipments dumbbells.jpg",
    rating: 4,
    category: "Equipments",
    isFeatured: true,
  },
  {
    _id: uuid(),
    title: "Blue Mesh Shoes",
    brandDescription: "Nike",
    detailedDescription: "A premium quality shoes from Nike, classy yet affordable. Can be used during workouts",
    price: 3000,
    discountedPrice: 2799,
    featuredProductDescription: "A premium quality shoes. Classy yet affordable",
    image: "/assets/nike-shoes.jpg",
    rating: 4.5,
    category: "Shoes",
    isFeatured: true,
  },
  {
    _id: uuid(),
    title: "Yoga Mat",
    brandDescription: "Stay Strong",
    detailedDescription: "A yoga mat for everyone to perfom their exercies or yogas",
    price: 1200,
    discountedPrice: 900,
    image: "/assets/equipments yoga mat.jpg",
    rating: 2.5,
    category: "Equipments",
    isFeatured: false,
  }, 
  {
    _id: uuid(),
    title: "HeadBand",
    brandDescription: "Lyra",
    detailedDescription: "Nice quality headband for all the long hair people during workouts.",
    price: 700,
    discountedPrice: 500,
    image: "/assets/accessories headband.jpg",
    rating: 1,
    category: "Accessories",
    isFeatured: false,
  },
];


import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Men Slim Fit T-shirt",
    brandDescription: "United Colors",
    price: "1500",
    discountedPrice: "850",
    image: "/assets/athleisure-fit tshirt.jpg",
    rating: "3",
    categoryName: "Athleisure",
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
    title: "Yoga Mat",
    brandDescription: "Stay Strong",
    price: "1200",
    discountedPrice: "900",
    image: "/assets/equipments yoga mat.jpg",
    rating: "2.5",
    categoryName: "Equipments",
  }, 
];

export const featuredProducts = [
  {
    _id: uuid(),
    title: "Men slim Fit Tshirt",
    imageDescription: "T-shirt",
    featuredProductDescription: "A premium quality Fit T-shirt. Available in different colors.",
    price: "850",
    image: "",
  },
  {
    _id: uuid(),
    title: "Blue Mesh Shoes",
    imageDescription: "shoes",
    featuredProductDescription: "A premium quality shoes from nike. Classy yet affordable",
    price: "2799",
    image: "",
  }
];

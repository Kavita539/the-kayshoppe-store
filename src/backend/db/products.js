import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
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

import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Shoes",
    image: "/assets/category-shoes.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Athleisure",
    image: "/assets/category-athleisure.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Accessories",
    image: "/assets/category-accessories.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Equipments",
    image: "/assets/category-gymequipment.jpg",
  },
];

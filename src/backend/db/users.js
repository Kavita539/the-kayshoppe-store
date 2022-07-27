import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Kayy",
    lastName: "Sharma",
    email: "Kayyshopper@gmail.com",
    password: "kayyshopper",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Kayy Sharma",
        mobile: "9111111111",
        zipCode: "400000",
        street: "244 / Madhani Estate, Ghodbandar Road, Thane, Mumbai",
        state: "Maharashtra",
        country: "India",
      },
    ],
  },
];

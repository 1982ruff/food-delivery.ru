import {
  ShoppingBag,
  User,
  Home,
  Info,
  Navigation,
  Contact,
  Truck,
} from "lucide-react";

export const headerMenu = [
  {
    title: "About",
    link: "/about",
    Icon: Info,
  },
  {
    title: "Location",
    link: "/location",
    Icon: Navigation,
  },
  {
    title: "Contact",
    link: "/contact",
    Icon: Contact,
  },
  {
    title: "Delivery",
    link: "/delivery",
    Icon: Truck,
  },
];

export const accountMenu = [
  {
    title: "Cart",
    link: "/cart",
    icon: <ShoppingBag />,
  },
  {
    title: "Account",
    link: "/account",
    icon: <User />,
  },
];

export const foodMenu = [
  {
    title: "Breakfast",
    link: "/",
  },
  {
    title: "Dinner",
    link: "/",
  },
  {
    title: "Supper",
    link: "/",
  },
  {
    title: "Desert",
    link: "/",
  },
];

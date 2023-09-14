import { TbMathFunction, TbHome } from "react-icons/tb";

export const ROUTES = {
  INDEX: {
    href: "/",
    name: "Routes.index",
    Icon: TbHome,
  },
  BRAND: {
    href: "/",
    name: "Brand.name",
    Icon: TbMathFunction,
  },

  COURSE: {
    href: "/course/:courseName",
    name: "Routes.course",
  },
};

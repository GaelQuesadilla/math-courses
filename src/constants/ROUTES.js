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

  COURSE_PREVIEW: {
    href: "/preview/:courseName",
    getHref: (course) => {
      return `/preview/${course}`;
    },
    name: "Routes.preview",
  },

  COURSE: {
    href: "/course/:courseName",
    getHref: (course) => {
      return `/course/${course}`;
    },

    name: "Routes.course",
  },
};

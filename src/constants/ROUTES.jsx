import { TbHome } from "react-icons/tb";
import icon from "../assets/icon-120x120.png";

export const ROUTES = {
  INDEX: {
    href: "/math-courses/",
    name: "Routes.index",
    Icon: TbHome,
  },
  BRAND: {
    href: "/math-courses/",
    name: "Brand.name",
    Icon: () => (
      <img
        alt="MateCursos icon"
        src={icon}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
    ),
  },

  COURSE_PREVIEW: {
    href: "/math-courses/preview/:courseName",
    getHref: (course) => {
      return `/math-courses/preview/${course}`;
    },
    name: "Routes.preview",
  },

  COURSE: {
    href: "/math-courses/course/:courseName",
    getHref: (course) => {
      return `/math-courses/course/${course}`;
    },

    name: "Routes.course",
  },
};

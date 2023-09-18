import { TbHome } from "react-icons/tb";
import icon from "../assets/icon-120x120.png";

export const ROUTES = {
  INDEX: {
    href: "/",
    name: "Routes.index",
    Icon: TbHome,
  },
  BRAND: {
    href: "/",
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

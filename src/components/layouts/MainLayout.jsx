import { Footer } from "../Footer/Footer";
import { HeaderNavbar } from "../Navbar/HeaderNavbar";

export const MainLayout = ({ children, ...props }) => {
  return (
    <>
      <HeaderNavbar />
      <main {...props}>{children}</main>
      <Footer />
    </>
  );
};

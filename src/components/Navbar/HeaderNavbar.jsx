import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink as NavLinkRRD } from "react-router-dom";
import { ROUTES } from "../../constants/ROUTES";
import { useTranslation } from "react-i18next";

export const HeaderNavbar = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Navbar className="bg-dark py-3" variant="dark" expand="md">
        <Container fluid>
          <Navbar.Brand as={NavLinkRRD} to={ROUTES.INDEX.href}>
            <ROUTES.BRAND.Icon /> {t(ROUTES.BRAND.name)}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="toggle-navbar" />

          <Navbar.Collapse id="toggle-navbar">
            <Nav className="me-auto">
              <Nav.Link as={NavLinkRRD} to={ROUTES.INDEX.href}>
                <ROUTES.INDEX.Icon /> {t(ROUTES.INDEX.name)}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

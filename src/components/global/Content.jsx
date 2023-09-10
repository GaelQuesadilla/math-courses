import { Container } from "react-bootstrap";

export const Content = ({ children, fluid = "md", ...props }) => {
  return (
    <Container
      className={`mt-3 py-3 bg-light shadow mx-auto`}
      fluid={fluid}
      {...props}
    >
      {children}
    </Container>
  );
};

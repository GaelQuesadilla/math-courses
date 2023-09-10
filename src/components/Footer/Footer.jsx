import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Container
        as="footer"
        fluid
        className="bg-dark text-light py-4 mt-5 mb-0"
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={3}>
              <h4>{t("Brand.name")}</h4>
              <p>{t("Footer.description")}</p>
            </Col>
            <Col md={5}>
              <h5>{t("Footer.team")}</h5>
              <p className="fw-bold mt-3 mb-1">{t("Footer.developer")}</p>
              <ul className="list">
                {t("Footer.teamDeveloper")
                  .split(",")
                  .map((name, key) => (
                    <li className="list-item" key={key}>
                      {name}
                    </li>
                  ))}
              </ul>
              <p className="fw-bold mt-3 mb-1">{t("Footer.collaborator")}</p>

              <ul className="list">
                {t("Footer.teamCollaborator")
                  .split(",")
                  .map((name, key) => (
                    <li className="list-item" key={key}>
                      {name}
                    </li>
                  ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

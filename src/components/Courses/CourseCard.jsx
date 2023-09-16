import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/ROUTES";

export const CourseCard = ({ children, title, to, ...props }) => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Card className="my-4 mx-auto" border="primary">
        <Card.Header as="h5">Curso</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{children}</Card.Text>
          <Button
            as={Link}
            to={ROUTES.COURSE_PREVIEW.getHref(to)}
            variant="primary"
          >
            {t("Courses.link-btn")}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

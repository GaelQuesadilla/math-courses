import { Button, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { ROUTES } from "../../constants/ROUTES";

export const CourseCongratulations = () => {
  const [t, i18n] = useTranslation("global");
  const { width, height } = useWindowSize();
  return (
    <>
      <Container>
        <Confetti width={width} height={height} />
        <h2 className="my-3">{t("Courses.congratulations")}</h2>
        <h3 className="my-3">{t("Courses.finished-course")}</h3>

        <p>{t("Courses.congratulation-message")}</p>

        <Button as={Link} to={ROUTES.INDEX.href}>
          {t("Courses.return-btn")}
        </Button>
      </Container>
    </>
  );
};

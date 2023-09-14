import { useTranslation } from "react-i18next";
import { Content } from "../components/global/Content";

import { Button, Container, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const CourseView = () => {
  const [t, i18n] = useTranslation("global");
  let { courseName } = useParams();

  courseName = "Courses." + courseName;
  return (
    <>
      <Content>
        <section>
          <header className="mb-3">
            <h1 className="fs-1">{t(courseName + ".title")}</h1>
            <p className="text">{t(courseName + ".description")}</p>
          </header>

          <article>
            <h2 className="fs-2">{t("Courses.ready-to-start")}</h2>
            <p>{t("Courses.will-learn")}</p>

            <ListGroup className="mb-4">
              {t(courseName + ".knowledge")
                .split(";")
                .map((el, key) => (
                  <ListGroup.Item key={key}>{el}</ListGroup.Item>
                ))}
            </ListGroup>
            <Container className="mx-auto px-5" fluid="sm">
              <Button className="w-100 py-3">{t("Courses.start-btn")}</Button>
            </Container>
          </article>
        </section>
      </Content>
    </>
  );
};

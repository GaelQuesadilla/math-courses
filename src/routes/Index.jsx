import { useTranslation } from "react-i18next";
import { CourseCard } from "../components/Courses/CourseCard";
import { Content } from "../components/global/Content";

import { courses } from "../courses/courses";
import { Container } from "react-bootstrap";

export const Index = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Content>
        <section>
          <header className="mb-3">
            <h1 className="fs-1">{t("Index.welcome")}</h1>
            <p className="text">{t("Index.description")}</p>
          </header>

          <article>
            <h2 className="fs-2">Nuestros cursos</h2>
            <Container className="mx-auto my-0">
              {Object.keys(courses).map((el, index) => (
                <CourseCard key={index} title={t(courses[el].title)} to={el}>
                  {t(courses[el].description)}
                </CourseCard>
              ))}
            </Container>
          </article>
        </section>
      </Content>
    </>
  );
};

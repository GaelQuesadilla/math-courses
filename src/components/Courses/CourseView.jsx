import { useTranslation } from "react-i18next";
import { Content } from "../global/Content";
import { useParams } from "react-router-dom";
import { Button, Container, ProgressBar } from "react-bootstrap";
import { TbArrowRight as ArrowRight } from "react-icons/tb";

export const CourseView = () => {
  const [t, i18n] = useTranslation("global");
  const { courseName } = useParams();
  const course_i18n = "Courses." + courseName;
  return (
    <>
      <Content>
        <section>
          <header>
            <h1 className="fs-1">
              {t("Words.course")} {t(course_i18n + ".title")}
            </h1>
          </header>
          <Container className="my-4">
            <ProgressBar now={0} label={"label"} />
          </Container>

          <Container as="article">
            {/* Here goes the course content */}
            <Container className="mt-5 d-flex justify-content-center justify-content-md-end">
              <Button>
                {t("Courses.next-page")} <ArrowRight />
              </Button>
            </Container>
          </Container>
        </section>
      </Content>
    </>
  );
};

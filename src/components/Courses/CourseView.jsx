import { useTranslation } from "react-i18next";
import { Content } from "../global/Content";
import { useParams } from "react-router-dom";
import { Button, Container, ProgressBar } from "react-bootstrap";
import { TbArrowRight as ArrowRight } from "react-icons/tb";
import { CourseContent } from "./CourseContent";
import { useCourse } from "../../hooks/useCourse";
import { CourseCongratulations } from "./CourseCongratulations";
import { useState, useEffect } from "react";

export const CourseView = () => {
  const [t, i18n] = useTranslation("global");
  const { courseName } = useParams();
  const course_i18n = "Courses." + courseName;
  const { course, setCourse } = useCourse(courseName);
  const [disableNextBtn, setDisableNextBtn] = useState(false);

  useEffect(() => {
    if (!!course.currentView && !!course.currentView.form) {
      setDisableNextBtn(true);
    }
  }, [course.currentView]);

  return (
    <>
      <Content>
        <section>
          <header>
            <h1 className="fs-1">
              {t("Words.course")} {t(course_i18n + ".title")}
            </h1>
          </header>

          <Container as="article">
            {course.currentPage < course.totalPages ? (
              <>
                <Container className="my-4">
                  <ProgressBar
                    now={((course.currentPage + 1) / course.totalPages) * 100}
                    label={`${course.currentPage + 1}/${course.totalPages}`}
                  />
                </Container>

                <CourseContent
                  title={course.currentView.title}
                  text={course.currentView.text}
                  form={course.currentView.form}
                  disableNextBtn={disableNextBtn}
                  setDisableNextBtn={setDisableNextBtn}
                />

                <Container className="mt-5 d-flex justify-content-center justify-content-md-end">
                  <Button
                    disabled={disableNextBtn}
                    onClick={() =>
                      setCourse((prev) => ({
                        ...prev,
                        currentPage: prev.currentPage + 1,
                      }))
                    }
                  >
                    {t("Courses.next-page")} <ArrowRight />
                  </Button>
                </Container>
              </>
            ) : (
              <CourseCongratulations />
            )}
          </Container>
        </section>
      </Content>
    </>
  );
};

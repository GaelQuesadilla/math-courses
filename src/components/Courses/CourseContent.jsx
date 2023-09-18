import { Button, Container, Form } from "react-bootstrap";
import { MarkdownRender } from "../global/MarkdownRender";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export const CourseContent = ({
  title,
  text,
  form,
  disableNextBtn,
  setDisableNextBtn,
  ...props
}) => {
  const [t, i18n] = useTranslation("global");
  return (
    <Container {...props}>
      <h2 className="fs-2 my-4">{title}</h2>
      <MarkdownRender>{text}</MarkdownRender>
      {form ? (
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            setDisableNextBtn(false);
          }}
        >
          {form.options.map((el, index) => (
            <Form.Check
              name="formGroupRatio"
              key={index}
              id={`formCheckRadio${index}`}
              type="radio"
              className={`rounded py-1 my-3 ${
                (index == form.answer) & !disableNextBtn
                  ? "bg-success text-light"
                  : ""
              }`}
              label={<MarkdownRender>{el}</MarkdownRender>}
            />
          ))}

          <Button type="submit" className="bg-success">
            {t("Courses.answer-question")}
          </Button>
        </Form>
      ) : null}
    </Container>
  );
};

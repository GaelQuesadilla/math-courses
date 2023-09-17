import { Container } from "react-bootstrap";
import { MarkdownRender } from "../global/MarkdownRender";

export const CourseContent = ({ title, text, form = false, ...props }) => {
  return (
    <Container {...props}>
      <h2>{title}</h2>

      <MarkdownRender>{text}</MarkdownRender>
    </Container>
  );
};

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import ReactMarkdown from "react-markdown";

export const MarkdownRender = ({ children, ...props }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      {...props}
    >
      {children}
    </ReactMarkdown>
  );
};

import Showdown from "showdown";
import DOMPurify from "dompurify";

const LinesMarkdownRenderer = ({
  markdown,
  lineRange,
}: {
  markdown: string;
  lineRange?: [number, number]; // Optional: Start and End line numbers
}) => {
  // Split markdown into lines
  let lines = markdown.split("\n");

  // If a line range is provided, filter lines
  if (lineRange) {
    const [start, end] = lineRange;
    lines = lines.slice(start - 1, end); // Convert to zero-based index
  }

  const filteredMarkdown = lines.join("\n"); // Join back into a string

  const converter = new Showdown.Converter({
    extensions: [
      function () {
        return [
          {
            type: "output",
            regex: /<img(.*?)>/g,
            replace: '<img$1 style="width:150px;height:auto;">',
          },
        ];
      },
    ],
  });
  const rawHtml = converter.makeHtml(filteredMarkdown);
  const sanitizedHtml = DOMPurify.sanitize(rawHtml); // Prevents XSS

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

export default LinesMarkdownRenderer;

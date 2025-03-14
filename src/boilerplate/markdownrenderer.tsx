import Showdown from "showdown";
import DOMPurify from "dompurify";

const MarkdownRenderer = ({ markdown }: { markdown: string }) => {
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
  //   console.log(markdown);
  const rawHtml = converter.makeHtml(markdown);
  const sanitizedHtml = DOMPurify.sanitize(rawHtml); // Prevents XSS

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

export default MarkdownRenderer;

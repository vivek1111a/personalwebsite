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
    tables: true,
    tasklists: true,
    strikethrough: true,
    emoji: true,
    underline: true,
    ghCodeBlocks: true,
    ghMentions: true,
    simpleLineBreaks: true,
    openLinksInNewWindow: true,
  });
  //   console.log(markdown);
  const rawHtml = converter.makeHtml(markdown);
  const sanitizedHtml = DOMPurify.sanitize(rawHtml, {
    ADD_ATTR: ["target"], // Allow target attribute for links
    ADD_TAGS: ["iframe"], // Allow iframes if needed
  });

  return (
    <div
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default MarkdownRenderer;

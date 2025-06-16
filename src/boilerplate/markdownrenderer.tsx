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
    // ✅ Handles underscores in variables (e.g., this_is_var won't italicize)
    literalMidWordUnderscores: true,

    // ✅ Allows nested lists without strict 4-space indentation (Notion fix)
    disableForced4SpacesIndentedSublists: true,

    // ✅ GitHub-style header IDs (useful if you're linking to headings)
    ghCompatibleHeaderId: true,

    // ✅ Automatically links URLs (https://example.com)
    simplifiedAutoLink: true,
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

import { unified } from "unified";
import html from "remark-html";
import gfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkFrontmatter from "remark-frontmatter";
import rehypeShiki from "@shikijs/rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";

export default async function markdownToHtml(markdown: string) {
  let result = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(gfm)
    .use(html, { sanitize: false })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeShiki, { theme: "tokyo-night" })
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}

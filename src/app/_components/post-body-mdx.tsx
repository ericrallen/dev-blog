import { compileMDX } from "next-mdx-remote/rsc";
import components from "@/app/_components/posts";

import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";
import rehypeShiki from "@shikijs/rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkVideo from "remark-video";

import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export async function PostBodyMDX({ content }: Props) {
  const { content: compiledContent } = await compileMDX({
    source: content,
    components: components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [
          remarkFrontmatter,
          remarkDirective,
          [remarkVideo, { publicDir: "./assets" }],
        ],
        rehypePlugins: [
          rehypeSlug,
          rehypeAutolinkHeadings,
          [rehypeShiki, { theme: "tokyo-night" }],
        ],
      },
    },
  });

  return (
    <div className={`${markdownStyles["markdown"]} max-w-2xl mx-auto`}>
      {compiledContent}
    </div>
  );
}

export default PostBodyMDX;

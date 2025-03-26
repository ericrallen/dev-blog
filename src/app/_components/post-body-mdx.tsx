import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import components from "@/app/_components/posts";

import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBodyMDX({ content }: Props) {
  return (
    <div className={`${markdownStyles["markdown"]} max-w-2xl mx-auto`}>
      <MDXRemote source={content} components={components} />
    </div>
  );
}

export default PostBodyMDX;

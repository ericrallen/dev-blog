"use client";

import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote";
import components from "@/app/_components/posts";

import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: MDXRemoteProps;
};

export function PostBodyMDX({ content }: Props) {
  return (
    <div className={`${markdownStyles["markdown"]} max-w-2xl mx-auto`}>
      <MDXRemote {...content} components={components} />
    </div>
  );
}

export default PostBodyMDX;

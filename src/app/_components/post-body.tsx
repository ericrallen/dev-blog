import { Post } from "@/interfaces/post";
import markdownStyles from "./markdown-styles.module.css";

type Props = Pick<Post, "content">;

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default PostBody;

import Link from "next/link";

import CoverImage from "@/app/_components/cover-image";
import PostBody from "@/app/_components/post-body";
import DateFormatter from "./date-formatter";
import markdownToHtml from "@/lib/markdownToHtml";

import { type Post } from "@/interfaces/post";

type Props = Pick<Post, "title" | "coverImage" | "date" | "content" | "slug">;

export async function HeroPost({ title, coverImage, date, content, slug }: Props) {
  const renderedContent = await markdownToHtml(content || "");

  return (
    <section>
      {coverImage && (
        <div className="mb-8 md:mb-16">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
      )}
      <div className="">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <PostBody content={renderedContent} />
      </div>
    </section>
  );
}

export default HeroPost;

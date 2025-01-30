import Link from "next/link";

import CoverImage from "@/app/_components/cover-image";
import PostBody from "@/app/_components/post-body";
import DateFormatter from "./date-formatter";
import markdownToHtml from "@/lib/markdownToHtml";

import { type Post } from "@/interfaces/post";

type Props = Pick<Post, "title" | "coverImage" | "date" | "excerpt" | "slug">;

export async function HeroPost({ title, coverImage, date, excerpt, slug }: Props) {
  const renderedContent = await markdownToHtml(excerpt || "");

  return (
    <section>
      {/* {coverImage && (
        <div className="mb-8 md:mb-16">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
      )} */}
      <div className="">
        <h3 className="mb-2 text-4xl lg:text-5xl leading-tight">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="text-lg mb-3 leading-relaxed">{excerpt}</p>
      </div>
      <div className="text-sm">
        <DateFormatter dateString={date} />
      </div>
    </section>
  );
}

export default HeroPost;

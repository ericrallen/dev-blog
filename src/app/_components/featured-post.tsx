import Link from "next/link";

import CoverImage from "@/app/_components/cover-image";
import PostBody from "@/app/_components/post-body";
import DateFormatter from "./date-formatter";
import markdownToHtml from "@/lib/markdownToHtml";
import ReadMore from "./read-more";

import { type Post } from "@/interfaces/post";

type Props = Pick<Post, "title" | "coverImage" | "date" | "excerpt" | "slug">;

export async function FeaturedPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  const renderedContent = await markdownToHtml(excerpt || "");

  return (
    <section className="flex flex-col gap-4">
      <h4 className="text-xl font-bold text-gray-500">Featured Post</h4>
      <article className="relative flex flex-col xl:flex-row items-end w-full h-full">
        {coverImage && (
          <div className="relative border border-gray-400 rounded-md">
            <CoverImage title={title} src={coverImage} slug={slug} glitch />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%-2px)] h-[calc(100%-2px)] bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          </div>
        )}
        {/* <div className="absolute top-0 right-0 text-sm p-4">
          <DateFormatter dateString={date} />
        </div> */}
        <div className="xl:absolute xl:bottom-[1px] xl:left-[1px] w-[calc(100%-2px)] flex flex-col gap-6 p-4 bg-emerald-950 bg-opacity-70 xl:bg-opacity-85 mt-4 xl:mt-0 xl:rounded-b-md">
          <h3 className="text-4xl lg:text-5xl leading-tight">
            <Link
              href={`/blog/post/${slug}`}
              className="text-neutral-200 no-underline hover:underline hover:text-amber-600"
            >
              {title}
            </Link>
          </h3>
          <p className="text-lg leading-relaxed">{excerpt}</p>
          <ReadMore slug={slug} />
        </div>
      </article>
    </section>
  );
}

export default FeaturedPost;

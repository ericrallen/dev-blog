import { type Author } from "@/interfaces/author";
import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({ title, coverImage, date, excerpt, author, slug }: Props) {
  return (
    <div className="mt-8">
      {/* {coverImage && (
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      )} */}
      <h3 className="text-3xl mb-2 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-lg mb-3 leading-relaxed">{excerpt}</p>
      <div className="text-sm">
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
}

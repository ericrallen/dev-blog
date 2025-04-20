import { type Author } from "@/interfaces/author";
import Link from "next/link";
import CoverImage from "@/app/_components/cover-image";
import CTAButton from "@/app/_components/cta-button";
import DateFormatter from "@/app/_components/date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  readMore?: boolean;
  showDate?: boolean;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  readMore = false,
  showDate = false,
}: Props) {
  return (
    <div className="flex flex-col border gap-6 border-gray-400 rounded-sm p-4">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center h-full w-full">
        <div className="flex flex-col gap-2 w-full lg:w-1/3">
          {coverImage && (
            <div className="w-full">
              <CoverImage
                slug={slug}
                title={title}
                src={coverImage}
                hoverGlitch
              />
            </div>
          )}
          {showDate && (
            <p className="text-sm text-gray-500">
              <DateFormatter dateString={date} />
            </p>
          )}
        </div>
        <div className="w-full lg:w-2/3 flex flex-col gap-2">
          <h3 className="text-xl leading-snug">
            <Link href={`/blog/post/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <p className="text-md mb-3 leading-relaxed">{excerpt}</p>
          {readMore && (
            <div className="flex justify-start">
              <CTAButton cta="Read Article" url={`/blog/post/${slug}`} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

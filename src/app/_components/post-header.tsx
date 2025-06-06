import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  update?: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, update, author }: Props) {
  return (
    <>
      {coverImage && (
        <div className="mb-8 md:mb-16 sm:mx-0 w-full">
          <CoverImage title={title} src={coverImage} />
        </div>
      )}
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-sm">
          <strong>Published</strong>: <DateFormatter dateString={date} />
          {update && (
            <>
              {" "}
              (<em>Updated</em>: <DateFormatter dateString={update} />)
            </>
          )}
        </div>
      </div>
    </>
  );
}

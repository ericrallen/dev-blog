import Link from "next/link";

export interface ReadMoreProps {
  slug: string;
}

export default function ReadMore({ slug }: ReadMoreProps) {
  return (
    <div className="flex flex-row gap-2">
      <Link
        href={`/blog/post/${slug}`}
        className="text-sm text-neutral-200 py-2 px-4 bg-amber-600 border border-transparent no-underline hover:underline hover:bg-transparent hover:border hover:border-neutral-200 transition-all ease-in-out duration-300"
      >
        Read More
      </Link>
    </div>
  );
}

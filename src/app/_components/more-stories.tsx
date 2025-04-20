import { Post } from "@/interfaces/post";
import { PostPreview } from "@/app/_components/post-preview";
import CTAButton from "@/app/_components/cta-button";

type Props = {
  posts: Post[];
  heading?: string;
  readMore?: boolean;
  viewAll?: boolean;
  showDate?: boolean;
};

export function MoreStories({
  posts,
  heading = "More From the Blog",
  readMore = false,
  viewAll = true,
  showDate = true,
}: Props) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-gray-500">{heading}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            readMore={readMore}
            showDate={showDate}
          />
        ))}
      </div>
      {viewAll && (
        <div className="flex">
          <CTAButton cta="View All Posts" url="/blog" />
        </div>
      )}
    </section>
  );
}

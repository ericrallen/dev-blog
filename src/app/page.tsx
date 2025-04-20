import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import FeaturedPost from "@/app/_components/featured-post";
import { getPagePosts, getFeaturedPosts } from "@/lib/api";
import Services from "@/app/_components/services";

export default async function Index() {
  const posts = await getPagePosts();
  const featuredPosts = await getFeaturedPosts();
  const featuredSlugs = featuredPosts.map((post) => post.slug);

  let morePosts = posts;

  if (featuredPosts.length > 0) {
    morePosts = posts
      .filter((post) => !featuredSlugs.includes(post.slug))
      .slice(0, 2);
  } else {
    morePosts = posts.slice(1, 3);
  }

  const heroPost = featuredPosts.length > 0 ? featuredPosts[0] : posts[0];

  return (
    <main>
      <Container>
        <Intro />
        {featuredPosts.length > 0 ? (
          <FeaturedPost
            title={featuredPosts[0].title}
            coverImage={featuredPosts[0].coverImage}
            date={featuredPosts[0].date}
            slug={featuredPosts[0].slug}
            excerpt={featuredPosts[0].excerpt}
          />
        ) : (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        <Services />
        <div className="flex flex-col gap-4 my-16">
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
      </Container>
    </main>
  );
}

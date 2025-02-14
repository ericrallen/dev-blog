import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import Pagination from "@/app/_components/pagination";
import { getPagePosts, getTotalPages } from "@/lib/api";

export default async function Index() {
  const posts = await getPagePosts();
  const heroPost = posts[0];
  const morePosts = posts.slice(1);
  const pages = await getTotalPages();

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        {pages > 1 && <Pagination currentPage={0} totalPages={pages} />}
      </Container>
    </main>
  );
}

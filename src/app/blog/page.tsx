import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPagePosts, getTotalPages } from "@/lib/api";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import Pagination from "@/app/_components/pagination";
import { MoreStories } from "@/app/_components/more-stories";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";

type Params = {
  params: Promise<{
    page: string;
  }>;
};

export default async function Page(props: Params) {
  const params = await props.params;
  const page = parseInt(params.page ?? 0, 10);

  const posts = await getPagePosts(page);
  const pages = await getTotalPages();

  if (typeof page !== "number") {
    return notFound();
  }

  return (
    <main>
      <Container>
        <Header />
        <MoreStories
          posts={posts}
          heading="Blog Posts for Humans"
          readMore={true}
          viewAll={false}
        />
        <Pagination currentPage={page} totalPages={pages} />
      </Container>
    </main>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const page = parseInt(params.page ?? 0, 10);
  const posts = await getPagePosts(page);

  if (typeof page !== "number") {
    return notFound();
  }

  const title = `Interweb Alchemy | Blog | Page ${page}`;

  return {
    title,
    openGraph: {
      title,
      images: [HOME_OG_IMAGE_URL, ...posts.map((post) => post.coverImage)],
    },
  };
}

export async function generateStaticParams(props: Params) {
  const totalPages = await getTotalPages();

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).map(
    (page) => ({
      page: page.toString(),
    })
  );

  return pages;
}

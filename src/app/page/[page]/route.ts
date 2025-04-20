import { permanentRedirect } from "next/navigation";

import { getTotalPages } from "@/lib/api";

type Params = {
  params: Promise<{
    page: string;
  }>;
};

export async function GET(_: unknown, { params }: Params) {
  const page = (await params).page;

  permanentRedirect(`/blog/page/${page}`);
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

export const dynamic = "force-static";

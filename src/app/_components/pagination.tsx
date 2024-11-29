"use client";

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps): React.ReactElement {
  const pages = Array.from({ length: totalPages }, (_, i) => i);

  if (pages.length && pages.length > 1) {
    return (
      <nav className="flex justify-center gap-2 py-8" aria-label="Pagination">
        {currentPage > 0 && (
          <Link
            href={currentPage - 1 === 0 ? "/" : `/page/${currentPage - 1}`}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            &lt;<span className="sr-only">Prev</span>
          </Link>
        )}

        {pages.map((page) => (
          <Link
            key={page}
            href={page === 0 ? "/" : `/page/${page}`}
            className={`px-4 py-2 border rounded ${currentPage === page ? "bg-gray-200" : "hover:bg-gray-100"}`}
          >
            {page}
          </Link>
        ))}

        {currentPage < totalPages - 1 && (
          <Link href={`/page/${currentPage + 1}`} className="px-4 py-2 border rounded hover:bg-gray-100">
            <span className="sr-only">Next</span>&gt;
          </Link>
        )}
      </nav>
    );
  }

  return <></>;
}

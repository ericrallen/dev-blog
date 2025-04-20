import Link from "next/link";

export interface CTAButtonProps {
  cta: string;
  url: string;
}

export default function CTAButton({ cta, url }: CTAButtonProps) {
  return (
    <Link
      href={url}
      className="bg-amber-600 text-neutral-100 px-5 py-3 no-underline border border-transparent hover:bg-transparent hover:border-neutral-200 transition-all ease-in-out duration-300"
    >
      {cta}
    </Link>
  );
}

import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl font-bold tracking-tight md:tracking-tighter leading-tight my-8 flex items-center">
      <Link href="/" className="hover:underline no-underline text-slate-100 hover:text-amber-600">
        Interweb Alchemy
      </Link>
    </h2>
  );
};

export default Header;

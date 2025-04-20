import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  glitch?: boolean;
  hoverGlitch?: boolean;
};

const CoverImage = ({
  title,
  src,
  slug,
  glitch = false,
  hoverGlitch = false,
}: Props) => {
  const image = (
    <img
      src={src}
      alt=""
      className={cn("rounded-md w-full h-auto", {
        "glitch-effect": glitch,
        "glitch-effect-on-hover": hoverGlitch,
      })}
      width="100%"
      height="auto"
    />
  );
  return (
    <div className="sm:mx-0 rounded-md">
      {slug ? (
        <Link href={`/blog/post/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;

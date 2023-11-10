"use client";

import Link from "next/link";

const Card = ({ title, category, slug, summary }) => {
  return (
    <div className="mb-4">
      <Link href={`/blog/${slug}`}>
        <h2
          className="font-semibold text-lg text-rose-500"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Link>

      <span className="font-thin text-md text-neutral-500">{category}</span>

      <div className="w-full" dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default Card;

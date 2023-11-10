"use client";

import Link from "next/link";
import React from "react";

const BlogPost = ({ title, author, slug }) => {
  return (
    <div className="mb-4">
      <Link href={`/blog/${slug}`}>
        <h2 className="font-semibold text-lg text-rose-500">{title}</h2>
      </Link>
      <span className="text-sm text-neutral-500">{author}</span>
    </div>
  );
};

export default BlogPost;

"use client";

import useFetch from "@/app/hooks/useFetch";
import Link from "next/link";

const Categories = () => {
  const { data, loading } = useFetch(
    "/wp-json/wp/v2/categories?_fields=id,name,slug"
  );

  if (loading) {
    return (
      <div className="md:w-1/6">
        <h1 className="text-4xl font-semibold mb-8">Categories</h1>
        loading...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="md:w-1/6">
        <h1 className="text-4xl font-semibold mb-8">Categories</h1>
        No categories found
      </div>
    );
  }

  return (
    <div className="md:w-1/6">
      <h1 className="text-4xl font-semibold mb-8">Categories</h1>
      <div className="w-full">
        {data?.map((category) => (
          <div
            key={category.id}
            className="text-rose-400 hover:text-rose-300 hover:underline"
          >
            <Link href={`/category/${category.id}`}>{category.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

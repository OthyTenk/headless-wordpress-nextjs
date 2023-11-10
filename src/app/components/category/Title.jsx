"use client";

import useFetch from "../../hooks/useFetch";

const Title = ({ slug }) => {
  const { data, loading } = useFetch(
    `/wp-json/wp/v2/categories/${slug}?_fields=id,name`
  );

  if (loading) {
    return <div>loading...</div>;
  }

  if (!data) {
    return <div>No category found</div>;
  }
  return (
    <h1 className="text-4xl font-semibold mb-8 text-center">
      Filtered by: {data.name}
    </h1>
  );
};

export default Title;

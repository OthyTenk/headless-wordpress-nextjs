"use client";

import { usePathname } from "next/navigation";
import Container from "../../components/Container";
import useFetch from "../../hooks/useFetch";

const BlogPostDetailsPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/");

  const { data, loading } = useFetch(
    `/wp-json/wp/v2/posts?_fields=id,slug,title,content&slug=${
      slug[slug.length - 1]
    }`
  );

  if (loading) {
    return (
      <Container>
        <section>
          <div className="prose prose-slate max-w-2xl mx-auto text-center">
            loading...
          </div>
        </section>
      </Container>
    );
  }

  if (!data[0] && !loading) {
    return (
      <Container>
        <section>
          <div className="prose prose-slate max-w-2xl mx-auto text-center">
            No data found
          </div>
        </section>
      </Container>
    );
  }

  return (
    <Container>
      <section>
        <h1
          className="text-4xl font-semibold mb-8 text-center"
          dangerouslySetInnerHTML={{ __html: data[0].title.rendered }}
        />
        <div
          className="prose prose-slate max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}
        />
      </section>
    </Container>
  );
};

export default BlogPostDetailsPage;

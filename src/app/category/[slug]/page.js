"use client";

import Title from "@/app/components/category/Title";
import { usePathname } from "next/navigation";
import Container from "../../components/Container";
import Blogs from "../../components/category/Blogs";

const PostsByCategoryPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/");

  return (
    <Container>
      <section>
        <Title slug={slug[slug.length - 1]} />
        <Blogs slug={slug[slug.length - 1]} />
      </section>
    </Container>
  );
};

export default PostsByCategoryPage;

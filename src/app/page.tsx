import { Suspense } from "react";
import Hero from "@/components/Hero";
import BlogGrid from "@/components/BlogGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <BlogGrid />
      </Suspense>
    </>
  );
}

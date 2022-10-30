import Hero from "../../components/Hero";
import PostsList from "../../components/PostsList";

export default function PostsPage() {
  return (
    <>
      <Hero intro="Posts" text="Just some posts about different things!" />
      <PostsList />
    </>
  );
}

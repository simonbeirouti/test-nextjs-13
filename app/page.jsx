import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";

export default function Home() {
  return (
    <>
      <Hero intro="Lives updates" text="Recent updates for you below!" />
      <HomeContent />
    </>
  );
}

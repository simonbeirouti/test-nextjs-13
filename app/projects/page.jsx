import Hero from "../../components/Hero";
import ProjectList from "../../components/ProjectList";

export default function page() {
  return (
    <>
      <Hero
        intro="Projects"
        text="The various projects I'm creating a link directly to them"
      />
      <ProjectList />
    </>
  );
}

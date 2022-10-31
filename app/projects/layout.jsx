import Hero from "../../components/utilities/Hero";

export default async function ProjectLayout({ children }) {
  return (
    <>
      <Hero
        intro="Projects"
        text="The various projects I'm creating a link directly to them"
      />
      {children}
    </>
  );
}

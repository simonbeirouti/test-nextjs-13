import Hero from "../../components/utilities/Hero";

export default async function ProjectLayout({ children }) {
  return (
    <>
      <head />
      <Hero
        intro="Experiences"
        text="Truthful ratings on different things that I experience in life."
      />
      {children}
    </>
  );
}

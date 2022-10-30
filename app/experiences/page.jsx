import Hero from "../../components/Hero";
import ExperienceList from "../../components/ExperienceList";

export default function page() {
  return (
    <>
      <Hero
        intro="Experiences"
        text="Truthful ratings on different things that I experience in life."
      />
      <ExperienceList />
    </>
  );
}

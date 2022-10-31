import Hero from "../../components/utilities/Hero";
import { PrismaClient } from "@prisma/client";
import ProjectCard from "../../components/projects/ProjectCard";

export default async function page() {
  const prisma = new PrismaClient();
  const projects = await prisma.project.findMany();
  return (
    <>
      <Hero
        intro="Projects"
        text="The various projects I'm creating a link directly to them"
      />
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4">
            <ProjectCard projects={projects} />
          </div>
        </div>
      </section>
    </>
  );
}

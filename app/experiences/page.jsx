import { PrismaClient } from "@prisma/client";
import ExperienceCard from "../../components/experiences/ExperienceCard";

export default async function page() {
  const prisma = new PrismaClient();
  const experiences = await prisma.experience.findMany();
  return (
    <>
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-4">
            <ExperienceCard experiences={experiences} />
          </div>
        </div>
      </section>
    </>
  );
}

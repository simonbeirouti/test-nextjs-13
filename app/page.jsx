import { PrismaClient } from "@prisma/client";
import Hero from "../components/utilities/Hero";
import StatCard from "../components/home/StatCard";

export default async function Home() {
  const prisma = new PrismaClient();
  const stats = await prisma.stat.findMany();

  return (
    <>
      <Hero intro="Lives updates" text="Recent updates for you below!" />
      <section className="py-5 bg-white sm:py-8 lg:py-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
            <StatCard stats={stats} />
          </div>
        </div>
      </section>
    </>
  );
}

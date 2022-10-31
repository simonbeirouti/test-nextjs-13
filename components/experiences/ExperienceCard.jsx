import Image from "next/image";
import Link from "next/link";

export default function ExperienceCard({ experiences }) {
  return (
    <>
      {experiences.map((experience) => (
        <Link href={experience.url} key={experience.id}>
          <div className="relative mt-12 flex flex-col overflow-hidden bg-green-100 rounded-xl group">
            <div className="flex-shrink-0 overflow-hidden aspect-w-1 aspect-h-1">
              <Image
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                src={experience.image}
                alt=""
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col flex-1 px-4 py-5 sm:px-5 sm:py-6">
              <p className="text-xs font-bold tracking-wide text-gray-400 uppercase">
                {experience.name}
              </p>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 flex-1 mt-2.5">
                <a href="#" title="">
                  {experience.summary}
                  <span className="absolute inset-0" aria-hidden="true"></span>
                </a>
              </h3>
              <p className="text-sm sm:text-base text-gray-400 font-bold mt-2.5">
                {experience.date}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

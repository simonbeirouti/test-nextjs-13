import Link from "next/link";
import Image from "next/image";

export default function PostCard({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} title="" className="" key={post.id}>
          <div className="relative mt-3 overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:bg-gray-50 hover:-translate-y-1">
            <div className="p-4">
              <div className="flex items-start lg:items-center">
                <Image
                  className="object-cover rounded-lg shrink-0"
                  src={post.image}
                  alt=""
                  width={100}
                  height={100}
                />

                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-900">
                    {post.date}
                  </p>
                  <p className="text-lg leading-7 font-bold text-gray-900 mt-2.5">
                    {post.title}
                  </p>
                  <p className="text-sm mt-2.5 font-medium text-gray-900">
                    {post.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

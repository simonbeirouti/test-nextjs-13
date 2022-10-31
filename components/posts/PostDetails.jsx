import Image from "next/image";

export default function PostDetails({ post }) {
  return (
    <article>
      <header>
        <div className="max-w-3xl mx-auto">
          <p className="text-base font-medium text-gray-500">{post.date}</p>
          <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            {post.title}
          </h1>
          <p className="text-base mt-4 font-medium text-gray-500">
            {post.category}
          </p>
        </div>
      </header>
      <div className="mt-12 sm:mt-16 aspect-w-16 aspect-h-9 lg:aspect-h-6">
        <Image
          className="object-cover w-full h-full"
          src={post.image}
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="max-w-3xl mx-auto mt-4">
        <p className="text-lg font-bold text-gray-900 lg:text-lg">
          {post.content}
        </p>
      </div>
    </article>
  );
}

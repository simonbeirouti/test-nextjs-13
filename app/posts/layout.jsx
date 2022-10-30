import { PrismaClient } from "@prisma/client";
import PostCard from "../../components/reuse/PostCard";

export default async function PostsLayout({ children }) {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();

  return (
    <section className="py-6 bg-white sm:py-8 lg:py-10 h-auto">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-y-32 lg:grid-cols-7 lg:gap-x-12">
          <div className="lg:col-span-3 h-3/4">
            <p className="text-xl font-bold text-gray-900 mb-6">Recent Posts</p>
            <div className="space-y-3 overflow-scroll">
              <PostCard posts={posts} />
            </div>
          </div>

          <div className="lg:col-span-4 ">
            <div className="px-4 sm:p-6 ">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

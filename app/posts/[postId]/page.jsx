import { PrismaClient } from "@prisma/client";
import PostDetails from "../../../components/posts/PostDetails";

export default async function IssueDetailsPage({ params }) {
  const prisma = new PrismaClient();

  const post = await prisma.post.findFirst({
    where: { id: { equals: +params.postId } },
  });

  if (!post) {
    throw new Error("Post not found!");
  }

  return <PostDetails post={post} />;
}

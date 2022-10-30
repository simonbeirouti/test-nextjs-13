import { PrismaClient } from "@prisma/client";

export default async function Head({ params }) {
  const prisma = new PrismaClient();
  const post = await prisma.post.findFirst({
    where: { id: +params.postId },
  });
  const title = "Simon Beirouti | " + post.title;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={post.title} />
    </>
  );
}

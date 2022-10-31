const { PrismaClient } = require("@prisma/client");

const expData = [
  {
    rating: "High",
    summary:
      "Good coffee and vibes amongst other things, just the change to chat and connect ",
    date: "Jan 17, 2022",
    title: "Juno Eatery",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-1.png",
    url: "https://simonbeirouti.com",
  },
  {
    rating: "Medium",
    summary:
      "Good coffee and vibes amongst other things, just the change to chat and connect ",
    date: "Jan 17, 2022",
    title: "Juno Eatery",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-1.png",
    url: "https://simonbeirouti.com",
  },
  {
    rating: "Low",
    summary:
      "Good coffee and vibes amongst other things, just the change to chat and connect ",
    date: "Jan 17, 2022",
    title: "Juno Eatery",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-1.png",
    url: "https://simonbeirouti.com",
  },
  {
    rating: "Low",
    summary:
      "Good coffee and vibes amongst other things, just the change to chat and connect ",
    date: "Jan 17, 2022",
    title: "Juno Eatery",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-1.png",
    url: "https://simonbeirouti.com",
  },
  {
    rating: "Low",
    summary:
      "Good coffee and vibes amongst other things, just the change to chat and connect ",
    date: "Jan 17, 2022",
    title: "Juno Eatery",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-1.png",
    url: "https://simonbeirouti.com",
  },
];

const projData = [
  {
    title: "How to write content about your photographs",
    date: "April 09, 2022",
    snippet:
      "Lorem ipsum dolor sit amet, consec tetur adip iscing elit quis auctor...",
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/4/thumbnail-1.png",
    url: "https://simonbeirouti.com",
  },
  {
    title: "How to write content about your photographs",
    date: "April 09, 2022",
    snippet:
      "Lorem ipsum dolor sit amet, consec tetur adip iscing elit quis auctor...",
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/4/thumbnail-2.png",
    url: "https://simonbeirouti.com",
  },
  {
    title: "How to write content about your photographs",
    date: "April 09, 2022",
    snippet:
      "Lorem ipsum dolor sit amet, consec tetur adip iscing elit quis auctor...",
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/4/thumbnail-3.png",
    url: "https://simonbeirouti.com",
  },
  {
    title: "How to write content about your photographs",
    date: "April 09, 2022",
    snippet:
      "Lorem ipsum dolor sit amet, consec tetur adip iscing elit quis auctor...",
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/4/thumbnail-4.png",
    url: "https://simonbeirouti.com",
  },
];

const postData = [
  {
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-1.png",
    title: "How to write content about your photographs",
    category: "Growth",
    content:
      "Lorem ipsum dolor sit amet, consec tetur adip iscing elit quis auctor...",
    date: "April 09, 2022",
  },
  {
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-2.png",
    title: "How to write content about your photographs",
    category: "Growth",
    content:
      "Lorem ipsum dolor sit amet, consec tetur adip iscing elit quis auctor...",
    date: "April 09, 2022",
  },
  {
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-3.png",
    title: "How to write content about your photographs",
    category: "Growth",
    content:
      "Lorem ipsum dolor sit amet, consec tetur adip iscing elit quis auctor...",
    date: "April 09, 2022",
  },
];

const statData = [
  {
    title: "Years in business",
    value: "6+",
  },
  {
    title: "Team members",
    value: "37+",
  },
  {
    title: "Projects delivered",
    value: "3,274",
  },
  {
    title: "Customer rating",
    value: "98%",
  },
];

async function seed() {
  const prisma = new PrismaClient();
  await prisma.post.deleteMany();
  await prisma.project.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.stat.deleteMany();

  // Loop through expData and create a new experience for each object
  for (const exp of expData) {
    await prisma.experience.create({
      data: exp,
    });
  }

  // Loop through proData and create a new experience for each object
  for (const proj of projData) {
    await prisma.project.create({
      data: proj,
    });
  }

  // Loop through postData and create a new experience for each object
  for (const post of postData) {
    await prisma.post.create({
      data: post,
    });
  }

  // Loop through postData and create a new experience for each object
  for (const stat of statData) {
    await prisma.stat.create({
      data: stat,
    });
  }

  prisma.$disconnect();
}

seed();

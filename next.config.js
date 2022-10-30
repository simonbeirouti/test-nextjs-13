/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.rareblocks.xyz",
      "landingfoliocom.imgix.net",
      "d33wubrfki0l68.cloudfront.net",
    ],
  },
  experimental: { appDir: true },
};

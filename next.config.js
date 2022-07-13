/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// module.exports = nextConfig;

module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  nextConfig: {
    reactStrictMode: true,
    swcMinify: true,
  },
};

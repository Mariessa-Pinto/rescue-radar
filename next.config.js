/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dl5zpyw5k3jeb.cloudfront.net'],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/adoptapet.me/sb',
  //       destination: 'https://api.adoptapet.me/sb', // Replace with actual API URL
  //     },
  //   ];
  // },
};

module.exports = nextConfig;

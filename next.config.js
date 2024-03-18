/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dl5zpyw5k3jeb.cloudfront.net', 'dbw3zep4prcju.cloudfront.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-ninjas.com',
        port: '',
       
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/adoptapet.me/sb',
        destination: 'https://api.adoptapet.me/sb', // Replace with actual API URL
      },
    ];
  },
};
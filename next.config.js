/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.iconscout.com', 'images.unsplash.com', 'res.cloudbinary.com'],
  },
};

module.exports = nextConfig;

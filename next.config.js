/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.freecodecamp.org",
        port: "",
        pathname: "/curriculum/cat-photo-app/cats.jpg",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/4905078/pexels-photo-4905078.jpeg",
      },
    ],
  },
};

module.exports = nextConfig;

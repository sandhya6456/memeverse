/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgflip.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co", // ✅ Add ImgBB for uploaded memes
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  "output": "standalone",
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/dwewg2ssb/**',
        },
      ],
    },
}

module.exports = nextConfig

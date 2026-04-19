/** @type {import('next').NextConfig} */
const nextConfig = {
typescript: {ignoreBuildErrors: true,},
  allowedDevOrigins: ['bgermanov.com','www.bgermanov.com','13.62.143.218', '13.62.143.218:8080'],
};

module.exports = nextConfig;

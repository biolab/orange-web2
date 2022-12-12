/** @type {import('next').NextConfig} */
const redirect = require("./redirects.json");

const nextConfig = {
  async redirects() {
    return redirect;
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

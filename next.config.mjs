const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: "custom",
    unoptimized: true,
  },
};

export default nextConfig;

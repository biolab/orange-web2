const nextConfig = {
  reactStrictMode: true,
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

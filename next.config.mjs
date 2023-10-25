import BundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

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

export default withBundleAnalyzer(nextConfig);

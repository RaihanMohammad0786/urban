/** @type {import('next').NextConfig} */
const nextConfig = { experimental:{ serverActions:{ allowedOrigins:['*'] } } };
export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: { allowedOrigins: ['*'] } },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
};
export default nextConfig;

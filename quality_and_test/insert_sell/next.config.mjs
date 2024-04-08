/** @type {import('next').NextConfig} */
const nextConfig = {
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose"] // <-- and this
};

export default nextConfig;

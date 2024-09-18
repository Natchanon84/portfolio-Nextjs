/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img5.pic.in.th/file/secure-sv1/',
            },
        ],
        unoptimized: true
    },
    output: 'export',
};

export default nextConfig;


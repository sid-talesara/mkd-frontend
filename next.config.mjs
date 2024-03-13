/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [], // If you have specific domains you want to allow, list them here
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
                // Omitting the port since the default HTTPS port is used
            },
        ],
    },
};

export default nextConfig;

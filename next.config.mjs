/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
                port: "",
                pathname: "/**",
            },
        ],
    },

    // 2nd way to redirect
    redirects : async () => {
        return [
            {
                source: '/login',
                destination: '/api/auth/signin',
                permanent: true,
            }
        ]
    }


};

export default nextConfig;

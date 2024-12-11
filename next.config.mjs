const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn-icons-png.flaticon.com',
          pathname: '/**', // Allows all paths under the hostname
        },
      ],
    },
  };
  
  export default nextConfig;
  
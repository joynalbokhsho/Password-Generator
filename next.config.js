/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        assert: false,
        os: false,
        path: false,
      };
    }
    
    // Exclude undici from client-side bundle
    config.externals = config.externals || [];
    if (!isServer) {
      config.externals.push('undici');
    }
    
    return config;
  },
  transpilePackages: ['firebase'],
}

module.exports = nextConfig

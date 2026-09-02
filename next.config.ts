import type { NextConfig } from 'next';

const nextconfig: NextConfig = {
  // تفعيل أفضل صيغ الضغط للصور
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'marsa-alam-local-guide-six.vercel.app', 
      },
    ],
  },
  // ضغط الـ Assets بـ Gzip/Brotli
  compress: true,
};

export default nextconfig;
import type { NextConfig } from 'next';

const nextconfig: NextConfig = {
  // تفعيل أفضل صيغ الضغط للصور
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // أو الدومين الخاص بالصور لو هترفع على CDN
      },
    ],
  },
  // ضغط الـ Assets بـ Gzip/Brotli
  compress: true,
};

export default nextconfig;
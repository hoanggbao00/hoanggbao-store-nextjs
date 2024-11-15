import type { NextConfig } from 'next';
import NextBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: '5sfashion.vn',
      },
      {
        hostname: 'file.hstatic.net',
      },
      {
        hostname: 'scontent.fhan14-1.fna.fbcdn.net',
      },
      {
        hostname: 'scontent.fhan14-3.fna.fbcdn.net',
      },
      {
        hostname: 'media3.coolmate.me',
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);

/** @type {import('next').NextConfig} */

// RecruitingOS (github.com/cvepo/recruitingos) is a separate Vercel project built under the
// /recruitingos base path; serve it at www.enzohiu.com/recruitingos.
const RECRUITINGOS = 'https://recruitingos-seven.vercel.app';

const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/recruitingos', destination: `${RECRUITINGOS}/recruitingos/` },
        { source: '/recruitingos/:path*', destination: `${RECRUITINGOS}/recruitingos/:path*` },
      ],
    };
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

// RecruitingOS (github.com/cvepo/recruitingos) is a separate Vercel project built under the
// /recruitingos base path; serve it at www.enzohiu.com/recruitingos.
const RECRUITINGOS = 'https://recruitingos-seven.vercel.app';

// Pokéfolio (github.com/cvepo/pokefolio) is likewise a separate Vercel project
// built under the /pokefolio base path; serve it at www.enzohiu.com/pokefolio.
const POKEFOLIO = 'https://pokefolio-xi.vercel.app';

// Memorizer (github.com/cvepo/memorizer) is likewise a separate Vercel project
// built under the /memorizer base path; serve it at www.enzohiu.com/memorizer.
const MEMORIZER = 'https://memorizer-gamma.vercel.app';

// Hippo (github.com/cvepo/hippo) is likewise a separate Vercel project
// built under the /hippo base path; serve it at www.enzohiu.com/hippo.
const HIPPO = 'https://hippo-sable.vercel.app';

const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/recruitingos', destination: `${RECRUITINGOS}/recruitingos/` },
        { source: '/recruitingos/:path*', destination: `${RECRUITINGOS}/recruitingos/:path*` },
        // No trailing slash. The app 308s `/pokefolio/` back to `/pokefolio`,
        // and this rewrite would send that straight back — an infinite loop.
        { source: '/pokefolio', destination: `${POKEFOLIO}/pokefolio` },
        { source: '/pokefolio/:path*', destination: `${POKEFOLIO}/pokefolio/:path*` },
        { source: '/memorizer', destination: `${MEMORIZER}/memorizer` },
        { source: '/memorizer/:path*', destination: `${MEMORIZER}/memorizer/:path*` },
        { source: '/hippo', destination: `${HIPPO}/hippo/` },
        { source: '/hippo/:path*', destination: `${HIPPO}/hippo/:path*` },
      ],
    };
  },
};

module.exports = nextConfig;

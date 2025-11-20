module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: '/hat.sh',
  assetPrefix: '/hat.sh/',
  images: {
    unoptimized: true,
  },
  // Fix for GitHub Pages with custom domain
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/generate-keys': { page: '/generate-keys' },
    };
  },
}

const basePath = process.env.BASE_PATH || '/hat.sh';

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    basePath: basePath,
  },
}

module.exports = {
  images: {
    domains: ['imgix.cosmicjs.com'],
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
}

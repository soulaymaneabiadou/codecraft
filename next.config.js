const withMarkdoc = require('@markdoc/next.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['md', 'tsx']
};

module.exports = withMarkdoc(/* options */)(nextConfig);

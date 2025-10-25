/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/clickshift-deck' : '',

};

module.exports = nextConfig;

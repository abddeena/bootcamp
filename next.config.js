/** @type {import('next').NextConfig} */
const path = require('path');
require('dotenv').config();
const Dotenv = require('dotenv-webpack');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  webpack(config) {
    config.plugins.push(
      new Dotenv({
        path: path.join(__dirname, '.env')
      })
    );
    return config;
  }
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer(nextConfig);

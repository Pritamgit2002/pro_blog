/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

require("dotenv").config();

const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
    ],
  },
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true,
      }),
    ];

    return config;
  },
};

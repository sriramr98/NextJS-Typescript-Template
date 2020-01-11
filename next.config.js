// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv-expand')(require('dotenv').config());

const nextConfig = {
  distDir: 'build',
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    PORT: process.env.PORT,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    config.resolve.modules.push(__dirname);
    return config;
  },
};

module.exports = nextConfig;

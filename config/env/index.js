const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
const appConfig = require(`./${env}`).default;

export default appConfig;

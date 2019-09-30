let node_env = process.env.NODE_ENV;
if (node_env == "production"){
  config = require('./config/config.prod');
} else if (node_env == "staging"){
  config = require('./config/config.staging');
} else {
  node_env = "dev"
  config = require('./config/config.dev');
}
config.NODE_ENV = node_env;

module.exports = config;
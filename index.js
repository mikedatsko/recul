const Recul = require('./src/recul');

const config = {
  localStorage: false
};

const recul = new Recul(config);

module.exports = {
  recul: recul,
  config: config,
  Recul: Recul
};

const getNameFromFileName = fileName => fileName.split('.').slice(0, -1).join('.');

module.exports = {
  getNameFromFileName,
};
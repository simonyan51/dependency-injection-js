const Sequelize = require('sequelize');
const { readdir } = require('./core/utils/fs');
const { getNameFromFileName } = require('./helpers/utils');

const initDB = (
    database,
    username,
    password,
    configs,
    directoryOfModels,
) => {
    const db = {};
    const dir = `${__dirname}/${directoryOfModels}/`;
    db.sequelize = new Sequelize(database, username, password, configs);
    return readdir(dir)
        .then(files => {
            files.forEach(file => {
                const modelName = getNameFromFileName(file);
                const model = db.sequelize['import'](`${dir}${file}`);
                db[modelName] = model;
            });
            return db.sequelize.sync({ force: true });
        })
        .then(() => db);
};

module.exports = initDB;
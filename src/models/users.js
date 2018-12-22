const users = (sequelize, dataTypes) => sequelize.define('users', {
    username: {
        type: dataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: dataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: dataTypes.STRING,
        allowNull: false,
    },
    isVerified: {
        type: dataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
});

export default users;
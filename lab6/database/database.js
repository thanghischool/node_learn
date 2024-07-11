const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('node_demo', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});

async function demoDB() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        createModels(sequelize);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

async function createModels(sequelize) {
    const User = sequelize.define('user', {
        name: DataTypes.TEXT,
        favoriteColor: {
            type: DataTypes.TEXT,
            defaultValue: 'green',
        },
        age: DataTypes.INTEGER,
        cash: DataTypes.INTEGER,
    });

    await sequelize.sync({ force: true });
    const jane = User.build({ name: 'Jane' });
    console.log(jane instanceof User); // true
    jane.age = 18;
    console.log(jane.name); // "Jane"
    await jane.save();
}

demoDB();

module.exports = sequelize;

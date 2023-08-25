import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'test.sqlite',
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    define: {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        freezeTableName: true,
    },
});

console.log('Connecting to database...');

export default sequelize;

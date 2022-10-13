module.exports = {
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: '1234',
    db: 'node_jwt',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
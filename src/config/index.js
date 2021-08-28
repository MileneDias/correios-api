module.exports = {
    dialect: 'postgres',
    url: '',
    define: {
        timestamps: false,
        underscored: true,
        underscoredAll: true,
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
};
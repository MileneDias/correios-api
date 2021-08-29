module.exports = {
    dialect: 'postgres',
    url: 'postgres://pgdjkysptfoxed:fdea9a306d31e103bd63626b74b83c227d77ddf8e9ed7ecdee80d2c43028023c@ec2-54-147-93-73.compute-1.amazonaws.com:5432/d4fgja1p13nnn8',
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
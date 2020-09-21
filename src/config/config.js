// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-4923b76508d53a05deca2280aa493ca4e2617b60.cj6jfxqol2pc.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'admin',
            password: 'bT2033[:#I-`~*G.42}~hp?0I)aC`0$a'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}
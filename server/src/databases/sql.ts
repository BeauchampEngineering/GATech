import { Sequelize } from 'sequelize'

//@ts-ignore
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
          }
    }
})

// used to run sql locally

// const sequelize = new Sequelize('portal_manager', 'root', 'root', {
//     dialect: 'mysql'
// })

export default sequelize
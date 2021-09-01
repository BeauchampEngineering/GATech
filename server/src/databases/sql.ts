import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('portal_manager', 'root', 'root', {dialect: 'mysql'});

export default sequelize;
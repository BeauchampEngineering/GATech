import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../databases/sql';

interface LogAttributes {
    id: number
    userId: number
    message: string
    deleted?: boolean
}

interface LogCreationAttributes extends Optional<LogAttributes, 'id'> {}

interface LogInstance extends Model<LogAttributes, LogCreationAttributes>,
    LogAttributes {}

const Log = sequelize.define<LogInstance>('log', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

export default Log 
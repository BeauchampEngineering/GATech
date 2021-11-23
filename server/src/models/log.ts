import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../databases/sql';

interface LogAttributes {
    id: string | number
    userId: string
    message: string
    deleted?: boolean
}

interface LogCreationAttributes extends Optional<LogAttributes, 'id'> {}

interface LogInstance extends Model<LogAttributes, LogCreationAttributes>,
    LogAttributes {}

const Log = sequelize.define<LogInstance>('log', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
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
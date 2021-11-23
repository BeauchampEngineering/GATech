import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../databases/sql'
import { v4 as uuid } from 'uuid'

interface GroupAttributes {
    id: string | number
    identifier?: string
    name: string
}

interface GroupCreationAttributes extends Optional<GroupAttributes, 'id'> {}

interface GroupInstance extends Model<GroupAttributes, GroupCreationAttributes>,
    GroupAttributes {}

const Group = sequelize.define<GroupInstance>('group', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    identifier: {
        type: DataTypes.UUID,
        unique: true,
        defaultValue: () => uuid()
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


export default Group 
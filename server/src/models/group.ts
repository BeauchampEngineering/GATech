import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../databases/sql'

interface GroupAttributes {
    id: number
    name: string
}

interface GroupCreationAttributes extends Optional<GroupAttributes, 'id'> {}

interface GroupInstance extends Model<GroupAttributes, GroupCreationAttributes>,
    GroupAttributes {}

const Group = sequelize.define<GroupInstance>('group', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


export default Group 
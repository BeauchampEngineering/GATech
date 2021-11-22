import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../databases/sql'

interface UserGroupAttributes {}

interface UserGroupInstance extends Model<UserGroupAttributes, UserGroupAttributes>,
UserGroupAttributes {}

const UserGroup = sequelize.define<UserGroupInstance>('user_group', {})

export default UserGroup 
import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../databases/sql'

interface UserAssetAttributes {}

interface UserAssetInstance extends Model<UserAssetAttributes, UserAssetAttributes>,
    UserAssetAttributes {}

const UserAsset = sequelize.define<UserAssetInstance>('user_asset', {})

export default UserAsset 
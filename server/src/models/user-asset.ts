import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../databases/sql';

const UserAsset = sequelize.define('user_asset', {})

export default UserAsset 
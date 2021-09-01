import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../databases/sql';

interface AssetAttributes {
    id: number
    name: string
}

interface AssetCreationAttributes extends Optional<AssetAttributes, 'id'> {}

interface AssetInstance extends Model<AssetAttributes, AssetCreationAttributes>,
    AssetAttributes {}

const Asset = sequelize.define<AssetInstance>('asset', {
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

export default Asset 
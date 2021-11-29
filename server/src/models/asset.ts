import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../databases/sql';
import { v4 as uuid } from 'uuid';

interface AssetAttributes {
    id: string | number
    identifier?: string
    name: string
    fault?: boolean
    image?: Blob
}

interface AssetCreationAttributes extends Optional<AssetAttributes, 'id'> {}

interface AssetInstance extends Model<AssetAttributes, AssetCreationAttributes>,
    AssetAttributes {}

const Asset = sequelize.define<AssetInstance>('asset', {
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
    },
    fault: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    image: {
        type: DataTypes.BLOB('long')
    }
})

export default Asset 
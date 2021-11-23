import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../databases/sql'

interface MessageAttributes {
    id: string | number
    message: string
}

interface MessageCreationAttributes extends Optional<MessageAttributes, 'id'> {}

interface MessageInstance extends Model<MessageAttributes, MessageCreationAttributes>,
    MessageAttributes {}

const Message = sequelize.define<MessageInstance>('Message', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


export default Message 
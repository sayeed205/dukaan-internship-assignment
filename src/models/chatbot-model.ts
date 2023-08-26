import { DataTypes, Model } from 'sequelize';
import db from '../config/db';

class ChatBot extends Model {
    public declare id: number;
    public declare name: string;
    public declare userId: number;
    public declare description: string;
    public declare readonly createdAt: Date;
    public declare readonly updatedAt: Date;
}

ChatBot.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
        },
        description: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize: db,
        modelName: 'ChatBot',
    }
);

export { ChatBot };

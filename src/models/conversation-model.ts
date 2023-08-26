import { DataTypes, Model } from 'sequelize';

import db from '../config/db';

class Conversation extends Model {
    public declare id: number;
    public declare chatbotId: number;
    public declare endUserId: number;
    public declare title: string;
    public declare content: string;
    public declare isComplete: boolean;
    public declare readonly createdAt: Date;
    public declare readonly updatedAt: Date;
}

Conversation.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        chatbotId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        endUserId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isComplete: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        tableName: 'conversations',
        sequelize: db,
    }
);

export { Conversation };

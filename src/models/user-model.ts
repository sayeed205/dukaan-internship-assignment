import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { DataTypes, Model } from 'sequelize';

import db from '../config/db';

class User extends Model {
    public declare id: number;
    public declare name: string;
    public declare email: string;
    public declare password: string;
    public declare readonly createdAt: Date;
    public declare readonly updatedAt: Date;
    public generateToken() {
        const token = jwt.sign(
            { id: this.id, email: this.email },
            process.env.JWT_SECRET!,
            { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
        );
        return token;
    }

    public static async isEmailTaken(email: string) {
        const user = await this.findOne({ where: { email } });
        return !!user;
    }
}
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: 'User',
        hooks: {
            beforeSave: user => {
                if (user.changed('password')) {
                    user.password = bcrypt.hashSync(user.password, 10);
                }
            },
        },
    }
);

export { User };

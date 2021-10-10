import type {Sequelize} from "sequelize";
import type UserModel from "../../types/database/models/userModel.types";
import {DataTypes,UUIDV4} from "sequelize";

const userModel: (sequelize: Sequelize) => UserModel = (sequelize) =>
    sequelize.define("User", {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            validate: {
                notContains: {
                    args: [" "],
                    msg: "White spaces are not valid"
                }
            }
        },
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {msg: "Invalid Email"}
            }
        },
        password: {
            type: DataTypes.STRING
        },
        verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        tableName: 'users'
    });

export default userModel;

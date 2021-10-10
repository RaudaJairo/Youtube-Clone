import type {Optional, ModelDefined} from "sequelize";

export interface UserAttributes {
    id: string
    name: string
    email: string
    password: string
    username: string
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

type UserModel = ModelDefined<UserAttributes, UserCreationAttributes>;

export default UserModel;

import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Posts} from "../post/posts.model";

interface IUser {
    login: string;
    password: string;
    firstName: string;
    lastName: string;
}

@Table({tableName: 'user'})

export class User extends Model<User, IUser>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    login: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;


    @HasMany(() => Posts)
    posts: Posts[]
}
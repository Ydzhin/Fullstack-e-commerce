import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./user.model";
import {Model} from "sequelize-typescript";
import {UserDto} from "./dto/UserDto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private readonly userModel: typeof User) {
    }

    async create(dto: UserDto): Promise<User> {
        const user = await this.userModel.create(dto);

        return user;
    }

    async getAll(): Promise<User[]> {
        const users = await this.userModel.findAll({include: {all: true}});

        return users
    }

    async getOne(id: number): Promise<User> {
        const user = await this.userModel.findOne({where: {id}});

        return user;
    }

    async getByLogin(login: string): Promise<User> {
        const user = await this.userModel.findOne({where: {login}});

        return user;
    }

}

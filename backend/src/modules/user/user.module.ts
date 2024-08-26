import { Module } from '@nestjs/common';
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./user.model";

@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [SequelizeModule.forFeature([User])],
    exports: [UserService, UserModule]
})
export class UserModule {}

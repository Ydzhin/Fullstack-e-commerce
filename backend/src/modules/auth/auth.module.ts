import {forwardRef, Module} from '@nestjs/common';
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {JwtModule} from "@nestjs/jwt";
import * as process from "node:process";
import {UserService} from "../user/user.service";
import {UserModule} from "../user/user.module";

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        forwardRef(() => UserModule),
        JwtModule.register({
            secret: process.env.PRIVATE_KEY || 'SECRET_KEY1',
            signOptions: {
                expiresIn: '24h',
            }
        })
    ],
})
export class AuthModule {}

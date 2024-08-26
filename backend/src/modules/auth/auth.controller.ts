import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {UserDto} from "../user/dto/UserDto";

@Controller('/auth/')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post(`/sign_in`)
    signIn(@Body() userDto: UserDto) {
        return this.authService.login(userDto);
    }
}

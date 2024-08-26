import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserDto} from "./dto/UserDto";

@Controller('/user/')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get(`/get_all`)
    getAll() {
        return this.userService.getAll();
    }

    @Get(`/get_by_id/:id`)
    getById(@Param('id') id: number) {
        return this.userService.getOne(id)
    }

    @Post(`/create`)
    create(@Body() userDto: UserDto) {
        return this.userService.create(userDto);
    }

    @Get(`/get_by_login`)
    getByLogin(@Param('login') login: string) {
        return this.userService.getByLogin(login);
    }
}

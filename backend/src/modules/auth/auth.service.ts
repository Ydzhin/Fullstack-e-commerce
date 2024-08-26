import {Injectable, UnauthorizedException} from "@nestjs/common";
import {UserDto} from "../user/dto/UserDto";
import {User} from "../user/user.model";
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private UserService: UserService,
        private jwtService: JwtService,
    ) {
    }

    // function for examination user data's (really data and data, which come from frontend)

    private async validateUser(userDto: UserDto) {

        const user = await this.UserService.getByLogin(userDto.login);

        if (user && userDto.password === user.password) {
            return user;
        }

        throw new UnauthorizedException({ message: 'Некорректный email или пароль' });
    }


    // function which generate toke

    private async generateToken(user: User) {

        // payload - data which need return in auth
        const payload = {
            login: user.login,
            id: user.id,
        };

        return {
            token: this.jwtService.sign(payload),
        };
    }

    async login(userDto: UserDto) {

        const user = await this.validateUser(userDto);

        return this.generateToken(user);
    }
}
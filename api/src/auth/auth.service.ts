import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { User } from '../user/entities/user.entity';
import { SignUp } from './dto/sign-up.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/services/user.service';

import { Sign } from 'crypto';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(signUp: SignUp): Promise<User> {
    const user = await this.userService.create(signUp);
    delete user.password;
    return user;
  }
  async login(email: string, password: string): Promise<User> {
    let user: User;
    try {
      user = await this.userService.findOne({ where: email });
    } catch (err) {
      throw new UnauthorizedException(
        `There isn't any user with email: ${email}`,
      );
    }
    if (!(await user.checkPassword(password))) {
      throw new UnauthorizedException(
        `Wrong password for user with email: ${email}`,
      );
    }
    return user;
  }
  async verifyPayload(payload: JwtPayload): Promise<User> {
    let user: User;
    try {
      user = await this.userService.findOne({ where: { email: payload.sub } });
    } catch (err) {
      throw new UnauthorizedException(
        `There isn't any user with email: ${payload.sub}`,
      );
    }
    return user;
  }
  signToken(user: User): string {
    const payload = {
      sub: user.email,
    };
    return this.jwtService.sign(payload);
  }
}

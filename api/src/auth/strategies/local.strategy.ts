import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { Strategy } from 'passport-jwt';
import { User } from 'src/user/entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email', passReqToCallback: false });
  }
  validate(email: string, password: string): Promise<User> {
    return this.authService.login(email, password);
  }
}

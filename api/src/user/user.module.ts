import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user.service';
import { isUserAlreadyExist } from './validators/is-user-already-exist.validator';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { ProfileController } from './controllers/profile.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile])],
  controllers: [ProfileController],
  providers: [UserService, isUserAlreadyExist],
  exports: [UserService],
})
export class UserModule {}

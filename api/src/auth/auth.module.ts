import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SessionSerializer } from './session.serializer';
@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, SessionSerializer],
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import { HealthController } from './health.controller';
import { dataSourceOptions } from './data-source';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...dataSourceOptions, autoLoadEntities: true }),
    TerminusModule,
    UserModule,
    AuthModule,
    TodoModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}

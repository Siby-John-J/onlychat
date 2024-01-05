import { Module } from '@nestjs/common';
import { AnotherService } from './another.service';
import { AnotherController } from 'src/controller/user.controller';
import { anotherAbstract } from 'src/domain/abstracts';
import { JwtModule } from '@nestjs/jwt';
import { jwtAuth } from 'src/framework/jwt/jwt.service';
import { AuthJwtModule } from 'src/framework/jwt/jwt.module';

@Module({
  imports: [AuthJwtModule],
  controllers: [AnotherController],
  providers: [AnotherService],
  exports: [],
})
export class AnotherModule {}

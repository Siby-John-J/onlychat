import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtAbstract } from 'src/domain';
import { jwtAuth } from './jwt.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'random',
    }),
  ],
  providers: [
    {
      provide: jwtAbstract,
      useClass: jwtAuth,
    },
  ],
  exports: [jwtAbstract],
})
export class AuthJwtModule {}

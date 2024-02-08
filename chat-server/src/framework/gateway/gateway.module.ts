import { Module } from '@nestjs/common';
import { MainGateWayAbstract, UserRepoAbstract } from 'src/domain/abstracts';
import { MainGateWay } from './gateway';
import { UserRepo } from '../mongo/repository/user.repository.service';
import { ChatModule, UserModule } from 'src/usecase';

@Module({
  imports: [ChatModule],
  providers: [
    {
      provide: MainGateWayAbstract,
      useClass: MainGateWay,
    },
    // {
    //     provide: UserRepoAbstract,
    //     useClass: UserRepo
    // }
  ],
  exports: [MainGateWayAbstract],
})
export class GatewayFrameWorkModule {}

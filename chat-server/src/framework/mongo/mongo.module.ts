import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatRepoAbstract, UserRepoAbstract } from 'src/domain';
import { UserRepo } from './repository/user.repository.service';
import { UserSchema } from './User.schema';
import { ChatRepo } from './repository/chat.repository.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
    ]),
  ],
  providers: [
    {
      provide: UserRepoAbstract,
      useClass: UserRepo,
    },
    {
        provide: ChatRepoAbstract,
        useClass: ChatRepo
    }
  ],
  exports: [UserRepoAbstract, ChatRepoAbstract],
})
export class MongoModule {}

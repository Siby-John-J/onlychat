import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepoAbstract } from 'src/domain';
import { UserRepo } from './user.repository.service';
import { UserSchema } from './User.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'User',
            schema: UserSchema
        }])],
    providers: [
        {
            provide: UserRepoAbstract,
            useClass: UserRepo
        }
    ],
    exports: [UserRepoAbstract]
})
export class MongoModule {}

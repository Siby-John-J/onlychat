import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongoModule } from 'src/framework/mongo/mongo.module';

@Module({
  imports: [MongoModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}

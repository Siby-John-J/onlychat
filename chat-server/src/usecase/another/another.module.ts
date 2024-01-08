import { Module } from '@nestjs/common';
import { AnotherService } from './another.service';
import { AnotherController } from 'src/controller';
import { AuthJwtModule } from 'src/framework/jwt/jwt.module';
import { MongoModule } from 'src/framework/mongo/mongo.module';

@Module({
  imports: [MongoModule],
  // controllers: [AnotherController],
  providers: [AnotherService],
  exports: [AnotherService],
})
export class AnotherModule {}

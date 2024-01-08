import { NestFactory } from '@nestjs/core';
import * as CookieParser from 'cookie-parser'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.use(CookieParser())
  await app.listen(process.env.PORT);
}
bootstrap();

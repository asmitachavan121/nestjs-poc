import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata'
async function bootstrap() {

  const port = 3000
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`listening at  port ${port}`)
}
bootstrap();

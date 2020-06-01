import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import 'reflect-metadata'
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {

  const port = 3000
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Master-Record API')
    .setDescription('Master-Record CRUD api')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('api', app, document)
  await app.listen(port);
  console.log(`listening at  port ${port}`)
}
bootstrap();

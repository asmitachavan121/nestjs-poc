import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import 'reflect-metadata'
import { ValidationPipe, Res } from '@nestjs/common';
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

  let Retry = 10;
  while(Retry) {
    try {
      await app.listen(port);
      break
    } catch(error) {
      Retry -= 1
      console.log(`Retries left ${Retry}`)
      await new Promise(res => setTimeout(res, 500))
    }
  }
    
  console.log(`listening at  port ${app.getUrl}:${port}`)
}
bootstrap();

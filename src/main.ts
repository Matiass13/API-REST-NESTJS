import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // evita campos extras en el Payload al crear
      //forbidNonWhitelisted: true,
      //disableErrorMessages: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('API COMERCIAL')
    .setDescription('Documentacion de la API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('Docs', app, document);
  await app.listen(3000);
}
bootstrap();

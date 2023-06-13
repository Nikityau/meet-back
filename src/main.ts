import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { MainModule } from './main.module';

const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MainModule);

  const config = new DocumentBuilder()
    .setTitle('Meet')
    .setDescription('Meet API description')
    .setVersion('0.0')
    .addTag('meet')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.setGlobalPrefix('api');

  await app.listen(PORT, () => {
    console.log(`Server work on ${PORT} port`);
  });
}
bootstrap();

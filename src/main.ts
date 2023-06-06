import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { MainModule } from './main.module';

const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MainModule);
  app.setGlobalPrefix('api');
  await app.listen(PORT, () => {
    console.log(`Server worn on ${PORT} port`);
  });
}
bootstrap();

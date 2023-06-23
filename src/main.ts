import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationDataPipe } from "./helpers/pipes/validation-data.pipe";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


async function main() {
    const app = await NestFactory.create(AppModule);

    const PORT = process.env.PORT || 5000;

    app.setGlobalPrefix('api')
    app.useGlobalPipes(new ValidationDataPipe())

    const swaggerConfig = new DocumentBuilder()
      .setTitle('Meet API')
      .setDescription('this api of Meet project')
      .setVersion('1.0.0')
      .addTag('Meet')
      .build()

    const doc = SwaggerModule.createDocument(app, swaggerConfig)
    SwaggerModule.setup('/api/doc', app, doc)

    await app.listen(PORT, () => {
        console.log(`Server run on ${PORT} port`);
    });
}

main()
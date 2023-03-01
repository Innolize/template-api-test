import { LogLevel, VERSION_NEUTRAL, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from '@/module/app.module';

declare const module: any;

async function bootstrap() {
  const logLevel = ((process.env.LOGGER_LEVEL as string) || 'error').split(
    ',',
  ) as LogLevel[];
  const app = await NestFactory.create(AppModule, {
    logger: logLevel,
    bufferLogs: true,
  });
  const port = 3000 || process.env.PORT;

  const config = new DocumentBuilder()
    .setTitle('[Template rename this] example')
    .setDescription('The [template rename this] API description')
    .setVersion('1.0')
    .addTag('[template-api-rename-this]')
    .build();

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: VERSION_NEUTRAL,
  });

  if (process.env.NODE_ENV !== 'production') {
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/', app, document);
  }

  app.enableCors()

  await app.listen(port);
  console.log('listening on port', port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap().then(() => console.log('bootstrap'));

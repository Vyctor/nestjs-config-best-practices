import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvironmentService } from './app-config/environment.service';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const environmentService = app.get(EnvironmentService);
  const logger = new Logger('BOOTSTRAP');
  app.listen(environmentService.appPort).then(() => {
    logger.log(
      `Server running on http://localhost:${environmentService.appPort}`,
    );
  });
}
bootstrap();

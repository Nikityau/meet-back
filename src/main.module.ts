import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppModule } from './app/app.module';
import { DBModule } from './db/db.module';
import {
  LoggerMiddleware,
  fnLogger,
} from './app/modules/events/event.middleware';

@Module({
  imports: [DBModule, AppModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class MainModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, fnLogger).forRoutes('');
  }
}

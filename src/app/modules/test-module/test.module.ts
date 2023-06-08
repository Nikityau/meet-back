import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { TestController } from './test.controller';
import { TestMiddleware } from './test.middleware';

@Module({
  imports: [],
  controllers: [TestController],
})
export class TestModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(TestMiddleware).forRoutes('test');
  }
}

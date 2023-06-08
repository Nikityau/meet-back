import { Module } from '@nestjs/common';

import { EventsModule } from './modules/events/index.module';
import { UserModule } from './modules/user/index.module';
import { TestModule } from './modules/test-module/test.module';

@Module({
  imports: [EventsModule, UserModule, TestModule],
})
export class AppModule {}

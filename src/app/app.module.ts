import { Module } from '@nestjs/common';

import { UserModule } from './modules/user/user.module';
import { EventsModule } from './modules/events/event.module';

@Module({
  imports: [UserModule, EventsModule],
})
export class AppModule {}

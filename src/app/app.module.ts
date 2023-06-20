import { Module } from '@nestjs/common';

import { UserModule } from './modules/user/user.module';
import { EventsModule } from './modules/events/event.module';
import { OrgModule } from './modules/organization/org.module';

@Module({
  imports: [UserModule, EventsModule, OrgModule],
})
export class AppModule {}

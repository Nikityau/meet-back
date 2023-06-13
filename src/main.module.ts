import { Module } from '@nestjs/common';

import { AppModule } from './app/app.module';
import { DBModule } from './db/db.module';

@Module({
  imports: [DBModule, AppModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class MainModule {}

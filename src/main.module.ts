import { Module } from '@nestjs/common';

import { AppModule } from './app/app.module';
import { DBModule } from './db/db.module';
import { AdminModule } from "./admin/admin.module";

@Module({
  imports: [DBModule, AppModule, AdminModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class MainModule {}

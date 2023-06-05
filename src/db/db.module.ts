import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Events } from './models/event';
import { Users } from './models/user';

const DB = {
  HOST: process.env.DB_HOST,
  PORT: Number(process.env.DB_PORT),
  USERNAME: process.env.POSTGRES_USER,
  PASSWORD: process.env.POSTGRES_PASSWORD,
  DB: process.env.POSTGRES_DB,
};

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: DB.HOST,
      port: DB.PORT,
      username: DB.USERNAME,
      password: DB.PASSWORD,
      database: DB.DB,
      synchronize: true,
      models: [Events, Users],
    }),
  ],
})
export class DBModule {}

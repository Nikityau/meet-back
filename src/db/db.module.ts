import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserModel } from './models/user.model';


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
      models: [
          UserModel
      ],
    }),
  ],
})
export class DBModule {}

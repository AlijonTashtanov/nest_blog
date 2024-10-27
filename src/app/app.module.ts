import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/user.model'; // Example model
import { ConfigModule } from '@nestjs/config';
import { Role } from '../role/role.model';
import { UserRoles } from '../user-roles.model';
import { MyModule } from '../my/my.module';
import { AppConfigModule } from '../config/config.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [User, Role, UserRoles],
      autoLoadModels: true,
      synchronize: true,
    }),
    AppConfigModule,
    MyModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

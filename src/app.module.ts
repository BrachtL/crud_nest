import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'; 
import { User } from './users/user.entity'; 
import { ConfigModule } from '@nestjs/config'; 

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgre-crud-nest-angular-crud.h.aivencloud.com',
      port: 11186, //5432
      username: 'avnadmin',
      password: process.env.AIVEN_PASSWORD, 
      database: 'defaultdb',
      ssl: {
        rejectUnauthorized: false, // Or configure your CA certificate
      },
      entities: [User],
      synchronize: true, // Set to false in production
    }),
    UsersModule,
  ],
})
export class AppModule {}
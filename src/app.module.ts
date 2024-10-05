// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'; 
import { User } from './users/user.entity'; 
import { ConfigModule } from '@nestjs/config'; 
import { AuthModule } from './auth/auth.module';  // Import AuthModule

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgre-crud-nest-angular-crud.h.aivencloud.com',
      port: 11186,
      username: 'avnadmin',
      password: process.env.AIVEN_PASSWORD, 
      database: 'defaultdb',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,  // Add AuthModule
  ],
})
export class AppModule {}
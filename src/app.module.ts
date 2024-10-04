import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'; // We'll create this soon
import { User } from './users/user.entity'; // User entity

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgre-crud-nest-angular-crud.h.aivencloud.com',
      port: 11186, //5432
      username: 'avnadmin',
      password: 'password', 
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

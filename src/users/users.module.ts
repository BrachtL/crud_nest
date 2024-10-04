import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity'; // Adjust the path if necessary

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register the User entity
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
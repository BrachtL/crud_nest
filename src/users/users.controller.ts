import { Controller, Get, Post, Body, Param, Put, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: Partial<User>): Promise<User> {
    return this.usersService.update(id, user);
  }

  @Patch(':id') 
  patch(@Param('id') id: number, @Body() user: Partial<User>): Promise<User> {
    return this.usersService.update(id, user); // Reuse update logic
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
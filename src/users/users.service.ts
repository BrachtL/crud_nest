import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // Method to find a user by their ID
  async findById(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // Method to find a user by their email
  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { email } });
  }

  // Method to create a user
  async create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  // Method to find all users
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // Method to find one user by ID
  async findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }

  // Method to update a user by ID
  async update(id: number, user: Partial<User>): Promise<User> {
    await this.usersRepository.update(id, user);
    return this.findOne(id);
  }

  // Method to remove a user by ID
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
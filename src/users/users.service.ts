import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityManager, FindOneOptions, FindOptionsWhere } from 'typeorm';
import { User } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly entityManager: EntityManager) {}

  async getAll() {
    return getRepositoryToken(User);
  }

  async findAllUsers(): Promise<User[]> {
    return await this.entityManager.find(User); 
  }

  async findAll(): Promise<User[]> {
    return await this.entityManager.find(User); 
  }

  async findOne(id): Promise<User> {
    const options: FindOneOptions<User> = {
      where: {
        id: id,
      } as FindOptionsWhere<User>,
    };
    return await this.entityManager.findOne(User, options);
  }

  async create(user): Promise<User> {
    return await this.entityManager.create(user); 
  }

  async createUser(user: User): Promise<User> {
    const userN = new User();
    userN.address = user.address;
    userN.email = user.email;;
    userN.name = user.name;
    return await this.entityManager.save(userN); 
  }

  // async remove(id): Promise<User> {
  //   return await this.entityManager.remove(id);
  // }

  async updateUser(id, user: User): Promise<User> {
    const userToUpdate = await this.entityManager.findOne(User, id);
    if (!userToUpdate) throw new Error('User not found');
  
    userToUpdate.address = user.address;
    userToUpdate.email = user.email;
    userToUpdate.name = user.name;
  
    return await this.entityManager.save(userToUpdate);
  }
  
  
  async update(id: number, updateUserDto: UpdateUserDto) {
    const userU = await this.findOne(id);
    if (!userU) {
      throw new NotFoundException();
    }

    Object.assign(userU, updateUserDto);

    return await this.entityManager.save(userU);
  }
  

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException();
    }

    return await this.entityManager.remove(user);
  }
}

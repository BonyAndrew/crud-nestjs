import { EntityManager } from 'typeorm';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly entityManager;
    constructor(entityManager: EntityManager);
    getAll(): Promise<string | Function>;
    findAllUsers(): Promise<User[]>;
    findAll(): Promise<User[]>;
    findOne(id: any): Promise<User>;
    create(user: any): Promise<User>;
    createUser(user: User): Promise<User>;
    updateUser(id: any, user: User): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<User>;
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("@nestjs/typeorm");
let UsersService = class UsersService {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    async getAll() {
        return (0, typeorm_2.getRepositoryToken)(user_entity_1.User);
    }
    async findAllUsers() {
        return await this.entityManager.find(user_entity_1.User);
    }
    async findAll() {
        return await this.entityManager.find(user_entity_1.User);
    }
    async findOne(id) {
        const options = {
            where: {
                id: id,
            },
        };
        return await this.entityManager.findOne(user_entity_1.User, options);
    }
    async create(user) {
        return await this.entityManager.create(user);
    }
    async createUser(user) {
        const userN = new user_entity_1.User();
        userN.address = user.address;
        userN.email = user.email;
        ;
        userN.name = user.name;
        return await this.entityManager.save(userN);
    }
    async updateUser(id, user) {
        const userToUpdate = await this.entityManager.findOne(user_entity_1.User, id);
        if (!userToUpdate)
            throw new Error('User not found');
        userToUpdate.address = user.address;
        userToUpdate.email = user.email;
        userToUpdate.name = user.name;
        return await this.entityManager.save(userToUpdate);
    }
    async update(id, updateUserDto) {
        const userU = await this.findOne(id);
        if (!userU) {
            throw new common_1.NotFoundException();
        }
        Object.assign(userU, updateUserDto);
        return await this.entityManager.save(userU);
    }
    async remove(id) {
        const user = await this.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return await this.entityManager.remove(user);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager])
], UsersService);
//# sourceMappingURL=users.service.js.map
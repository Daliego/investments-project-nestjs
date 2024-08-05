import { Inject, Injectable } from '@nestjs/common';
import { PrismaUserRepository } from '../../database/prisma/repository_impl/prisma.user.repository';
import { UserRepository } from '../../models/repositories/user.repostirory';
import { CreateUserDto } from './dto/create.user.dto';
import { hashPassword } from '../../utils/hashPassword';
import { UserEntity } from '../../models/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(PrismaUserRepository)
    private repository: UserRepository,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    createUserDto.password = await hashPassword(createUserDto.password);

    await this.repository.createUser(createUserDto);
  }

  async findUserByUsername(username: string): Promise<UserEntity> {
    return this.repository.findUserByUsername(username);
  }
}

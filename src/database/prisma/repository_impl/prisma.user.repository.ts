import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { InvestmentRepository } from 'src/models/repositories/investment.repository';
import { UserRepository } from 'src/models/repositories/user.repostirory';
import { UserEntity } from 'src/models/entities/user.entity';
import { CreateUserDto } from 'src/modules/user/dto/create.user.dto';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  async createUser(createUserDto: CreateUserDto): Promise<void> {
    await this.prisma.user.create({
      data: createUserDto,
    });
  }
  async findUserByUsername(username: string): Promise<UserEntity> {
    const user = await this.prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      throw new Error(`User with ${username} not found`);
    }

    return user;
  }
}

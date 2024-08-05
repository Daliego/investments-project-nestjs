import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { PrismaService } from '../../database/prisma/prisma.service';
import { PrismaUserRepository } from '../../database/prisma/repository_impl/prisma.user.repository';
import { prismaMock } from '../../../test/prisma.client.mock';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        PrismaUserRepository,
        PrismaService,
        JwtService,
        { provide: PrismaService, useValue: prismaMock },
      ],
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

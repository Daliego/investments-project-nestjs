import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaUserRepository } from '../../database/prisma/repository_impl/prisma.user.repository';
import { PrismaService } from '../../database/prisma/prisma.service';
import { prismaMock } from '../../../test/prisma.client.mock';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        JwtService,
        UserService,
        PrismaUserRepository,
        PrismaService,
        UserService,
        { provide: PrismaService, useValue: prismaMock },
      ],
      controllers: [AuthController],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

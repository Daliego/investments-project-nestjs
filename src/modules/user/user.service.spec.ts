import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaUserRepository } from '../../database/prisma/repository_impl/prisma.user.repository';
import { PrismaService } from '../../database/prisma/prisma.service';
import { prismaMock } from '../../../test/prisma.client.mock';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        PrismaUserRepository,
        PrismaService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

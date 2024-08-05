import { PrismaClient, User } from '@prisma/client';
import { DeepMockProxy, mockDeep, mockReset } from 'jest-mock-extended';
import prisma from '../src/database/prisma/prisma.client';

jest.mock('../src/database/prisma/prisma.client', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}));

beforeEach(() => {
  mockReset(prismaMock);
});

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;

export const userMock = {
  id: '1',
  name: 'diego',
  username: 'diego',
  password: '123456',
} as User;

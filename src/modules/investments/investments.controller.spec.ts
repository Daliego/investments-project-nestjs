import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentsController } from './investments.controller';
import { InvestmentsService } from './investments.service';
import { PrismaInvestmentRepository } from '../../database/prisma/repository_impl/prisma.investment.repository';
import { PrismaService } from '../../database/prisma/prisma.service';
import { prismaMock } from '../../../test/prisma.client.mock';
import { UserMocks } from '../../../prisma/mocks/user/prisma.users.mocks';
import { CreateInvestmentDto } from './dtos/create.investment.dto';

describe('InvestmentsController', () => {
  let controller: InvestmentsController;
  let service: InvestmentsService;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InvestmentsService,
        PrismaInvestmentRepository,
        PrismaService,
        { provide: PrismaService, useValue: prismaMock },
      ],

      controllers: [InvestmentsController],
    }).compile();

    controller = module.get<InvestmentsController>(InvestmentsController);
    service = module.get<InvestmentsService>(InvestmentsService);
  });

  it('should return empty array when no investments found for a user', async () => {
    prismaMock.investment.findMany.mockResolvedValue([]);
    prismaMock.user.findUnique.mockResolvedValue(UserMocks[0]);

    const reponse = await controller.getAllInvestmentsByUser({ userId: '3' });

    expect(reponse.data).toEqual([]);
  });

  it('should reject investment creation when investment amount is less than the minimum required', async () => {
    const invalidInvestmentData: CreateInvestmentDto = {
      username: 'diego',
      investedValue: 0,
    };

    const createInvestmentSpy = jest.spyOn(service, 'createInvestment');
    createInvestmentSpy.mockRejectedValue(
      new Error('Investment amount is less than the minimum required'),
    );

    await expect(
      controller.crateInvestment(invalidInvestmentData),
    ).rejects.toThrow('Investment amount is less than the minimum required');
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

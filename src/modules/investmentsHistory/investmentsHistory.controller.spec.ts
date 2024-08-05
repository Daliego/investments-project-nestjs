import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentsHistoryController } from './investmentsHistory.controller';
import { PrismaService } from '../../database/prisma/prisma.service';
import { PrismaInvestmentHistoryRepository } from '../../database/prisma/repository_impl/prisma.investmentHistory.repository';
import { prismaMock } from '../../../test/prisma.client.mock';
import { InvestmentsService } from '../investments/investments.service';
import { InvestmentsHistoryService } from './investmentsHistory.service';
import { PrismaInvestmentRepository } from '../../database/prisma/repository_impl/prisma.investment.repository';
import { InvestmentMocks } from 'prisma/mocks/investments/prisma.investments.mocks';

describe('InvestmentsHistoryController', () => {
  let controller: InvestmentsHistoryController;
  let service: InvestmentsHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InvestmentsHistoryService,
        PrismaInvestmentHistoryRepository,
        PrismaInvestmentRepository,
        InvestmentsService,
        PrismaService,
        { provide: PrismaService, useValue: prismaMock },
      ],
      controllers: [InvestmentsHistoryController],
    }).compile();

    service = module.get<InvestmentsHistoryService>(
      InvestmentsHistoryService,
    );

    controller = module.get<InvestmentsHistoryController>(
      InvestmentsHistoryController,
    );
  });
});

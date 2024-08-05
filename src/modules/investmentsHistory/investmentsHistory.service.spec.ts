import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentsHistoryService } from './investmentsHistory.service';
import { PrismaInvestmentHistoryRepository } from '../../database/prisma/repository_impl/prisma.investmentHistory.repository';
import { PrismaService } from '../../database/prisma/prisma.service';
import { prismaMock } from '../../../test/prisma.client.mock';
import { InvestmentsService } from '../investments/investments.service';
import { PrismaInvestmentRepository } from '../../database/prisma/repository_impl/prisma.investment.repository';
import { InvestmentMocks } from 'prisma/mocks/investments/prisma.investments.mocks';

describe('InvestmentsHistoryService', () => {
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
    }).compile();
    
    service = module.get<InvestmentsHistoryService>(InvestmentsHistoryService);
  });
});

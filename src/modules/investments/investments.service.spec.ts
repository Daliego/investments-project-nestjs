import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentsService } from './investments.service';
import { PrismaInvestmentRepository } from '../../database/prisma/repository_impl/prisma.investment.repository';
import { PrismaService } from '../../database/prisma/prisma.service';
import { InvestmentMocks } from '../../../prisma/mocks/investments/prisma.investments.mocks';
import { CreateInvestmentMock } from '../../../prisma/mocks/investments/prisma.createInvestment.mock';
import { GetInvestmentByIdDto } from './dtos/getById.investment.dto';
import { UserMocks } from '../../../prisma/mocks/user/prisma.users.mocks';
import { prismaMock } from '../../../test/prisma.client.mock';
import { AllInvestmentsByUserParamsDto } from './dtos/allInvestmentsByUserParams.dto';
import { InvestmentEntity } from 'src/models/entities/investment.entity';

describe('InvestmentsService', () => {
  let service: InvestmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InvestmentsService,
        PrismaInvestmentRepository,
        PrismaService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<InvestmentsService>(InvestmentsService);
  });

  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  describe('createInvestment', () => {
    it('shoud return an id', async () => {
      prismaMock.user.findUnique.mockResolvedValue(UserMocks[0]);
      prismaMock.investment.create.mockResolvedValue(InvestmentMocks[0]);

      const reponse = await service.createInvestment(CreateInvestmentMock[0]);

      expect(reponse).toBeTruthy();
    });
  });

  describe('getInvestmentById', () => {
    it('should return an investment', async () => {
      const expectedInvestment = {
        ...InvestmentMocks[0],
        expectedIncome: 1000,
      };

      prismaMock.investment.findUnique.mockResolvedValue(InvestmentMocks[0]);

      const reponse = await service.getInvestmentById({
        id: InvestmentMocks[0].id,
      } as GetInvestmentByIdDto);

      expect(reponse).toEqual(expectedInvestment);
    });
  });

  // it('should handle pagination in getAllInvestmentsByUser', async () => {
  //   const params: AllInvestmentsByUserParamsDto = {
  //     userId: 'a5b00d78-e5f4-4bbf-a137-c98d04610dfa',
  //     skip: 1,
  //     take: 2,
  //   };

  //   prismaMock.user.findUnique.mockResolvedValue(UserMocks[0]);
  //   prismaMock.investment.findMany.mockResolvedValue(InvestmentMocks);

  //   const reponse = await service.getAllInvestmentsByUser(params);


  //   console.log('response');
  //   console.log(reponse);

  //   const slice = InvestmentMocks.slice(
  //     params.skip,
  //     params.skip! + params.take!,
  //   );

  //   console.log('slice');
  //   console.log(slice);

  //   expect(reponse).toEqual(
  //     InvestmentMocks.slice(params.skip, params.skip! + params.take! + 1),
  //   );
  // });
});

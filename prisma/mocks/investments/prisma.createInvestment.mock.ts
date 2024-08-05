import { CreateInvestmentDto } from 'src/modules/investments/dtos/create.investment.dto';

export const CreateInvestmentMock: CreateInvestmentDto[] = [
  {
    investedValue: 1000,
    createdAt: new Date('2022-01-01T00:00:00.000Z'),
    username: 'diego',
  },
];

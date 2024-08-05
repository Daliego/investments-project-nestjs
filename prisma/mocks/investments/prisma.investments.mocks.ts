import { InvestmentEntity } from 'src/models/entities/investment.entity';

export const InvestmentMocks: InvestmentEntity[] = [
  {
    id: 'c5a7123e-a36b-4961-8747-721234567890',
    investedValue: 1000,
    createdAt: new Date('2022-01-01T00:00:00.000Z'),
    userId: 'a5b00d78-e5f4-4bbf-a137-c98d04610dfa',
    updateAt: new Date('2022-01-01T00:00:00.000Z'),
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174000',
    investedValue: 1500,
    createdAt: new Date('2022-01-03T00:00:00.000Z'),
    userId: 'a5b00d78-e5f4-4bbf-a137-c98d04610dfa',
    updateAt: new Date('2022-01-03T00:00:00.000Z'),
  },
  {
    id: '897e4567-e89b-12d3-a456-426614174000',
    investedValue: 2000,
    createdAt: new Date('2022-01-05T00:00:00.000Z'),
    userId: 'a5b00d78-e5f4-4bbf-a137-c98d04610dfa',
    updateAt: new Date('2022-01-09T00:00:00.000Z'),
  },
  {
    id: '789e4567-e89b-12d3-a456-426614174000',
    investedValue: 2500,
    createdAt: new Date('2022-01-07T00:00:00.000Z'),
    userId: 'a5b00d78-e5f4-4bbf-a137-c98d04610dfa',
    updateAt: new Date('2022-01-09T00:00:00.000Z'),
  },
  {
    id: '678e4567-e89b-12d3-a456-426614174000',
    investedValue: 3000,
    createdAt: new Date('2022-01-09T00:00:00.000Z'),
    userId: 'a5b00d78-e5f4-4bbf-a137-c98d04610dfa',
    updateAt: new Date('2022-01-09T00:00:00.000Z'),
  },
];

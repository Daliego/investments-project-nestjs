import { IsNotEmpty } from 'class-validator';

export class CreateInvestmentHistoryDto {
  finalValue: number;
  generatedValue: number;
  userId: string;
  investmentId: string;
}

export type CreateInvestmentHistory = Omit<
  CreateInvestmentHistoryDto,
  'finalValue' | 'generatedValue'
>;

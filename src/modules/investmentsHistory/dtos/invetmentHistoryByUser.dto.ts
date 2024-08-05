export class InvestmentHistoryRepositoryByUserDto {
  investment: {
    id: string;
    investedValue: number;
    createdAt: Date;
    updateAt: Date;
    userId: string;
  };
  id: string;
  finalValue: number;
  generatedValue: number;
  createdAt: Date;
  updateAt: Date;
  userId: string;
  investmentId: string;
}

export class AllInvestmentsByUserDto {
  investmentHistory: {
    id: string;
    finalValue: number;
    generatedValue: number;
    createdAt: Date;
    updateAt: Date;
    userId: string;
    investmentId: string;
  };
  id: string;
  investedValue: number;
  createdAt: Date;
  updateAt: Date;
  userId: string;
}

import { InvestmentHistoryRepositoryByUserDto } from 'src/modules/investmentsHistory/dtos/invetmentHistoryByUser.dto';
import { CreateInvestmentHistoryDto } from '../../modules/investmentsHistory/dtos/create.investmentHistory.dto';

export interface InvestmentHistoryRepository {
  // Vai ser ir na tabela de investimentos
  //e adicionar um investimento history,
  //com a data de criação, o userId e o
  //generatedValue e o finalValue
  createInvestmentHistory(
    investmentHistory: CreateInvestmentHistoryDto,
  ): Promise<string>;
  getInvestmentsHistoryByUser(
    userId: string,
  ): Promise<InvestmentHistoryRepositoryByUserDto[]>;
}

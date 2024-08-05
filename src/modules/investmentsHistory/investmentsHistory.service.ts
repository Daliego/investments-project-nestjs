import { Inject, Injectable } from '@nestjs/common';
import { InvestmentHistoryRepository } from 'src/models/repositories/investmentHistory.repository';
import {
  CreateInvestmentHistory,
  CreateInvestmentHistoryDto,
} from './dtos/create.investmentHistory.dto';
import { InvestmentsService } from '../investments/investments.service';
import { PrismaInvestmentHistoryRepository } from '../../database/prisma/repository_impl/prisma.investmentHistory.repository';
import { InvestmentHistoryRepositoryByUserDto } from './dtos/invetmentHistoryByUser.dto';

@Injectable()
export class InvestmentsHistoryService {
  constructor(
    private service: InvestmentsService,
    @Inject(PrismaInvestmentHistoryRepository) private repository: InvestmentHistoryRepository,
  ) {}

  async createInvestmentHistory({
    userId,
    investmentId,
  }: CreateInvestmentHistory): Promise<string> {
    const { expectedIncome, investedValue, createdAt } =
      await this.service.getInvestmentById({
        id: investmentId,
      });

    console.log({ expectedIncome, investedValue, createdAt });

    const id = this.repository.createInvestmentHistory({
      investmentId,
      finalValue: expectedIncome,
      generatedValue: expectedIncome - investedValue,
      userId,
    });

    return id;
  }

  async getInvestmentsHistoryByUser(
    userId: string,
  ): Promise<InvestmentHistoryRepositoryByUserDto[]> {
    return this.repository.getInvestmentsHistoryByUser(userId);
  }
}

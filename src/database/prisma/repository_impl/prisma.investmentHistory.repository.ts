import { InvestmentHistoryRepository } from 'src/models/repositories/investmentHistory.repository';
import { CreateInvestmentHistoryDto } from 'src/modules/investmentsHistory/dtos/create.investmentHistory.dto';
import { PrismaService } from '../prisma.service';
import { InvestmentHistoryRepositoryByUserDto } from 'src/modules/investmentsHistory/dtos/invetmentHistoryByUser.dto';

export class PrismaInvestmentHistoryRepository
  implements InvestmentHistoryRepository
{
  constructor(private prisma: PrismaService) {}
  async createInvestmentHistory({
    investmentId,
    finalValue,
    generatedValue,
    userId,
  }: CreateInvestmentHistoryDto): Promise<string> {
    const investment = await this.prisma.investment.findUnique({
      where: {
        id: investmentId,
      },
    });

    if (!investment) {
      throw new Error(`Investment with ${investmentId} not found`);
    }

    const investmentHistory = await this.prisma.investmentHistory.create({
      data: {
        finalValue,
        generatedValue,
        userId,
        investmentId,
      },
    });

    return investmentHistory.id;
  }
  async getInvestmentsHistoryByUser(
    userId: string,
  ): Promise<InvestmentHistoryRepositoryByUserDto[]> {
    const investmentsHistoryByUser =
      await this.prisma.investmentHistory.findMany({
        where: {
          userId: userId,
        },
        include: {
          investment: true,
        },
      });

    return investmentsHistoryByUser;
  }
}

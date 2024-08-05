import { Module } from '@nestjs/common';
import { InvestmentsHistoryService } from './investmentsHistory.service';
import { InvestmentsHistoryController } from './investmentsHistory.controller';
import { InvestmentsModule } from '../investments/investments.module';
import { PrismaInvestmentHistoryRepository } from 'src/database/prisma/repository_impl/prisma.investmentHistory.repository';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Module({
  imports: [InvestmentsModule],
  providers: [
    InvestmentsHistoryService,
    PrismaInvestmentHistoryRepository,
    PrismaService,
  ],
  controllers: [InvestmentsHistoryController],
})
export class InvestmentsHistoryModule {}

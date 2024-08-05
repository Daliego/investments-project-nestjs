import { Module } from '@nestjs/common';
import { InvestmentsService } from './investments.service';
import { InvestmentsController } from './investments.controller';
import { PrismaInvestmentRepository } from 'src/database/prisma/repository_impl/prisma.investment.repository';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Module({
  providers: [InvestmentsService, PrismaInvestmentRepository, PrismaService],
  controllers: [InvestmentsController],
  exports: [InvestmentsService],
})

export class InvestmentsModule {}

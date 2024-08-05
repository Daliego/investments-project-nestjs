import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { InvestmentsHistoryService } from './investmentsHistory.service';
import {
  CreateInvestmentHistory,
  CreateInvestmentHistoryDto,
} from './dtos/create.investmentHistory.dto';
import { InvestmentHistoryRepositoryByUserDto } from './dtos/invetmentHistoryByUser.dto';
import { AuthGuard } from '../auth/midleware/auth.guard';

@Controller('investmentsHistory')
export class InvestmentsHistoryController {
  constructor(private service: InvestmentsHistoryService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createInvestmentHistory(
    @Body()
    investmentHistoryData: CreateInvestmentHistory,
  ) {
    const id = await this.service.createInvestmentHistory(
      investmentHistoryData,
    );

    return {
      data: id,
    };
  }

  @Get(':userId')
  async getInvestmentsHistoryByUser(@Param('userId') userId: string) {
    const investmentsHistory =
      await this.service.getInvestmentsHistoryByUser(userId);

    return { data: investmentsHistory };
  }
}

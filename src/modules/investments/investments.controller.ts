import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Param,
  Query,
} from '@nestjs/common';
import { CreateInvestmentDto } from './dtos/create.investment.dto';
import { InvestmentsService } from './investments.service';
import { GetInvestmentByIdDto } from './dtos/getById.investment.dto';
import { AllInvestmentsByUserParamsDto } from './dtos/allInvestmentsByUserParams.dto';

@Controller('investments')
export class InvestmentsController {
  constructor(private service: InvestmentsService) {}

  @Post()
  async crateInvestment(@Body() investmentData: CreateInvestmentDto) {
    const id = await this.service.createInvestment(investmentData);
    return {
      data: id,
    };
  }

  @Get()
  async getAllInvestmentsByUser(
    @Query() params: AllInvestmentsByUserParamsDto,
  ) {
    const investments = await this.service.getAllInvestmentsByUser(params);

    return {
      data: investments,
      length: investments.length,
    };
  }

  @Get(':id')
  async getInvestmentById(@Param('id') id: GetInvestmentByIdDto) {
    console.log('got here');

    const investment = await this.service.getInvestmentById(id);

    return {
      data: investment,
    };
  }
}

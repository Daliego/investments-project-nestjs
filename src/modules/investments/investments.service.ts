import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InvestmentRepository } from 'src/models/repositories/investment.repository';
import { CreateInvestmentDto } from './dtos/create.investment.dto';
import { PrismaInvestmentRepository } from '../../database/prisma/repository_impl/prisma.investment.repository';
import { isDateString } from 'class-validator';
import { InvestmentEntity } from 'src/models/entities/investment.entity';
import { GetInvestmentByIdDto } from './dtos/getById.investment.dto';
import { InvestmentsDetailDto } from './dtos/investmentsDetails.investment.dto';
import {
  incomeCalculation,
  calculatePeriod,
} from '../../utils/incomeCalculus/math';
import { AllInvestmentsByUserParamsDto } from './dtos/allInvestmentsByUserParams.dto';
import { AllInvestmentsByUserDto } from './dtos/allInvestments.dto';

@Injectable()
export class InvestmentsService {
  constructor(
    @Inject(PrismaInvestmentRepository)
    private repository: InvestmentRepository,
  ) {}

  async getAllInvestmentsByUser(
    params: AllInvestmentsByUserParamsDto,
  ): Promise<InvestmentEntity[] | AllInvestmentsByUserDto[]> {
    const investments = await this.repository.getAllInvestmentsByUser(params);
    return investments
  }
  
  async getInvestmentById(
    id: GetInvestmentByIdDto,
  ): Promise<InvestmentsDetailDto> {
    const investment = await this.repository.getInvestmentById(id);

    const periodOfInvestment = calculatePeriod(
      investment.createdAt,
      new Date(),
    );

    const expectedIncome = incomeCalculation(
      investment.investedValue,
      periodOfInvestment,
    );

    return {
      ...investment,
      expectedIncome,
    };
  }

  async createInvestment(investment: CreateInvestmentDto): Promise<string> {
    const todaysDate: Date = new Date();

    if (!investment.createdAt || !isDateString(investment.createdAt)) {
      investment.createdAt = todaysDate;
    }

    if (new Date(investment.createdAt).getTime() > todaysDate.getTime()) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Future Dates are not allowed`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.repository.createInvestment(investment);
  }
}

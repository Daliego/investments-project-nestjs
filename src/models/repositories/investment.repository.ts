import { CreateInvestmentDto } from 'src/modules/investments/dtos/create.investment.dto';
import { InvestmentEntity } from '../entities/investment.entity';
import { GetInvestmentByIdDto } from 'src/modules/investments/dtos/getById.investment.dto';
import { AllInvestmentsByUserDto } from 'src/modules/investments/dtos/allInvestments.dto';
import { AllInvestmentsByUserParamsDto } from 'src/modules/investments/dtos/allInvestmentsByUserParams.dto';

export interface InvestmentRepository {
  createInvestment(investment: CreateInvestmentDto): Promise<string>;
  getInvestmentById(id: GetInvestmentByIdDto): Promise<InvestmentEntity>;
  getInvestmentDetailsById(id: GetInvestmentByIdDto): Promise<InvestmentEntity>;
  getAllInvestmentsByUser(
    params: AllInvestmentsByUserParamsDto,
  ): Promise<InvestmentEntity[] | AllInvestmentsByUserDto[]>;
}

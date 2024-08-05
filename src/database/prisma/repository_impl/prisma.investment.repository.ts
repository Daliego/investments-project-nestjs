import { InvestmentRepository } from 'src/models/repositories/investment.repository';
import { PrismaService } from '../prisma.service';
import { CreateInvestmentDto } from 'src/modules/investments/dtos/create.investment.dto';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus, Injectable, BadRequestException } from '@nestjs/common';
import { isDateString } from 'class-validator';
import { InvestmentEntity } from 'src/models/entities/investment.entity';
import { GetInvestmentByIdDto } from 'src/modules/investments/dtos/getById.investment.dto';
import { InvestmentsDetailDto } from '../../../modules/investments/dtos/investmentsDetails.investment.dto';
import { PaginationParams } from 'src/modules/investments/dtos/pagination.investment.dto';
import { AllInvestmentsByUserDto } from 'src/modules/investments/dtos/allInvestments.dto';
import { AllInvestmentsByUserParamsDto } from 'src/modules/investments/dtos/allInvestmentsByUserParams.dto';

@Injectable()
export class PrismaInvestmentRepository implements InvestmentRepository {
  constructor(private prisma: PrismaService) {}
  async getAllInvestmentsByUser({
    userId,
    active = true,
    skip = 0,
    take = 10,
  }: AllInvestmentsByUserParamsDto): Promise<
    InvestmentEntity[] | AllInvestmentsByUserDto[]
  > {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new HttpException(
        `User ${userId} were not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    const investments = await this.prisma.investment.findMany({
      skip: Number(skip),
      take: Number(take),
      where: {
        userId,
      },
      include: {
        investmentHistory: !active,
      },
    });

    return investments;
  }
  async getInvestmentById({
    id,
  }: GetInvestmentByIdDto): Promise<InvestmentEntity> {
    const investment = await this.prisma.investment.findUnique({
      where: { id },
    });

    if (!investment) {
      throw new BadRequestException(`Investment ${id} were not found`);
    }

    return investment;
  }

  async getInvestmentDetailsById({
    id,
  }: GetInvestmentByIdDto): Promise<InvestmentEntity> {
    const investment = await this.prisma.investment.findUnique({
      where: { id },
    });

    if (!investment) {
      throw new BadRequestException(`Investment ${id} were not found`);
    }

    return investment;
  }

  async createInvestment({
    username,
    investedValue,
    createdAt,
  }: CreateInvestmentDto): Promise<string> {
    const user = await this.prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `The username ${username} was not found on the database`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const response = await this.prisma.investment.create({
      data: {
        userId: user.id,
        investedValue: investedValue,
        createdAt,
      },
    });

    return response.id;
  }
}

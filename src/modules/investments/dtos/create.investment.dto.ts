import { IsNotEmpty, Min } from 'class-validator';

export class CreateInvestmentDto {
  @IsNotEmpty()
  username: string;
  @Min(1, { message: 'O valor investido deve ser no mínimo 0' })
  investedValue: number;
  createdAt?: Date;
}

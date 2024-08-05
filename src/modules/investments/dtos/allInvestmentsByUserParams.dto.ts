import { PaginationParams } from './pagination.investment.dto';

// export type AllInvestmentsByUserParamsDto = PaginationParams & {
//   active?: boolean;
//   userId: string;
// };

export class AllInvestmentsByUserParamsDto implements PaginationParams {
  skip?: number | undefined;
  take?: number | undefined;
  active?: boolean;
  userId: string;
}

import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  Entity,
} from 'typeorm';
import { Min } from 'class-validator';
import { UserEntity } from './user.entity';

import { v4 } from 'uuid';
import { InvestmentEntity } from './investment.entity';

@Entity('investmentHistory')
export class InvestmentHistory {
  id: string;
  finalValue: number;
  generatedValue: number;
  createdAt: Date;
  updateAt: Date;

  investment: InvestmentEntity;

  user: UserEntity;

}

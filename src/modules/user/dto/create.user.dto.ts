import { Min } from 'class-validator';

export class CreateUserDto {
  name: string;
  @Min(6)
  username: string;
  @Min(8)
  password: string;
}

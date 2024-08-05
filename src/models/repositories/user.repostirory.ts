import { CreateUserDto } from "src/modules/user/dto/create.user.dto";
import { UserEntity } from "../entities/user.entity";

export interface UserRepository {
  createUser(createUserDto: CreateUserDto): Promise<void>;
  findUserByUsername(username: string): Promise<UserEntity>
}
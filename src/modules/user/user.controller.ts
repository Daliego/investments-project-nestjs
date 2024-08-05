import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { AuthGuard } from '../auth/midleware/auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard)
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
    return { data: 'User created successfully!' };
  }

  @UseGuards(AuthGuard)
  @Get(':username')
  findUserByUsername(@Param('username') username: string) {
    const user = this.userService.findUserByUsername(username);

    return { data: user };
  }
}

import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaUserRepository } from 'src/database/prisma/repository_impl/prisma.user.repository';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AuthGuard } from '../auth/midleware/auth.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    UserService,
    PrismaUserRepository,
    PrismaService,
    AuthGuard,
    JwtService,
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

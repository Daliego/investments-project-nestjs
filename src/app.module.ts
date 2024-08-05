import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvestmentsModule } from './modules/investments/investments.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { UserModule } from './modules/user/user.module';
import { InvestmentsHistoryModule } from './modules/investmentsHistory/investmentsHistory.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    InvestmentsModule,
    InvestmentsHistoryModule,
    UserModule,
    AuthModule,

    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

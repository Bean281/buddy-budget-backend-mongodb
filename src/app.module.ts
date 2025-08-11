import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/users.module';
import { SavingsGoalsModule } from './savings-goals/savings-goals.module';
import { CategoriesModule } from './categories/categories.module';
import { TransactionsModule } from './transactions/transactions.module';
import { BillsModule } from './bills/bills.module';
import { PlansModule } from './plans/plans.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { StatisticsModule } from './statistics/statistics.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UserModule,
    AuthModule,
    SavingsGoalsModule,
    CategoriesModule,
    TransactionsModule,
    BillsModule,
    PlansModule,
    DashboardModule,
    StatisticsModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}

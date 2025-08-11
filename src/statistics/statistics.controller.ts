import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiQuery, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { StatisticsService } from './statistics.service';
import {
  BudgetActualParamsDto,
  BudgetComparisonTypeEnum,
  DailySpendingParamsDto,
  ExpenseCategoriesParamsDto,
  IncomeExpensesParamsDto,
  MonthlyTrendsParamsDto,
  TimePeriodEnum
} from './dto/statistics-params.dto';
import { 
  BudgetActualModel, 
  DailySpendingModel, 
  ExpenseCategoriesModel, 
  IncomeExpensesChartModel, 
  MonthlyTrendsModel, 
  SavingsGoalsModel
} from './models/statistics.model';
import { ParseDatePipe } from 'src/transactions/pipes/parse-date.pipe';

@ApiTags('statistics')
@ApiBearerAuth('JWT-auth')
@ApiUnauthorizedResponse({ description: 'Unauthorized - JWT token is missing or invalid' })
@UseGuards(JwtGuard)
@Controller('statistics')
export class StatisticsController {
  constructor(private statisticsService: StatisticsService) {}

  /**
   * Get income vs expenses chart data
   * 
   * @param userId - Current authenticated user ID
   * @param params - Income vs expenses parameters
   * @returns Income vs expenses chart data
   */
  @Get('income-expenses')
  @ApiOperation({
    summary: 'Get income vs expenses chart data',
    description: 'Retrieves data for income vs expenses chart grouped by week or month',
  })
  @ApiQuery({
    name: 'period',
    required: true,
    enum: TimePeriodEnum,
    description: 'Time period grouping (week/month)',
  })
  @ApiQuery({
    name: 'months',
    required: false,
    type: Number,
    description: 'Number of months to include',
  })
  @ApiOkResponse({
    description: 'Income vs expenses chart data retrieved successfully',
    type: IncomeExpensesChartModel,
  })
  getIncomeExpensesChart(
    @GetUser('id') userId: string,
    @Query() params: IncomeExpensesParamsDto,
  ) {
    return this.statisticsService.getIncomeExpensesChart(userId, params.period, params.months);
  }

  /**
   * Get expense categories breakdown
   * 
   * @param userId - Current authenticated user ID
   * @param params - Expense categories parameters
   * @returns Expense categories breakdown data
   */
  @Get('expense-categories')
  @ApiOperation({
    summary: 'Get expense categories breakdown',
    description: 'Retrieves expense distribution by category for a given time period',
  })
  @ApiQuery({
    name: 'startDate',
    required: true,
    type: String,
    description: 'Start date for filtering (ISO format)',
  })
  @ApiQuery({
    name: 'endDate',
    required: true,
    type: String,
    description: 'End date for filtering (ISO format)',
  })
  @ApiOkResponse({
    description: 'Expense categories breakdown retrieved successfully',
    type: ExpenseCategoriesModel,
  })
  getExpenseCategories(
    @GetUser('id') userId: string,
    @Query('startDate', ParseDatePipe) startDate: Date,
    @Query('endDate', ParseDatePipe) endDate: Date,
  ) {
    return this.statisticsService.getExpenseCategories(userId, startDate, endDate);
  }

  /**
   * Get savings goals progress
   * 
   * @param userId - Current authenticated user ID
   * @returns Savings goals progress data
   */
  @Get('savings-goals')
  @ApiOperation({
    summary: 'Get savings goals progress',
    description: 'Retrieves progress data for all savings goals',
  })
  @ApiOkResponse({
    description: 'Savings goals progress data retrieved successfully',
    type: SavingsGoalsModel,
  })
  getSavingsGoalsProgress(
    @GetUser('id') userId: string,
  ) {
    return this.statisticsService.getSavingsGoalsProgress(userId);
  }

  /**
   * Get monthly trends data
   * 
   * @param userId - Current authenticated user ID
   * @param params - Monthly trends parameters
   * @returns Monthly trends data
   */
  @Get('monthly-trends')
  @ApiOperation({
    summary: 'Get monthly trends data',
    description: 'Retrieves trend data over multiple months for income, expenses, and savings',
  })
  @ApiQuery({
    name: 'months',
    required: false,
    type: Number,
    description: 'Number of months to include',
  })
  @ApiOkResponse({
    description: 'Monthly trends data retrieved successfully',
    type: MonthlyTrendsModel,
  })
  getMonthlyTrends(
    @GetUser('id') userId: string,
    @Query() params: MonthlyTrendsParamsDto,
  ) {
    return this.statisticsService.getMonthlyTrends(userId, params.months);
  }

  /**
   * Get daily spending trend
   * 
   * @param userId - Current authenticated user ID
   * @param params - Daily spending parameters
   * @returns Daily spending data
   */
  @Get('daily-spending')
  @ApiOperation({
    summary: 'Get daily spending trend',
    description: 'Retrieves daily spending data for the specified number of days',
  })
  @ApiQuery({
    name: 'days',
    required: false,
    type: Number,
    description: 'Number of days to include',
  })
  @ApiOkResponse({
    description: 'Daily spending data retrieved successfully',
    type: DailySpendingModel,
  })
  getDailySpending(
    @GetUser('id') userId: string,
    @Query() params: DailySpendingParamsDto,
  ) {
    return this.statisticsService.getDailySpending(userId, params.days);
  }

  /**
   * Get budget vs actual comparison
   * 
   * @param userId - Current authenticated user ID
   * @param params - Budget actual parameters
   * @returns Budget vs actual comparison data
   */
  @Get('budget-actual')
  @ApiOperation({
    summary: 'Get budget vs actual comparison',
    description: 'Compares planned budget with actual spending grouped by month or category',
  })
  @ApiQuery({
    name: 'by',
    required: true,
    enum: BudgetComparisonTypeEnum,
    description: 'Comparison grouping (month/category)',
  })
  @ApiOkResponse({
    description: 'Budget vs actual comparison data retrieved successfully',
    type: BudgetActualModel,
  })
  getBudgetActualComparison(
    @GetUser('id') userId: string,
    @Query() params: BudgetActualParamsDto,
  ) {
    return this.statisticsService.getBudgetActualComparison(userId, params.by);
  }
} 
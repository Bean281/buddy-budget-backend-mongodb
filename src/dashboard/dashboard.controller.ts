import { Controller, Get, Query, UseGuards, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiQuery, ApiTags, ApiUnauthorizedResponse, ApiForbiddenResponse } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { DashboardService } from './dashboard.service';
import { BudgetPeriodEnum, BudgetProgressParamsDto, RecentExpensesParamsDto } from './dto/dashboard-params.dto';
import { 
  BudgetProgressModel, 
  FinancialSummaryModel, 
  RecentExpensesModel, 
  TodaySpendingModel,
  ClearDataResponseModel,
  ClearSingleDataTypeResponseModel 
} from './models/dashboard.model';
import { ParseDatePipe } from 'src/transactions/pipes/parse-date.pipe';

@ApiTags('dashboard')
@ApiBearerAuth('JWT-auth')
@ApiUnauthorizedResponse({ description: 'Unauthorized - JWT token is missing or invalid' })
@UseGuards(JwtGuard)
@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  /**
   * Get financial summary
   * 
   * @param userId - Current authenticated user ID
   * @param fromDate - Optional start date for filtering
   * @param toDate - Optional end date for filtering
   * @returns Financial summary data
   */
  @Get('summary')
  @ApiOperation({
    summary: 'Get financial summary',
    description: 'Retrieves financial summary for the current user',
  })
  @ApiQuery({
    name: 'fromDate',
    required: false,
    type: String,
    description: 'Start date for filtering (ISO format)',
  })
  @ApiQuery({
    name: 'toDate',
    required: false,
    type: String,
    description: 'End date for filtering (ISO format)',
  })
  @ApiOkResponse({
    description: 'Financial summary retrieved successfully',
    type: FinancialSummaryModel,
  })
  getFinancialSummary(
    @GetUser('id') userId: string,
    @Query('fromDate', ParseDatePipe) fromDate?: Date,
    @Query('toDate', ParseDatePipe) toDate?: Date,
  ) {
    return this.dashboardService.getFinancialSummary(userId, fromDate, toDate);
  }

  /**
   * Get today's spending
   * 
   * @param userId - Current authenticated user ID
   * @returns Today's spending data
   */
  @Get('today')
  @ApiOperation({
    summary: "Get today's spending",
    description: 'Retrieves spending information for the current day',
  })
  @ApiOkResponse({
    description: "Today's spending data retrieved successfully",
    type: TodaySpendingModel,
  })
  getTodaySpending(
    @GetUser('id') userId: string,
  ) {
    return this.dashboardService.getTodaySpending(userId);
  }

  /**
   * Get budget progress
   * 
   * @param userId - Current authenticated user ID
   * @param params - Budget progress parameters
   * @returns Budget progress data
   */
  @Get('budget-progress')
  @ApiOperation({
    summary: 'Get budget progress',
    description: 'Retrieves budget progress for a specific period',
  })
  @ApiQuery({
    name: 'period',
    required: true,
    enum: BudgetPeriodEnum,
    description: 'Budget period type',
  })
  @ApiOkResponse({
    description: 'Budget progress data retrieved successfully',
    type: BudgetProgressModel,
  })
  getBudgetProgress(
    @GetUser('id') userId: string,
    @Query() params: BudgetProgressParamsDto,
  ) {
    return this.dashboardService.getBudgetProgress(userId, params.period);
  }

  /**
   * Get recent expenses
   * 
   * @param userId - Current authenticated user ID
   * @param params - Recent expenses parameters
   * @returns Recent expenses data
   */
  @Get('recent-expenses')
  @ApiOperation({
    summary: 'Get recent expenses',
    description: 'Retrieves recent expense transactions',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Maximum number of expenses to return',
  })
  @ApiOkResponse({
    description: 'Recent expenses retrieved successfully',
    type: RecentExpensesModel,
  })
  getRecentExpenses(
    @GetUser('id') userId: string,
    @Query() params: RecentExpensesParamsDto,
  ) {
    return this.dashboardService.getRecentExpenses(userId, params.limit);
  }

  /**
   * Clear only transactions
   * 
   * @param userId - Current authenticated user ID
   * @returns Summary of cleared transactions
   */
  @Post('clear-transactions')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Clear all transactions',
    description: 'Deletes all transactions for the current user. WARNING: This action cannot be undone!',
  })
  @ApiOkResponse({
    description: 'All transactions cleared successfully',
    type: ClearSingleDataTypeResponseModel,
  })
  clearTransactions(@GetUser('id') userId: string) {
    return this.dashboardService.clearTransactions(userId);
  }

  /**
   * Clear only bills
   * 
   * @param userId - Current authenticated user ID
   * @returns Summary of cleared bills
   */
  @Post('clear-bills')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Clear all bills',
    description: 'Deletes all bills and related transactions for the current user. WARNING: This action cannot be undone!',
  })
  @ApiOkResponse({
    description: 'All bills cleared successfully',
    type: ClearSingleDataTypeResponseModel,
  })
  clearBills(@GetUser('id') userId: string) {
    return this.dashboardService.clearBills(userId);
  }

  /**
   * Clear only savings goals
   * 
   * @param userId - Current authenticated user ID
   * @returns Summary of cleared goals
   */
  @Post('clear-goals')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Clear all savings goals',
    description: 'Deletes all savings goals and related plan items for the current user. WARNING: This action cannot be undone!',
  })
  @ApiOkResponse({
    description: 'All savings goals cleared successfully',
    type: ClearSingleDataTypeResponseModel,
  })
  clearSavingsGoals(@GetUser('id') userId: string) {
    return this.dashboardService.clearSavingsGoals(userId);
  }

  /**
   * Clear all user financial data
   * This will delete all transactions, bills, savings goals, budgets, and plan items
   * WARNING: This action cannot be undone!
   * 
   * @param userId - Current authenticated user ID
   * @returns Summary of cleared data
   */
  @Post('clear-all-data')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Clear all user financial data',
    description: 'Deletes ALL user financial data including transactions, bills, savings goals, budgets, and plan items. WARNING: This action cannot be undone!',
  })
  @ApiOkResponse({
    description: 'All user data cleared successfully',
    type: ClearDataResponseModel,
  })
  @ApiForbiddenResponse({ description: 'Forbidden - Invalid user credentials' })
  clearAllUserData(@GetUser('id') userId: string) {
    return this.dashboardService.clearAllUserData(userId);
  }
}

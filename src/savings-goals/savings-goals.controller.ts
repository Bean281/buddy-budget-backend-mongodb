import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { SavingsGoalsService } from './savings-goals.service';
import { AddFundsDto, CreateSavingsGoalDto, UpdateSavingsGoalDto } from './dto';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { ValidateStatusPipe } from './pipes/validate-status.pipe';
import { ApiBearerAuth, ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags, ApiUnauthorizedResponse, ApiForbiddenResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { DeleteGoalResponseModel, SavingsGoalModel } from './models/savings-goal.model';

@ApiTags('goals')
@ApiBearerAuth('JWT-auth')
@ApiUnauthorizedResponse({ description: 'Unauthorized - JWT token is missing or invalid' })
@UseGuards(JwtGuard)
@Controller('goals')
export class SavingsGoalsController {
  constructor(private goalService: SavingsGoalsService) {}

  /**
   * Get all savings goals for the authenticated user
   * Optionally filter by status (active/completed)
   * 
   * @param userId - Current authenticated user ID
   * @param status - Optional filter for goal status
   * @returns Array of savings goals with progress calculations
   */
  @Get()
  @ApiOperation({
    summary: 'Get all savings goals',
    description: 'Retrieves all savings goals for the current user with optional status filtering',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: ['active', 'completed'],
    description: 'Filter goals by status',
  })
  @ApiOkResponse({
    description: 'List of savings goals retrieved successfully',
    type: [SavingsGoalModel],
  })
  getGoals(
    @GetUser('id') userId: string,
    @Query('status', ValidateStatusPipe) status?: 'active' | 'completed',
  ) {
    return this.goalService.getGoals(userId, status);
  }

  /**
   * Create a new savings goal
   * 
   * @param userId - Current authenticated user ID
   * @param dto - Goal creation data
   * @returns The created goal with progress calculations
   */
  @Post()
  @ApiOperation({
    summary: 'Create a new savings goal',
    description: 'Creates a new savings goal for the current user',
  })
  @ApiCreatedResponse({
    description: 'The savings goal has been successfully created',
    type: SavingsGoalModel,
  })
  createGoal(
    @GetUser('id') userId: string,
    @Body() dto: CreateSavingsGoalDto,
  ) {
    return this.goalService.createGoal(userId, dto);
  }

  /**
   * Update an existing savings goal
   * 
   * @param userId - Current authenticated user ID
   * @param goalId - ID of the goal to update
   * @param dto - Goal update data
   * @returns The updated goal with progress calculations
   */
  @Put(':id')
  @ApiOperation({
    summary: 'Update a savings goal',
    description: 'Updates an existing savings goal by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Savings goal ID',
  })
  @ApiOkResponse({
    description: 'The savings goal has been successfully updated',
    type: SavingsGoalModel,
  })
  @ApiForbiddenResponse({ description: 'Forbidden - User does not own this goal' })
  @ApiNotFoundResponse({ description: 'Not Found - Goal with the given ID does not exist' })
  updateGoal(
    @GetUser('id') userId: string,
    @Param('id') goalId: string,
    @Body() dto: UpdateSavingsGoalDto,
  ) {
    return this.goalService.updateGoal(userId, goalId, dto);
  }

  /**
   * Delete a savings goal
   * 
   * @param userId - Current authenticated user ID
   * @param goalId - ID of the goal to delete
   * @returns No content on success
   */
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a savings goal',
    description: 'Deletes a savings goal by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Savings goal ID',
  })
  @ApiNoContentResponse({
    description: 'The savings goal has been successfully deleted',
  })
  @ApiForbiddenResponse({ description: 'Forbidden - User does not own this goal' })
  @ApiNotFoundResponse({ description: 'Not Found - Goal with the given ID does not exist' })
  deleteGoal(
    @GetUser('id') userId: string,
    @Param('id') goalId: string,
  ) {
    return this.goalService.deleteGoal(userId, goalId);
  }

  /**
   * Add funds to a savings goal
   * 
   * @param userId - Current authenticated user ID
   * @param goalId - ID of the goal to add funds to
   * @param dto - Fund addition data
   * @returns The updated goal with new amount and progress calculations
   */
  @Put(':id/add-funds')
  @ApiOperation({
    summary: 'Add funds to a savings goal',
    description: 'Adds funds to an existing savings goal, increasing its current amount',
  })
  @ApiParam({
    name: 'id',
    description: 'Savings goal ID',
  })
  @ApiOkResponse({
    description: 'Funds have been successfully added to the goal',
    type: SavingsGoalModel,
  })
  @ApiForbiddenResponse({ 
    description: 'Forbidden - User does not own this goal or goal is already completed' 
  })
  @ApiNotFoundResponse({ description: 'Not Found - Goal with the given ID does not exist' })
  addFunds(
    @GetUser('id') userId: string,
    @Param('id') goalId: string,
    @Body() dto: AddFundsDto,
  ) {
    return this.goalService.addFunds(userId, goalId, dto);
  }

  /**
   * Mark a savings goal as completed
   * 
   * @param userId - Current authenticated user ID
   * @param goalId - ID of the goal to complete
   * @returns The updated goal with completed status
   */
  @Put(':id/complete')
  @ApiOperation({
    summary: 'Mark a savings goal as completed',
    description: 'Marks an existing savings goal as completed',
  })
  @ApiParam({
    name: 'id',
    description: 'Savings goal ID',
  })
  @ApiOkResponse({
    description: 'The savings goal has been successfully marked as completed',
    type: SavingsGoalModel,
  })
  @ApiForbiddenResponse({ 
    description: 'Forbidden - User does not own this goal or goal is already completed' 
  })
  @ApiNotFoundResponse({ description: 'Not Found - Goal with the given ID does not exist' })
  completeGoal(
    @GetUser('id') userId: string,
    @Param('id') goalId: string,
  ) {
    return this.goalService.completeGoal(userId, goalId);
  }

  /**
   * Sync savings goals with dashboard totals (repair inconsistencies)
   * 
   * @param userId - Current authenticated user ID
   * @returns Sync status and results
   */
  @Post('sync')
  @ApiOperation({
    summary: 'Sync savings goals with dashboard',
    description: 'Repairs any inconsistencies between savings goals and dashboard totals',
  })
  @ApiOkResponse({
    description: 'Savings goals synced successfully',
  })
  syncGoalsWithDashboard(
    @GetUser('id') userId: string,
  ) {
    return this.goalService.syncGoalsWithDashboard(userId);
  }

  /**
   * Get historical savings data across multiple months
   * 
   * @param userId - Current authenticated user ID
   * @param months - Number of months to retrieve (default: 6)
   * @returns Historical savings data with trends
   */
  @Get('history')
  @ApiOperation({
    summary: 'Get savings history',
    description: 'Retrieves historical savings data across multiple months with trends and statistics',
  })
  @ApiQuery({
    name: 'months',
    required: false,
    type: Number,
    description: 'Number of months to retrieve (default: 6)',
    example: 12,
  })
  @ApiOkResponse({
    description: 'Savings history retrieved successfully',
  })
  getSavingsHistory(
    @GetUser('id') userId: string,
    @Query('months') months?: number,
  ) {
    return this.goalService.getSavingsHistory(userId, months);
  }

  /**
   * Get savings analytics - compare actual vs planned savings
   * 
   * @param userId - Current authenticated user ID
   * @param period - Optional period filter (YYYY-MM format)
   * @returns Savings analytics including dashboard sync status
   */
  @Get('analytics')
  @ApiOperation({
    summary: 'Get savings analytics',
    description: 'Compare actual savings (from goals) with dashboard totals and get sync status',
  })
  @ApiQuery({
    name: 'period',
    required: false,
    description: 'Period to analyze in YYYY-MM format (defaults to current month)',
    example: '2024-12',
  })
  @ApiOkResponse({
    description: 'Savings analytics retrieved successfully',
  })
  getSavingsAnalytics(
    @GetUser('id') userId: string,
    @Query('period') period?: string,
  ) {
    return this.goalService.getSavingsAnalytics(userId, period);
  }
} 
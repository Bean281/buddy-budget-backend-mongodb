import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags, ApiUnauthorizedResponse, ApiForbiddenResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { PlansService } from './plans.service';
import { CreatePlanItemDto } from './dto/create-plan-item.dto';
import { UpdatePlanItemDto } from './dto/update-plan-item.dto';
import { SavePlanDto } from './dto/save-plan.dto';
import { PlanItemModel } from './models/plan-item.model';
import { PlanModel } from './models/plan.model';
import { ValidatePlanTypePipe } from './pipes/validate-plan-type.pipe';
import { ValidateItemTypePipe } from './pipes/validate-item-type.pipe';
import { PlanTypeEnum, PlanItemTypeEnum } from './dto/plan-types.enum';

@ApiTags('financial-planning')
@ApiBearerAuth('JWT-auth')
@ApiUnauthorizedResponse({ description: 'Unauthorized - JWT token is missing or invalid' })
@UseGuards(JwtGuard)
@Controller('planning')
export class PlansController {
  constructor(private plansService: PlansService) {}

  /**
   * Get financial plan by type
   * 
   * @param userId - Current authenticated user ID
   * @param type - Plan type (daily/weekly/monthly)
   * @returns Plan with income, expenses, and savings items
   */
  @Get()
  @ApiOperation({
    summary: 'Get financial plan',
    description: 'Retrieves a financial plan with income, expenses, and savings items',
  })
  @ApiQuery({
    name: 'type',
    required: true,
    enum: PlanTypeEnum,
    description: 'Plan type (daily, weekly, monthly)',
  })
  @ApiOkResponse({
    description: 'Financial plan retrieved successfully',
    type: PlanModel,
  })
  getPlan(
    @GetUser('id') userId: string,
    @Query('type', ValidatePlanTypePipe) type: PlanTypeEnum,
  ): Promise<Record<string, any>> {
    return this.plansService.getPlan(userId, type);
  }

  /**
   * Add income item to plan
   * 
   * @param userId - Current authenticated user ID
   * @param type - Plan type (daily/weekly/monthly)
   * @param dto - Plan item data
   * @returns Created plan item
   */
  @Post(':type/income')
  @ApiOperation({
    summary: 'Add income item',
    description: 'Adds a new income item to a financial plan',
  })
  @ApiParam({
    name: 'type',
    enum: PlanTypeEnum,
    description: 'Plan type (daily, weekly, monthly)',
  })
  @ApiCreatedResponse({
    description: 'The income item has been successfully created',
    type: PlanItemModel,
  })
  addIncomeItem(
    @GetUser('id') userId: string,
    @Param('type', ValidatePlanTypePipe) type: PlanTypeEnum,
    @Body() dto: CreatePlanItemDto,
  ): Promise<Record<string, any>> {
    return this.plansService.addPlanItem(userId, type, PlanItemTypeEnum.INCOME, dto);
  }

  /**
   * Add expense item to plan
   * 
   * @param userId - Current authenticated user ID
   * @param type - Plan type (daily/weekly/monthly)
   * @param dto - Plan item data
   * @returns Created plan item
   */
  @Post(':type/expenses')
  @ApiOperation({
    summary: 'Add expense item',
    description: 'Adds a new expense item to a financial plan',
  })
  @ApiParam({
    name: 'type',
    enum: PlanTypeEnum,
    description: 'Plan type (daily, weekly, monthly)',
  })
  @ApiCreatedResponse({
    description: 'The expense item has been successfully created',
    type: PlanItemModel,
  })
  addExpenseItem(
    @GetUser('id') userId: string,
    @Param('type', ValidatePlanTypePipe) type: PlanTypeEnum,
    @Body() dto: CreatePlanItemDto,
  ): Promise<Record<string, any>> {
    return this.plansService.addPlanItem(userId, type, PlanItemTypeEnum.EXPENSE, dto);
  }

  /**
   * Add savings item to plan
   * 
   * @param userId - Current authenticated user ID
   * @param type - Plan type (daily/weekly/monthly)
   * @param dto - Plan item data
   * @returns Created plan item
   */
  @Post(':type/savings')
  @ApiOperation({
    summary: 'Add savings item',
    description: 'Adds a new savings item to a financial plan',
  })
  @ApiParam({
    name: 'type',
    enum: PlanTypeEnum,
    description: 'Plan type (daily, weekly, monthly)',
  })
  @ApiCreatedResponse({
    description: 'The savings item has been successfully created',
    type: PlanItemModel,
  })
  addSavingsItem(
    @GetUser('id') userId: string,
    @Param('type', ValidatePlanTypePipe) type: PlanTypeEnum,
    @Body() dto: CreatePlanItemDto,
  ): Promise<Record<string, any>> {
    return this.plansService.addPlanItem(userId, type, PlanItemTypeEnum.SAVINGS, dto);
  }

  /**
   * Update income item
   * 
   * @param userId - Current authenticated user ID
   * @param type - Plan type (daily/weekly/monthly)
   * @param itemId - Item ID to update
   * @param dto - Updated item data
   * @returns Updated plan item
   */
  @Put(':type/income/:id')
  @ApiOperation({
    summary: 'Update income item',
    description: 'Updates an existing income item in a financial plan',
  })
  @ApiParam({
    name: 'type',
    enum: PlanTypeEnum,
    description: 'Plan type (daily, weekly, monthly)',
  })
  @ApiParam({
    name: 'id',
    description: 'Item ID',
  })
  @ApiOkResponse({
    description: 'The income item has been successfully updated',
    type: PlanItemModel,
  })
  @ApiForbiddenResponse({ description: 'Forbidden - User does not own this item' })
  @ApiNotFoundResponse({ description: 'Not Found - Item with the given ID does not exist' })
  updateIncomeItem(
    @GetUser('id') userId: string,
    @Param('type', ValidatePlanTypePipe) type: PlanTypeEnum,
    @Param('id') itemId: string,
    @Body() dto: UpdatePlanItemDto,
  ): Promise<Record<string, any>> {
    return this.plansService.updatePlanItem(userId, type, PlanItemTypeEnum.INCOME, itemId, dto);
  }

  /**
   * Update expense item
   * 
   * @param userId - Current authenticated user ID
   * @param type - Plan type (daily/weekly/monthly)
   * @param itemId - Item ID to update
   * @param dto - Updated item data
   * @returns Updated plan item
   */
  @Put(':type/expenses/:id')
  @ApiOperation({
    summary: 'Update expense item',
    description: 'Updates an existing expense item in a financial plan',
  })
  @ApiParam({
    name: 'type',
    enum: PlanTypeEnum,
    description: 'Plan type (daily, weekly, monthly)',
  })
  @ApiParam({
    name: 'id',
    description: 'Item ID',
  })
  @ApiOkResponse({
    description: 'The expense item has been successfully updated',
    type: PlanItemModel,
  })
  @ApiForbiddenResponse({ description: 'Forbidden - User does not own this item' })
  @ApiNotFoundResponse({ description: 'Not Found - Item with the given ID does not exist' })
  updateExpenseItem(
    @GetUser('id') userId: string,
    @Param('type', ValidatePlanTypePipe) type: PlanTypeEnum,
    @Param('id') itemId: string,
    @Body() dto: UpdatePlanItemDto,
  ): Promise<Record<string, any>> {
    return this.plansService.updatePlanItem(userId, type, PlanItemTypeEnum.EXPENSE, itemId, dto);
  }

  /**
   * Update savings item
   * 
   * @param userId - Current authenticated user ID
   * @param type - Plan type (daily/weekly/monthly)
   * @param itemId - Item ID to update
   * @param dto - Updated item data
   * @returns Updated plan item
   */
  @Put(':type/savings/:id')
  @ApiOperation({
    summary: 'Update savings item',
    description: 'Updates an existing savings item in a financial plan',
  })
  @ApiParam({
    name: 'type',
    enum: PlanTypeEnum,
    description: 'Plan type (daily, weekly, monthly)',
  })
  @ApiParam({
    name: 'id',
    description: 'Item ID',
  })
  @ApiOkResponse({
    description: 'The savings item has been successfully updated',
    type: PlanItemModel,
  })
  @ApiForbiddenResponse({ description: 'Forbidden - User does not own this item' })
  @ApiNotFoundResponse({ description: 'Not Found - Item with the given ID does not exist' })
  updateSavingsItem(
    @GetUser('id') userId: string,
    @Param('type', ValidatePlanTypePipe) type: PlanTypeEnum,
    @Param('id') itemId: string,
    @Body() dto: UpdatePlanItemDto,
  ): Promise<Record<string, any>> {
    return this.plansService.updatePlanItem(userId, type, PlanItemTypeEnum.SAVINGS, itemId, dto);
  }

  /**
   * Delete income item
   * 
   * @param userId - Current authenticated user ID
   * @param type - Plan type (daily/weekly/monthly)
   * @param itemId - Item ID to delete
   */
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':type/income/:id')
  @ApiOperation({
    summary: 'Delete income item',
    description: 'Deletes an income item from a financial plan',
  })
  @ApiParam({
    name: 'type',
    enum: PlanTypeEnum,
    description: 'Plan type (daily, weekly, monthly)',
  })
  @ApiParam({
    name: 'id',
    description: 'Item ID',
  })
  @ApiNoContentResponse({
    description: 'The income item has been successfully deleted',
  })
  @ApiForbiddenResponse({ description: 'Forbidden - User does not own this item' })
  @ApiNotFoundResponse({ description: 'Not Found - Item with the given ID does not exist' })
  deleteIncomeItem(
    @GetUser('id') userId: string,
    @Param('type', ValidatePlanTypePipe) type: PlanTypeEnum,
    @Param('id') itemId: string,
  ): Promise<{ message: string }> {
    return this.plansService.deletePlanItem(userId, type, PlanItemTypeEnum.INCOME, itemId);
  }

  /**
   * Delete expense item
   * 
   * @param userId - Current authenticated user ID
   * @param type - Plan type (daily/weekly/monthly)
   * @param itemId - Item ID to delete
   */
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':type/expenses/:id')
  @ApiOperation({
    summary: 'Delete expense item',
    description: 'Deletes an expense item from a financial plan',
  })
  @ApiParam({
    name: 'type',
    enum: PlanTypeEnum,
    description: 'Plan type (daily, weekly, monthly)',
  })
  @ApiParam({
    name: 'id',
    description: 'Item ID',
  })
  @ApiNoContentResponse({
    description: 'The expense item has been successfully deleted',
  })
  @ApiForbiddenResponse({ description: 'Forbidden - User does not own this item' })
  @ApiNotFoundResponse({ description: 'Not Found - Item with the given ID does not exist' })
  deleteExpenseItem(
    @GetUser('id') userId: string,
    @Param('type', ValidatePlanTypePipe) type: PlanTypeEnum,
    @Param('id') itemId: string,
  ): Promise<{ message: string }> {
    return this.plansService.deletePlanItem(userId, type, PlanItemTypeEnum.EXPENSE, itemId);
  }

  /**
   * Delete savings item
   * 
   * @param userId - Current authenticated user ID
   * @param type - Plan type (daily/weekly/monthly)
   * @param itemId - Item ID to delete
   */
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':type/savings/:id')
  @ApiOperation({
    summary: 'Delete savings item',
    description: 'Deletes a savings item from a financial plan',
  })
  @ApiParam({
    name: 'type',
    enum: PlanTypeEnum,
    description: 'Plan type (daily, weekly, monthly)',
  })
  @ApiParam({
    name: 'id',
    description: 'Item ID',
  })
  @ApiNoContentResponse({
    description: 'The savings item has been successfully deleted',
  })
  @ApiForbiddenResponse({ description: 'Forbidden - User does not own this item' })
  @ApiNotFoundResponse({ description: 'Not Found - Item with the given ID does not exist' })
  deleteSavingsItem(
    @GetUser('id') userId: string,
    @Param('type', ValidatePlanTypePipe) type: PlanTypeEnum,
    @Param('id') itemId: string,
  ): Promise<{ message: string }> {
    return this.plansService.deletePlanItem(userId, type, PlanItemTypeEnum.SAVINGS, itemId);
  }

  /**
   * Save complete plan
   * 
   * @param userId - Current authenticated user ID
   * @param type - Plan type (daily/weekly/monthly)
   * @param dto - Complete plan data
   * @returns Saved plan object
   */
  @Put(':type')
  @ApiOperation({
    summary: 'Save complete plan',
    description: 'Saves an entire financial plan with all items',
  })
  @ApiParam({
    name: 'type',
    enum: PlanTypeEnum,
    description: 'Plan type (daily, weekly, monthly)',
  })
  @ApiOkResponse({
    description: 'The plan has been successfully saved',
    type: PlanModel,
  })
  savePlan(
    @GetUser('id') userId: string,
    @Param('type', ValidatePlanTypePipe) type: PlanTypeEnum,
    @Body() dto: SavePlanDto,
  ): Promise<Record<string, any>> {
    return this.plansService.savePlan(userId, type, dto);
  }
} 
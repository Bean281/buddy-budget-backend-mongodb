import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags, ApiUnauthorizedResponse, ApiForbiddenResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { BillsService } from './bills.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { PayBillDto } from './dto/pay-bill.dto';
import { BillModel, BillStatusEnum } from './models/bill.model';
import { ValidateBillStatusPipe } from './pipes/validate-bill-status.pipe';
import { ParseIntPipe } from '@nestjs/common';

@ApiTags('bills')
@ApiBearerAuth('JWT-auth')
@ApiUnauthorizedResponse({ description: 'Unauthorized - JWT token is missing or invalid' })
@UseGuards(JwtGuard)
@Controller('bills')
export class BillsController {
  constructor(private billsService: BillsService) {}

  /**
   * Get all bills for the authenticated user
   * Optionally filter by status (upcoming/paid/overdue)
   * 
   * @param userId - Current authenticated user ID
   * @param status - Optional filter for bill status
   * @returns Array of bills with calculated status
   */
  @Get()
  @ApiOperation({
    summary: 'Get all bills',
    description: 'Retrieves all bills for the current user with optional status filtering',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: BillStatusEnum,
    description: 'Filter bills by status (upcoming, paid, overdue)',
  })
  @ApiOkResponse({
    description: 'List of bills retrieved successfully',
    type: [BillModel],
  })
  getBills(
    @GetUser('id') userId: string,
    @Query('status', ValidateBillStatusPipe) status?: BillStatusEnum,
  ) {
    return this.billsService.getBills(userId, status);
  }

  /**
   * Get upcoming bill reminders
   * 
   * @param userId - Current authenticated user ID
   * @param days - Number of days in advance to check
   * @returns Array of upcoming bills within the specified days
   */
  @Get('reminders')
  @ApiOperation({
    summary: 'Get bill reminders',
    description: 'Retrieves upcoming bills due within the specified number of days',
  })
  @ApiQuery({
    name: 'days',
    required: false,
    type: Number,
    description: 'Number of days in advance to retrieve reminders for (default: 7)',
  })
  @ApiOkResponse({
    description: 'Bill reminders retrieved successfully',
    type: [BillModel],
  })
  getBillReminders(
    @GetUser('id') userId: string,
    @Query('days', new ParseIntPipe({ optional: true })) days?: number,
  ) {
    return this.billsService.getBillReminders(userId, days || 7);
  }

  /**
   * Get a bill by ID
   * 
   * @param userId - Current authenticated user ID
   * @param billId - ID of the bill to retrieve
   * @returns The requested bill
   */
  @Get(':id')
  @ApiOperation({
    summary: 'Get a bill by ID',
    description: 'Retrieves a specific bill by its ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Bill ID',
  })
  @ApiOkResponse({
    description: 'Bill retrieved successfully',
    type: BillModel,
  })
  @ApiNotFoundResponse({ description: 'Not Found - Bill with the given ID does not exist' })
  @ApiForbiddenResponse({ description: 'Forbidden - User does not own this bill' })
  getBillById(
    @GetUser('id') userId: string,
    @Param('id') billId: string,
  ) {
    return this.billsService.getBillById(userId, billId);
  }

  /**
   * Create a new bill
   * 
   * @param userId - Current authenticated user ID
   * @param dto - Bill creation data
   * @returns The created bill
   */
  @Post()
  @ApiOperation({
    summary: 'Create a new bill',
    description: 'Creates a new bill for the current user',
  })
  @ApiCreatedResponse({
    description: 'The bill has been successfully created',
    type: BillModel,
  })
  createBill(
    @GetUser('id') userId: string,
    @Body() dto: CreateBillDto,
  ) {
    return this.billsService.createBill(userId, dto);
  }

  /**
   * Update an existing bill
   * 
   * @param userId - Current authenticated user ID
   * @param billId - ID of the bill to update
   * @param dto - Bill update data
   * @returns The updated bill
   */
  @Put(':id')
  @ApiOperation({
    summary: 'Update a bill',
    description: 'Updates an existing bill by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Bill ID',
  })
  @ApiOkResponse({
    description: 'The bill has been successfully updated',
    type: BillModel,
  })
  @ApiForbiddenResponse({ description: 'Forbidden - User does not own this bill' })
  @ApiNotFoundResponse({ description: 'Not Found - Bill with the given ID does not exist' })
  updateBill(
    @GetUser('id') userId: string,
    @Param('id') billId: string,
    @Body() dto: UpdateBillDto,
  ) {
    return this.billsService.updateBill(userId, billId, dto);
  }

  /**
   * Mark a bill as paid
   * 
   * @param userId - Current authenticated user ID
   * @param billId - ID of the bill to mark as paid
   * @param dto - Payment information
   * @returns The updated bill
   */
  @Put(':id/pay')
  @ApiOperation({
    summary: 'Mark a bill as paid',
    description: 'Updates a bill status to paid and optionally creates a transaction',
  })
  @ApiParam({
    name: 'id',
    description: 'Bill ID',
  })
  @ApiOkResponse({
    description: 'The bill has been successfully marked as paid',
    type: BillModel,
  })
  @ApiForbiddenResponse({ description: 'Forbidden - User does not own this bill' })
  @ApiNotFoundResponse({ description: 'Not Found - Bill with the given ID does not exist' })
  markBillAsPaid(
    @GetUser('id') userId: string,
    @Param('id') billId: string,
    @Body() dto: PayBillDto,
  ) {
    return this.billsService.markBillAsPaid(userId, billId, dto);
  }

  /**
   * Delete a bill
   * 
   * @param userId - Current authenticated user ID
   * @param billId - ID of the bill to delete
   * @returns Success message
   */
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a bill',
    description: 'Deletes a bill by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Bill ID',
  })
  @ApiNoContentResponse({
    description: 'The bill has been successfully deleted',
  })
  @ApiForbiddenResponse({ description: 'Forbidden - User does not own this bill' })
  @ApiNotFoundResponse({ description: 'Not Found - Bill with the given ID does not exist' })
  deleteBill(
    @GetUser('id') userId: string,
    @Param('id') billId: string,
  ) {
    return this.billsService.deleteBill(userId, billId);
  }
}
